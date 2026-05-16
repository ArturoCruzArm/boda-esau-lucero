// selector-sb.js - Supabase sync + Realtime para Foro 7
// Slug: boda-esau-lucero | Storage key: boda_esau_lucero_photo_selections
// v5: Solo Realtime (sin polling), escritura directa sin pre-fetch
(function () {
    var SUPABASE_URL  = 'https://nzpujmlienzfetqcgsxz.supabase.co';
    var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s';
    var EVENTO_SLUG   = 'boda-esau-lucero';
    var SB_KEY        = 'boda_esau_lucero_photo_selections';
    var SB_H = { 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON, 'Content-Type': 'application/json' };

    var SESSION_KEY = 'foro7_sid';
    var sid = localStorage.getItem(SESSION_KEY);
    if (!sid) { sid = crypto.randomUUID(); localStorage.setItem(SESSION_KEY, sid); }

    var eventoId = null;
    var sbDisponible = true;
    var _lastWrite = 0;

    // --- Clock helpers ---
    var CLOCK_KEY = SB_KEY + '_clock';
    function getClock(fotoIndex) {
        try { var c = JSON.parse(localStorage.getItem(CLOCK_KEY) || '{}'); return Number(c[String(fotoIndex)] || 0); } catch(e) { return 0; }
    }
    function setClock(fotoIndex, val) {
        try {
            var c = JSON.parse(localStorage.getItem(CLOCK_KEY) || '{}');
            c[String(fotoIndex)] = val;
            localStorage.setItem(CLOCK_KEY, JSON.stringify(c));
        } catch(e) {}
    }
    function bumpClock(fotoIndex) {
        var next = getClock(fotoIndex) + 1;
        setClock(fotoIndex, next);
        return next;
    }

    // --- Helpers ---
    function baseSelection(sel) {
        return {
            ampliacion: !!(sel && sel.ampliacion),
            impresion: !!(sel && sel.impresion),
            invitacion: !!(sel && sel.invitacion),
            descartada: !!(sel && sel.descartada)
        };
    }

    function hasAny(sel) {
        var s = baseSelection(sel);
        return s.ampliacion || s.impresion || s.invitacion || s.descartada;
    }

    // --- Supabase ---
    async function getEventoId() {
        if (eventoId) return eventoId;
        var r = await fetch(SUPABASE_URL + '/rest/v1/eventos?slug=eq.' + EVENTO_SLUG + '&select=id&limit=1', { headers: SB_H });
        var rows = await r.json();
        eventoId = rows[0] ? rows[0].id : null;
        return eventoId;
    }

    async function writeRow(row) {
        _lastWrite = Date.now();
        var r = await fetch(SUPABASE_URL + '/rest/v1/selecciones?on_conflict=evento_id,foto_index', {
            method: 'POST',
            headers: Object.assign({}, SB_H, { 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
            body: JSON.stringify([row])
        });
        if (!r.ok) throw new Error('UPSERT ' + r.status);
    }

    // --- Escritura directa (sin pre-fetch) ---
    async function sbSaveSelection(fotoIndex, sel) {
        if (!sbDisponible || !hasAny(sel)) return;
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var clock = bumpClock(fotoIndex);
            var clean = baseSelection(sel);
            clean._sync = { clock: clock, sid: sid, updatedAt: new Date().toISOString(), deleted: false };
            await writeRow({
                evento_id: eid, session_id: sid, foto_index: fotoIndex,
                impresion: clean.impresion, invitacion: clean.invitacion,
                descartada: clean.descartada, ampliacion: clean.ampliacion,
                datos: clean
            });
        } catch(e) { console.warn('[sb] save:', e.message); }
    }

    async function sbDeleteSelection(fotoIndex) {
        if (!sbDisponible) return;
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var clock = bumpClock(fotoIndex);
            var datos = baseSelection({});
            datos._sync = { clock: clock, sid: sid, updatedAt: new Date().toISOString(), deleted: true };
            await writeRow({
                evento_id: eid, session_id: sid, foto_index: fotoIndex,
                impresion: false, invitacion: false, descartada: false, ampliacion: false,
                datos: datos
            });
        } catch(e) { console.warn('[sb] delete:', e.message); }
    }

    async function sbDeleteAll() {
        if (!sbDisponible) return;
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var keys = Object.keys(typeof photoSelections !== 'undefined' ? photoSelections : {});
            _lastWrite = Date.now();
            await Promise.all(keys.map(function(k) { return sbDeleteSelection(parseInt(k, 10)); }));
        } catch(e) { console.warn('[sb] deleteAll:', e.message); }
    }

    async function sbUpsertSelections() {
        if (!sbDisponible) return;
        var sels = typeof photoSelections !== 'undefined' ? photoSelections : {};
        var keys = Object.keys(sels);
        for (var i = 0; i < keys.length; i++) {
            if (hasAny(sels[keys[i]])) await sbSaveSelection(parseInt(keys[i], 10), sels[keys[i]]);
        }
    }

    // --- Aplicar estado desde BD ---
    function applyRows(rows) {
        var sb = {};
        rows.forEach(function(row) {
            var sel = (row.datos && typeof row.datos === 'object')
                ? baseSelection(row.datos)
                : baseSelection(row);
            var meta = (row.datos && row.datos._sync) || {};
            if (meta.clock) setClock(row.foto_index, Math.max(getClock(row.foto_index), Number(meta.clock)));
            if (hasAny(sel)) sb[row.foto_index] = sel;
        });
        if (typeof photoSelections !== 'undefined') photoSelections = sb;
        try { localStorage.setItem(SB_KEY, JSON.stringify(sb)); } catch(e) {}
        if (typeof renderGallery === 'function') renderGallery();
        if (typeof updateStats === 'function') updateStats();
        if (typeof updateFilterButtons === 'function') updateFilterButtons();
        return sb;
    }

    // Aplicar UN solo cambio entrante (Realtime)
    function applyOneRow(row) {
        if (!row || row.foto_index === undefined) return;
        var sel = (row.datos && typeof row.datos === 'object')
            ? baseSelection(row.datos)
            : baseSelection(row);
        var meta = (row.datos && row.datos._sync) || {};
        if (meta.clock) setClock(row.foto_index, Math.max(getClock(row.foto_index), Number(meta.clock)));

        if (typeof photoSelections === 'undefined') return;
        if (hasAny(sel)) {
            photoSelections[row.foto_index] = sel;
        } else {
            delete photoSelections[row.foto_index];
        }
        try { localStorage.setItem(SB_KEY, JSON.stringify(photoSelections)); } catch(e) {}
        if (typeof renderGallery === 'function') renderGallery();
        if (typeof updateStats === 'function') updateStats();
        if (typeof updateFilterButtons === 'function') updateFilterButtons();
    }

    // --- Fetch completo (solo al cargar y al volver de background) ---
    async function fetchAndApply() {
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var r = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index,datos,impresion,invitacion,descartada,ampliacion',
                { headers: SB_H }
            );
            if (!r.ok) throw new Error(r.status);
            var rows = await r.json();
            applyRows(rows);
        } catch(e) { console.warn('[sb] fetch:', e.message); }
    }

    // --- Realtime: escuchar cambios individuales ---
    function sbSubscribe(eid) {
        if (!window.supabase || !window.supabase.createClient) return;
        try {
            var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
                auth: { persistSession: false }
            });
            client.channel('sel-' + EVENTO_SLUG)
                .on('postgres_changes', {
                    event: '*',
                    schema: 'public',
                    table: 'selecciones',
                    filter: 'evento_id=eq.' + eid
                }, function(payload) {
                    // Ignorar mis propios writes
                    if (Date.now() - _lastWrite < 2000) return;
                    var row = payload.new || payload.old;
                    if (row && row.session_id === sid) return;
                    // Aplicar cambio individual
                    if (row) applyOneRow(row);
                })
                .subscribe();
        } catch(e) { console.warn('[sb] Realtime error:', e); }
    }

    // --- Carga inicial ---
    async function sbLoad() {
        try {
            var eid = await getEventoId();
            if (!eid) { sbDisponible = false; return; }

            var r = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index,datos,impresion,invitacion,descartada,ampliacion',
                { headers: SB_H }
            );
            if (!r.ok) throw new Error(r.status);
            var rows = await r.json();
            var hasRemote = rows.length > 0;

            if (hasRemote) {
                applyRows(rows);
            } else {
                // Si no hay nada en BD pero hay local, subir
                var local = {};
                try { local = JSON.parse(localStorage.getItem(SB_KEY) || '{}'); } catch(e) {}
                if (Object.keys(local).length > 0) {
                    photoSelections = local;
                    if (typeof renderGallery === 'function') renderGallery();
                    if (typeof updateStats === 'function') updateStats();
                    await sbUpsertSelections();
                }
            }

            mostrarBanner(photoSelections || {});
            sbSubscribe(eid);
            sbRegistrarVisita();
        } catch(e) {
            console.warn('[sb] Init error, usando localStorage:', e.message);
            sbDisponible = false;
        }
    }

    // --- Visibilitychange: al volver, sincronizar una vez ---
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && sbDisponible) fetchAndApply();
    });

    // --- Visita ---
    async function sbRegistrarVisita(pagina) {
        try {
            var eid = await getEventoId();
            if (!eid) return;
            await fetch(SUPABASE_URL + '/rest/v1/visitas', {
                method: 'POST',
                headers: Object.assign({}, SB_H, { 'Prefer': 'return=minimal' }),
                body: JSON.stringify({ evento_id: eid, pagina: pagina || 'selector', session_id: sid })
            });
        } catch(e) {}
    }

    function mostrarBanner(sels) {
        if (document.getElementById('banner-sin-sel')) return;
        if (Object.keys(sels || {}).length > 0) return;
        var banner = document.createElement('div');
        banner.id = 'banner-sin-sel';
        banner.style.cssText = 'background:#78350f;color:#fcd34d;text-align:center;padding:12px 20px;font-size:.88rem;position:sticky;top:0;z-index:200;line-height:1.5;';
        banner.innerHTML = '\uD83D\uDCF8 <strong>\u00a1Tus fotos est\u00e1n listas!</strong> A\u00fan no has seleccionado ninguna. \u00a1Empieza ahora! <button onclick="this.parentElement.remove()" style="margin-left:12px;background:transparent;border:1px solid #fcd34d;color:#fcd34d;padding:1px 8px;border-radius:4px;cursor:pointer;">\u00d7</button>';
        document.body.insertBefore(banner, document.body.firstChild);
    }

    // --- API pública ---
    window.sbSaveSelection = sbSaveSelection;
    window.sbDeleteSelection = sbDeleteSelection;
    window.sbDeleteAll = sbDeleteAll;
    window.sbUpsertSelections = sbUpsertSelections;
    window.sbRegistrarVisita = sbRegistrarVisita;
    window.sbRefreshSelections = fetchAndApply;
    window.sbDisponible = function() { return sbDisponible; };

    document.addEventListener('DOMContentLoaded', function() { sbLoad(); });
})();
