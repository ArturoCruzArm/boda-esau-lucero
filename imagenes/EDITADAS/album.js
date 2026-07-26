const VERSION = '20260726-2';
const names = ['DSC_2907','DSC_2910','DSC_2961','DSC_2984','DSC_2989','DSC_3001','DSC_3021','DSC_3023','DSC_3024','DSC_3027','DSC_3037','DSC_3042','DSC_3048','DSC_3049','DSC_3050','DSC_3053','DSC_3076','DSC_3077','DSC_3080','DSC_3084','DSC_3085','DSC_3086','DSC_3087','DSC_3089','DSC_3091','DSC_3092','DSC_3095','DSC_3104','DSC_3108','DSC_3109','DSC_3117','DSC_3120','DSC_3122','DSC_3123','DSC_3126','DSC_3129','DSC_3133','DSC_3136','DSC_3139','DSC_3142','DSC_3145','DSC_3147','DSC_3149','DSC_3155','DSC_3159','DSC_3161','DSC_3179','DSC_3186','DSC_3192','DSC_3194','DSC_3199','DSC_3201','DSC_3206','DSC_3208','DSC_3214','DSC_3220','DSC_3222','DSC_3240','DSC_3242','DSC_3243','DSC_3252','DSC_3265','DSC_3283','DSC_3289','DSC_3302','DSC_3308','DSC_3312','DSC_3313','DSC_3315','DSC_3318','DSC_3322','DSC_3330','DSC_3332','DSC_3335','DSC_3339','DSC_3352','DSC_3354','DSC_3356','DSC_3358','DSC_3360','DSC_3362','DSC_3369','DSC_3373','DSC_3377','DSC_3381','DSC_3390','DSC_3393','DSC_3415','DSC_3474','DSC_3552','DSC_3616','DSC_3631','DSC_3641','DSC_3686','DSC_3687','DSC_3842','DSC_3900','DSC_3906','DSC_3913','DSC_3916','DSC_3918'];
const photos = names.map((name, index) => ({
  name,
  index,
  number: Number(name.split('_')[1]),
  full: `${name}.webp?v=${VERSION}`,
  thumb: `thumb/${name}.webp?v=${VERSION}`,
  moment: Number(name.split('_')[1]) <= 3289 ? 'ceremony' : 'party'
}));

const $ = (selector) => document.querySelector(selector);
const gallery = $('#gallery');
const lightbox = $('#lightbox');
const lightboxImage = $('#lightboxImage');
const stage = $('#lightboxStage');
const filmstrip = $('#filmstrip');
const favorites = new Set(JSON.parse(localStorage.getItem('esau-lucero-favorites') || '[]'));
let activeFilter = 'all';
let searchTerm = '';
let visiblePhotos = photos;
let currentIndex = 0;
let slideshowTimer = null;
let toastTimer = null;

function photoCard(photo, sequence) {
  const favorite = favorites.has(photo.name);
  return `
    <button class="photo-card${favorite ? ' is-favorite' : ''}" type="button"
      data-name="${photo.name}" data-sequence="${sequence}" aria-label="Abrir fotografía ${photo.name}">
      <img src="${photo.thumb}" alt="Recuerdo de la boda, fotografía ${sequence + 1}" loading="lazy" decoding="async">
      <span class="photo-card__meta"><span>${photo.name.replace('_', ' · ')}</span><span class="photo-card__heart">${favorite ? '♥' : '♡'}</span></span>
    </button>`;
}

function filteredPhotos() {
  return photos.filter(photo => {
    const matchesSearch = !searchTerm || photo.name.toLowerCase().includes(searchTerm);
    const matchesFilter =
      activeFilter === 'all' ||
      photo.moment === activeFilter ||
      (activeFilter === 'favorites' && favorites.has(photo.name));
    return matchesSearch && matchesFilter;
  });
}

function renderGallery() {
  visiblePhotos = filteredPhotos();
  gallery.innerHTML = visiblePhotos.map(photoCard).join('');
  $('#visibleCount').textContent = visiblePhotos.length;
  $('#favoriteCount').textContent = favorites.size;
  $('#emptyState').hidden = visiblePhotos.length !== 0;
}

function renderFilmstrip() {
  filmstrip.innerHTML = visiblePhotos.map((photo, index) => `
    <button type="button" data-film-index="${index}" aria-label="Ir a ${photo.name}">
      <img src="${photo.thumb}" alt="" loading="lazy">
    </button>`).join('');
}

