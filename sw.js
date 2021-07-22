self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('offline').then(function(cache) {
            return cache.addAll(
                [
                    '/templates/error404.html',
                    '/static/images/blogging.svg'
                ]
            );
        })
    );
});

self.addEventListener('fetch', function(event) {

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );

});