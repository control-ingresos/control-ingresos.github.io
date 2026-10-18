// Service worker mínimo: permite instalar la app.
// No guarda copias de la página: siempre se usa la versión publicada,
// así cada actualización llega sola a los celulares.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => new Response(
        '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
        '<body style="font-family:system-ui;background:#16303F;color:#fff;display:grid;place-items:center;height:100vh;margin:0;text-align:center;padding:24px">' +
        '<div><h2>Sin conexión a internet</h2><p>Revisá el wifi o los datos del celular y volvé a abrir la app.</p></div>',
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }))
    );
  }
});
