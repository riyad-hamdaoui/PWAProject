// var cacheName = 'hello-pwa';
// var filesToCache = [
//   '/',
//   '/index.html',
// ];

// /* Start the service worker and cache all of the app's content */
// window.self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       return cache.addAll(filesToCache);
//     })
//   );
//   window.self.skipWaiting();
// });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered!');
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}