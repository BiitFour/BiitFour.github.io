const CacheKeyHuerto = "Mihuerto-v1.0.0";

const appShell =[
    "/",
    "/js/app.js",
    "icons",
    "icons/icon-192.png",
    "icons/icon-512.png",
    "icons/icon-72.png",
    "/img/annie-spratt-0cAlNigDa8Q-unsplash.jpg",
    "img/bart-jaillet-TpeR5Im-gHM-unsplash.jpg",
    "img/denise-stokes-mFX7Wnr05k4-unsplash.jpg",
    "img/glen-carrie-pfU6PMG_Bd0-unsplash.jpg",
    "img/glen-carrie-rCRDz-Ruy0I-unsplash.jpg",
    "img/hongwei-fan-9O7Sw-V0bQE-unsplash.jpg",
    "img/karl-abuid-HugW0YzwRDo-unsplash.jpg",
    "img/katka-pavlickova-3ORp4RJu8-c-unsplash.jpg",
    "img/mark-tegethoff-TYUS-cXzy50-unsplash.jpg",
    "img/nagy-arnold-X_IvVDuHvDQ-unsplash.jpg",
    "img/nicolas-herrera-m6baC-bvSwA-unsplash.jpg",
    "img/sixteen-miles-out-ZchXTnNWCOM-unsplash.jpg",
    "img/sophie-kaaij-ErYVGkL0toU-unsplash.jpg",
    "img/vadim-kaipov-8ZELrodSvTc-unsplash.jpg",
    "index.js",
    "styles.css",
    "index.html"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(CacheKeyHuerto).then(cache => {
            cache.addAll(assets);
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
