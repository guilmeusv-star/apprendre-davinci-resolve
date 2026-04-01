self.addEventListener('install', function(e) {
  console.log('App installée');
});

self.addEventListener('activate', function(e) {
  console.log('Service Worker activé');
});

self.addEventListener('fetch', function(e) {
  console.log('Fetch intercepté:', e.request.url);
});