function showPhoto(index) {
  if (!visiblePhotos.length) return;
  currentIndex = (index + visiblePhotos.length) % visiblePhotos.length;
  const photo = visiblePhotos[currentIndex];
  lightboxImage.style.opacity = '0';
  lightboxImage.src = photo.full;
  lightboxImage.alt = `Fotografía ${currentIndex + 1} de la boda de Esaú y Lucero`;
  lightboxImage.onload = () => { lightboxImage.style.opacity = '1'; };
  $('#lightboxIndex').textContent = String(currentIndex + 1).padStart(2, '0');
  $('#lightboxTotal').textContent = String(visiblePhotos.length).padStart(2, '0');
  $('#lightboxName').textContent = photo.name.replace('_', ' · ');
  $('#downloadButton').href = photo.full;
  $('#downloadButton').download = `${photo.name}-Esau-y-Lucero.webp`;
  $('#favoriteButton').classList.toggle('is-favorite', favorites.has(photo.name));
  $('#favoriteButton').textContent = favorites.has(photo.name) ? '♥' : '♡';
  stage.classList.remove('is-zoomed');
  const strips = filmstrip.querySelectorAll('button');
  strips.forEach((button, i) => button.classList.toggle('is-active', i === currentIndex));
  strips[currentIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function openLightbox(index, startPlaying = false) {
  renderFilmstrip();
  showPhoto(index);
  if (!lightbox.open) lightbox.showModal();
  document.body.style.overflow = 'hidden';
  if (startPlaying) startSlideshow();
}

function closeLightbox() {
  stopSlideshow();
  lightbox.close();
  document.body.style.overflow = '';
  stage.classList.remove('is-zoomed');
}

function toggleFavorite() {
  const photo = visiblePhotos[currentIndex];
  if (!photo) return;
  if (favorites.has(photo.name)) {
    favorites.delete(photo.name);
    showToast('Eliminada de favoritas');
  } else {
    favorites.add(photo.name);
    showToast('Guardada en favoritas');
  }
  localStorage.setItem('esau-lucero-favorites', JSON.stringify([...favorites]));
  $('#favoriteCount').textContent = favorites.size;
  $('#favoriteButton').classList.toggle('is-favorite', favorites.has(photo.name));
  $('#favoriteButton').textContent = favorites.has(photo.name) ? '♥' : '♡';
  document.querySelector(`[data-name="${photo.name}"]`)?.classList.toggle('is-favorite', favorites.has(photo.name));
  const heart = document.querySelector(`[data-name="${photo.name}"] .photo-card__heart`);
  if (heart) heart.textContent = favorites.has(photo.name) ? '♥' : '♡';
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function startSlideshow() {
  if (!lightbox.open) openLightbox(0);
  stopSlideshow();
  $('#slideshowProgress').classList.add('is-playing');
  slideshowTimer = setInterval(() => showPhoto(currentIndex + 1), 4500);
  showToast('Presentación iniciada');
}

function stopSlideshow() {
  clearInterval(slideshowTimer);
  slideshowTimer = null;
  $('#slideshowProgress').classList.remove('is-playing');
}

gallery.addEventListener('click', event => {
  const card = event.target.closest('.photo-card');
  if (card) openLightbox(Number(card.dataset.sequence));
});
filmstrip.addEventListener('click', event => {
  const button = event.target.closest('[data-film-index]');
  if (button) { stopSlideshow(); showPhoto(Number(button.dataset.filmIndex)); }
});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.classList.remove('is-active'));
  button.classList.add('is-active');
  activeFilter = button.dataset.filter;
  renderGallery();
}));
$('#searchInput').addEventListener('input', event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderGallery();
});
$('#resetFilters').addEventListener('click', () => {
  activeFilter = 'all'; searchTerm = ''; $('#searchInput').value = '';
  document.querySelectorAll('.filter').forEach(item => item.classList.toggle('is-active', item.dataset.filter === 'all'));
  renderGallery();
});
$('#prevPhoto').addEventListener('click', () => { stopSlideshow(); showPhoto(currentIndex - 1); });
$('#nextPhoto').addEventListener('click', () => { stopSlideshow(); showPhoto(currentIndex + 1); });
$('#closeLightbox').addEventListener('click', closeLightbox);
$('#favoriteButton').addEventListener('click', toggleFavorite);
$('#zoomButton').addEventListener('click', () => stage.classList.toggle('is-zoomed'));
stage.addEventListener('dblclick', () => stage.classList.toggle('is-zoomed'));
$('#startSlideshow').addEventListener('click', () => openLightbox(0, true));
$('#shareButton').addEventListener('click', async () => {
  const photo = visiblePhotos[currentIndex];
  if (navigator.share) {
    try { await navigator.share({ title: 'Esaú & Lucero', text: `Mira ${photo.name} de nuestro álbum.` }); }
    catch (_) {}
  } else {
    await navigator.clipboard?.writeText(location.href);
    showToast('Enlace del álbum copiado');
  }
});
$('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('esau-lucero-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
$('#soundToggle').addEventListener('click', () => {
  document.body.classList.toggle('ambient');
  showToast(document.body.classList.contains('ambient') ? 'Ambiente visual activado' : 'Ambiente visual desactivado');
});
lightbox.addEventListener('click', event => {
  if (event.target.classList.contains('lightbox__backdrop')) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowRight') { stopSlideshow(); showPhoto(currentIndex + 1); }
  if (event.key === 'ArrowLeft') { stopSlideshow(); showPhoto(currentIndex - 1); }
  if (event.key.toLowerCase() === 'f') toggleFavorite();
  if (event.key === 'Escape') closeLightbox();
  if (event.key === ' ') {
    event.preventDefault();
    slideshowTimer ? stopSlideshow() : startSlideshow();
  }
});
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $('#progress').style.width = `${max ? (scrollY / max) * 100 : 0}%`;
}, { passive: true });

if (localStorage.getItem('esau-lucero-theme') === 'dark') document.body.classList.add('dark');
renderGallery();
