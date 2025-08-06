const CacheKeyHuerto = "Mihuerto-v1.0.5";

const appShell =[
    "/",
    "/js/app.js",
    "/icons/icons-1.png",
    "/icons/icons-2.png",
    "/icons/icons-3.png",
    "/icons/icons-4.png",
    "/img/annie-spratt-0cAlNigDa8Q-unsplash.jpg",
    "/img/anturio.jpg",
    "/img/bart-jaillet-TpeR5Im-gHM-unsplash.jpg",
    "/img/denise-stokes-mFX7Wnr05k4-unsplash.jpg",
    "/img/fresa.jpeg",
    "/img/glen-carrie-pfU6PMG_Bd0-unsplash.jpg",
    "/img/glen-carrie-rCRDz-Ruy0I-unsplash.jpg",
    "/img/helecho.jpeg",
    "/img/hongwei-fan-9O7Sw-V0bQE-unsplash.jpg",
    "/img/jitomate.jpeg",
    "/img/karl-abuid-HugW0YzwRDo-unsplash.jpg",
    "/img/katka-pavlickova-3ORp4RJu8-c-unsplash.jpg",
    "/img/lima.jpeg",
    "/img/manzanilla.jpeg",
    "/img/mark-tegethoff-TYUS-cXzy50-unsplash.jpg",
    "/img/menta.jpeg",
    "/img/nagy-arnold-X_IvVDuHvDQ-unsplash.jpg",
    "/img/nicolas-herrera-m6baC-bvSwA-unsplash.jpg",
    "/img/nopal.jpeg",
    "/img/oregano.jpeg",
    "/img/palma.jpeg",
    "/img/potus.jpeg",
    "/img/ruda.jpeg",
    "/img/sabila.jpeg",
    "/img/sansevieria.jpeg",
    "/img/serrano.jpeg",
    "/img/sixteen-miles-out-ZchXTnNWCOM-unsplash.jpg",
    "/img/sophie-kaaij-ErYVGkL0toU-unsplash.jpg",
    "/img/vadim-kaipov-8ZELrodSvTc-unsplash.jpg",
    "/index.js",
    "/notificaciones.js",
    "/styles.css",
    "/nosotros.css",
    "/index.html",
    "/nosotros.html"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(CacheKeyHuerto).then(cache => {
            cache.addAll(appShell);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  clients.openWindow('https://biitfour.github.io');
});