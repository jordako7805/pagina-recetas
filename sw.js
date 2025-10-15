const CACHE_NAME = 'recetas-cache-v1';
const urlsToCache = [
  '/pagina-recetas/',
  '/pagina-recetas/index.html',
  '/pagina-recetas/style.css',
  '/pagina-recetas/manifest.json',
  '/pagina-recetas/sw.js',
  '/pagina-recetas/img/logo/logo canal.png',
  // Agrega más archivos estáticos si es necesario
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
