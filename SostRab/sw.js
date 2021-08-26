const staticCacheName="static-cache-v3",staticAssets=["./","./index.html","./favicon/icon-144x144.png","./favicon/icon-192x192.png","./img/backspace.svg","./img/info.svg","./style.css","./main.js"];self.addEventListener("install",(async e=>{const a=await caches.open(staticCacheName);await a.addAll(staticAssets),console.log("Service worker has been installed")})),self.addEventListener("activate",(async e=>{const a=(await caches.keys()).map((async e=>{staticCacheName!==e&&await caches.delete(e)}));await Promise.all(a),console.log("Service worker has been activated")})),self.addEventListener("fetch",(e=>{console.log(`Trying to fetch ${e.request.url}`),e.respondWith(caches.match(e.request).then((a=>a||fetch(e.request))))}));