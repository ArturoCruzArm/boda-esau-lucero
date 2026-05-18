// selector-sb.js - Supabase sync + Broadcast Realtime para Foro 7
// Slug: boda-esau-lucero | Storage key: boda_esau_lucero_photo_selections
// v9: Broadcast (cliente-a-cliente) en vez de postgres_changes
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
    var channel = null;

    // --- Clock helpers ---
    var CLOCK_KEY = SB_KEY + '_clock';
    function getClock(fi) {
        try { return Number((JSON.parse(localStorage.getItem(CLOCK_KEY) || '{}'))[String(fi)] || 0); } catch(e) { return 0; }
    }
    function setClock(fi, val) {
        try { var c = JSON.parse(localStorage.getItem(CLOCK_KEY) || '{}'); c[String(fi)] = val; localStorage.setItem(CLOCK_KEY, JSON.stringify(c)); } catch(e) {}
    }
    function bumpClock(fi) { var n = getClock(fi) + 1; setClock(fi, n); return n; }

    // --- Helpers ---
    function base(sel) {
        return { ampliacion: !!(sel&&sel.ampliacion), impresion: !!(sel&&sel.impresion), invitacion: !!(sel&&sel.invitacion), descartada: !!(sel&&sel.descartada) };
    }
    function hasAny(sel) { var s = base(sel); return s.ampliacion||s.impresion||s.invitacion||s.descartada; }

    // --- Broadcast: enviar cambio a otros navegadores ---
    function broadcast(type, fotoIndex, sel, clock) {
        if (!channel) { console.warn('[sb] broadcast: no channel'); return; }
        console.log('[sb] enviando broadcast:', type, 'foto:', fotoIndex);
        channel.send({
            type: 'broadcast',
            event: 'sync',
            payload: { sid: sid, type: type, foto_index: fotoIndex, sel: sel, clock: clock }
        }).then(function(res) {
            console.log('[sb] broadcast enviado:', res);
        }).catch(function(e) {
            console.warn('[sb] broadcast error:', e);
        });
    }

    // --- Supabase REST ---
    async function getEventoId() {
        if (eventoId) return eventoId;
        var r = await fetch(SUPABASE_URL + '/rest/v1/eventos?slug=eq.' + EVENTO_SLUG + '&select=id&limit=1', { headers: SB_H });
        var rows = await r.json();
        eventoId = rows[0] ? rows[0].id : null;
        return eventoId;
    }

    async function writeRow(row) {
        var r = await fetch(SUPABASE_URL + '/rest/v1/selecciones?on_conflict=evento_id,foto_index', {
            method: 'POST',
            headers: Object.assign({}, SB_H, { 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
            body: JSON.stringify([row])
        });
        if (!r.ok) throw new Error('UPSERT ' + r.status);
    }

    // --- Save / Delete ---
    async function sbSaveSelection(fotoIndex, sel) {
        console.log('[sb] sbSaveSelection llamado:', fotoIndex, JSON.stringify(sel));
        if (!sbDisponible) { console.warn('[sb] no disponible'); return; }
        if (!hasAny(sel)) { console.warn('[sb] sel vacía, ignorando'); return; }
        try {
            var eid = await getEventoId();
            if (!eid) { console.warn('[sb] no eventoId'); return; }
            var clock = bumpClock(fotoIndex);
            var clean = base(sel);
            clean._sync = { clock: clock, sid: sid, updatedAt: new Date().toISOString(), deleted: false };
            console.log('[sb] escribiendo a BD foto:', fotoIndex, 'clock:', clock);
            await writeRow({
                evento_id: eid, session_id: sid, foto_index: fotoIndex,
                impresion: clean.impresion, invitacion: clean.invitacion,
                descartada: clean.descartada, ampliacion: clean.ampliacion,
                datos: clean, code_version: 5
            });
            console.log('[sb] BD OK, enviando broadcast');
            broadcast('save', fotoIndex, base(sel), clock);
        } catch(e) { console.warn('[sb] save error:', e.message); }
    }

    async function sbDeleteSelection(fotoIndex) {
        console.log('[sb] sbDeleteSelection llamado:', fotoIndex);
        if (!sbDisponible) { console.warn('[sb] no disponible'); return; }
        try {
            var eid = await getEventoId();
            if (!eid) { console.warn('[sb] no eventoId'); return; }
            var clock = bumpClock(fotoIndex);
            var datos = base({});
            datos._sync = { clock: clock, sid: sid, updatedAt: new Date().toISOString(), deleted: true };
            console.log('[sb] delete escribiendo a BD foto:', fotoIndex, 'clock:', clock);
            await writeRow({
                evento_id: eid, session_id: sid, foto_index: fotoIndex,
                impresion: false, invitacion: false, descartada: false, ampliacion: false,
                datos: datos, code_version: 5
            });
            console.log('[sb] delete BD OK, enviando broadcast');
            broadcast('delete', fotoIndex, null, clock);
        } catch(e) { console.warn('[sb] delete error:', e.message); }
    }

    async function sbDeleteAll() {
        if (!sbDisponible) return;
        try {
            var keys = Object.keys(typeof photoSelections !== 'undefined' ? photoSelections : {});
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
            var sel = (row.datos && typeof row.datos === 'object') ? base(row.datos) : base(row);
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

    // Aplicar un cambio entrante (del broadcast)
    function applyChange(data) {
        if (typeof photoSelections === 'undefined') return;
        var fi = data.foto_index;
        if (data.clock) setClock(fi, Math.max(getClock(fi), Number(data.clock)));
        if (data.type === 'save' && data.sel && hasAny(data.sel)) {
            photoSelections[fi] = base(data.sel);
        } else {
            delete photoSelections[fi];
        }
        try { localStorage.setItem(SB_KEY, JSON.stringify(photoSelections)); } catch(e) {}
        if (typeof renderGallery === 'function') renderGallery();
        if (typeof updateStats === 'function') updateStats();
        if (typeof updateFilterButtons === 'function') updateFilterButtons();
    }

    // --- Fetch completo (al cargar y al volver de background) ---
    async function fetchAndApply() {
        try {
            var eid = await getEventoId();
            if (!eid) return;
            var r = await fetch(
                SUPABASE_URL + '/rest/v1/selecciones?evento_id=eq.' + eid + '&select=foto_index,datos,impresion,invitacion,descartada,ampliacion',
                { headers: SB_H }
            );
            if (!r.ok) throw new Error(r.status);
            applyRows(await r.json());
        } catch(e) { console.warn('[sb] fetch:', e.message); }
    }

    // --- Canal Broadcast ---
    function sbSubscribe() {
        if (!window.supabase || !window.supabase.createClient) {
            console.warn('[sb] SDK no disponible');
            return;
        }
        try {
            var client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
                auth: { persistSession: false }
            });
            channel = client.channel('foto-' + EVENTO_SLUG)
                .on('broadcast', { event: 'sync' }, function(msg) {
                    console.log('[sb] recibido broadcast:', JSON.stringify(msg));
                    var data = msg.payload;
                    if (!data) { console.log('[sb] payload vacío'); return; }
                    if (data.sid === sid) { console.log('[sb] ignorado (mismo sid)'); return; }
                    console.log('[sb] aplicando cambio foto:', data.foto_index, data.type);
                    applyChange(data);
                })
                .subscribe(function(status) {
                    console.log('[sb] Broadcast:', status);
                });
        } catch(e) { console.warn('[sb] Broadcast error:', e); }
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

            if (rows.length > 0) {
                applyRows(rows);
            } else {
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
            sbSubscribe();
            sbRegistrarVisita();
        } catch(e) {
            console.warn('[sb] Init error:', e.message);
            sbDisponible = false;
        }
    }

    // Al volver de background, sincronizar una vez desde BD
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
