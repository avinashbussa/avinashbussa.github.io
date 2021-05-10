// put the static assets and routes you want to cache here
const filesToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './images/favicon.svg',
  './images/QDP_192.svg',
  './manifest.webmanifest',
  './Apple_iPhone_11_Green.svg',
  './Apple_iPhone_11_Pro_Max.svg',
  './Apple_iPhone_12_Pro.svg',
  './Apple_iPhone_SE_Red.svg',
  './Apple_Watch_Series_6.svg',
  './Motorola_Moto_360_Rose_Gold.svg',
  './Google_Pixel_5_JustBlack.svg'
];

// the event handler for the activate event
self.addEventListener('activate', e => self.clients.claim());


// the event handler for the install event typically used to cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('qdp')
    .then(cache => {
        return cache.addAll(filesToCache);
    })
  );
});


// the fetch event handler, to intercept requests and serve all static assets from the cache
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });
