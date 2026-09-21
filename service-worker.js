const CACHE='il-broker-study-v4-5';
const ASSETS=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./course-bank.json'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const req=event.request;
  const url=new URL(req.url);

  // Never trap the app shell behind an old cached HTML document.
  if(req.mode==='navigate'||req.destination==='document'){
    event.respondWith(
      fetch(req,{cache:'no-store'})
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put('./index.html',copy));
          return response;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }

  // Same-origin static assets: cached for offline use, refreshed in the background.
  if(url.origin===self.location.origin){
    event.respondWith(
      caches.match(req).then(cached=>{
        const network=fetch(req,{cache:'no-cache'}).then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(req,copy));
          return response;
        }).catch(()=>cached);
        return cached||network;
      })
    );
  }
});