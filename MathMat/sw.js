const staticCacheName="static-cache-v2",staticAssets=["./","./index.html","./favicon/mstile-144x144.png","./favicon/android-chrome-192x192.png","./img/but_hint.svg","./img/but_new.svg","./img/but_newpm.svg","./img/but_prov.svg","./img/but_prov_bad.svg","./img/but_prov_ok.svg","./img/delit.svg","./img/minus.svg","./img/plus.svg","./img/ravno.svg","./img/umn.svg","./style.css","./main.js"];self.addEventListener("install",(async e=>{const s=await caches.open(staticCacheName);await s.addAll(staticAssets),console.log("Service worker has been installed")})),self.addEventListener("activate",(async e=>{const s=(await caches.keys()).map((async e=>{staticCacheName!==e&&await caches.delete(e)}));await Promise.all(s),console.log("Service worker has been activated")})),self.addEventListener("fetch",(e=>{console.log(`Trying to fetch ${e.request.url}`),e.respondWith(caches.match(e.request).then((s=>s||fetch(e.request))))}));