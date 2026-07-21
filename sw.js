const CACHE_NAME = 'cercalo-cache-v1';
const ASSETS = [
  'index.html',
  'admin.html',
  'chi-siamo.html',
  'legal.html',
  'index.css',
  'index.js',
  'manifest.json',
  'Loghi/logo_terracotta_scontornato.png'
];

// Installa il service worker e memorizza nella cache le risorse di base
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Attiva il service worker e pulisci le vecchie cache
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Gestione delle richieste: rete con fallback alla cache in caso di blackout offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
