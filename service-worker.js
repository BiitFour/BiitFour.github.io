self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
  e.waitUntil(
    caches.open('bit4-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/icons/icon-72.png',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        '/styles.css', 
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
