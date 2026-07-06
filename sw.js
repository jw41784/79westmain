// Offline support for the guest guides — cell coverage around the barn can be spotty.
const CACHE = '79westmain-v1';
const PRECACHE = [
    '/',
    '/house-guide',
    '/regional-guide',
    '/main house.jpg',
    '/barn-logo.webp',
    '/Charlton.woff2',
    '/favicon.svg'
];
const CACHEABLE_HOSTS = [
    self.location.origin,
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(PRECACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Pages: network first so content edits show up right away, cache fallback offline
    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req)
                .then(res => {
                    const copy = res.clone();
                    caches.open(CACHE).then(cache => cache.put(req, copy));
                    return res;
                })
                .catch(() =>
                    caches.match(req, { ignoreSearch: true })
                        .then(cached => cached || caches.match('/house-guide'))
                )
        );
        return;
    }

    // Assets: cache first, then network (caching a copy for next time)
    event.respondWith(
        caches.match(req).then(cached =>
            cached ||
            fetch(req).then(res => {
                const cacheable = (res.ok || res.type === 'opaque') &&
                    CACHEABLE_HOSTS.some(host => req.url.startsWith(host));
                if (cacheable) {
                    const copy = res.clone();
                    caches.open(CACHE).then(cache => cache.put(req, copy));
                }
                return res;
            })
        )
    );
});
