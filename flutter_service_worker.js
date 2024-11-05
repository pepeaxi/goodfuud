'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "43472a1e15b57d7a7549c8110f08cdb5",
"assets/AssetManifest.bin.json": "c43d99c1b05c85cc20c8e08970566fd5",
"assets/AssetManifest.json": "67c5a009945d70a1c084464102fa3f60",
"assets/FontManifest.json": "c4d48f97bdedc0ca84c3c1c55c59646b",
"assets/fonts/MaterialIcons-Regular.otf": "413fb00ea42df0d6b63040c633d9f68a",
"assets/fonts/Nexa_Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/Nexa_Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/Poppins-Bold.ttf": "5db3d2b3980827dae28161da22b1753a",
"assets/images/1.png": "1672ade3543bc95b5926b2bf32480fb6",
"assets/images/10.png": "0c3f6e3880e514de26535f19ab7a6f5a",
"assets/images/11.png": "32a31c320cc5edaa2bb3d04bbed5fe29",
"assets/images/12.png": "6cb6705abce9998d2b1782693c952c22",
"assets/images/13.png": "5cdfd3e0592d01425303d844e2dff1a5",
"assets/images/14.png": "521dddec60a0ac5c59bc2da5b97ab66f",
"assets/images/15.png": "83e010fd62e7d8fa3cc6afcd8fcee302",
"assets/images/16.png": "d61c16747538082fc89dfc030ff35a58",
"assets/images/17.png": "52ea3a6041796d442a7119ba69bddddd",
"assets/images/18.png": "4f081a64fa3e2de230937bdc8d37f704",
"assets/images/19.png": "6fc12565a96519a19f1d277250dca5fb",
"assets/images/2.png": "277b7cd50149ec06acc0c6b76462723e",
"assets/images/20.png": "ea0ea784774295bb6f12aecec72f85b8",
"assets/images/21.png": "c95da55b1b9fea3169f35206f2e231a6",
"assets/images/22.png": "0f77ea8f30b23a27924447cc99e0a7a0",
"assets/images/23.png": "0167f1df09135957a03fab4a91bd8dd2",
"assets/images/24.png": "7019d9ccbdbfde69331042b3a5a86b69",
"assets/images/25.png": "f5995486f533b80998b4db1b2b85340d",
"assets/images/26.png": "7c7c1ed8eea907ad4a3477adce623706",
"assets/images/27.png": "8fd3f782bf71139d383bd0528a865861",
"assets/images/28.png": "7d993bde5507a43e69dda11f685d52c6",
"assets/images/29.png": "28fdda40adb442801d8d106714a1c124",
"assets/images/3.png": "6a01be44132a711ee2a0b971c8ec6873",
"assets/images/30.png": "ff9d79e07e3d860e04ff1074f09ab953",
"assets/images/31.png": "fcc9ac0b5286845309f92996c62eb59e",
"assets/images/32.png": "916c33404df58d1dbb17a77788f320b3",
"assets/images/33.png": "8dbc03778ba14ddaad505479edc1948b",
"assets/images/34.png": "929ae798ab76d50b144c7d692a8eb459",
"assets/images/35.png": "513c330874a9674e4966544d4556e2ed",
"assets/images/36.png": "bc68d45e3748d9418bab35e33aaee7c2",
"assets/images/37.png": "3305212eb64761d5bcf30bbf0f3c6179",
"assets/images/38.png": "eef5b73df50569ac2f5e24c731887c35",
"assets/images/39.png": "e99598f99226108ac22938551428b17f",
"assets/images/4.png": "0f368ecaf8c6cc643cd0f085cc859760",
"assets/images/40.png": "8347f847e1afe5de50054ed42fc1b274",
"assets/images/41.png": "b69474be2bc0c527b0ff6d636b157cf6",
"assets/images/42.png": "7e954a991f646ccaa1dfd1e8e4181c62",
"assets/images/43.png": "11205328590b983d4608ec070e4529fd",
"assets/images/46.png": "dad04e9665c1f618310bffce2b56513b",
"assets/images/5.png": "46168c1fd6e46c4d9b8b974273244609",
"assets/images/6.png": "54ae19153c54e3c56e725a1da42a62de",
"assets/images/7.png": "ec4fc09e16e170fdd1fca6d845935479",
"assets/images/8.png": "cf2007ef0f01c497ed292fbaf8d94328",
"assets/images/9.png": "0a9b1fb333ee14308365b22806e6f1cc",
"assets/images/chicken.png": "29f435c9d5fe7c266c797de76e8a178d",
"assets/images/coke.png": "a234f20e2c0bfa05b28f88a0f20b8fae",
"assets/images/coke05.png": "d291ce112390c7680f09732860f8d5c7",
"assets/images/coke15l.png": "8aedfe86dabb0a51c65f6713c2c4fbbb",
"assets/images/coke1l.png": "2baee3ba417ef093d071446b07c3046e",
"assets/images/cokelogo.png": "2ca16ff055874c9f3f80f5bc2a70b17d",
"assets/images/donut.png": "c4254509a7b4533630697d4b0cce5a65",
"assets/images/fanta.png": "beb2a6ab4f6b467a3501dd6801d9776b",
"assets/images/fanta05.png": "d15c1842a00ec1c48c93028d7f13413c",
"assets/images/fanta15l.png": "7a058bc3e62e27f4c22aa84fe70031b3",
"assets/images/fanta1l.png": "5883b7e18ab26fc9d8c113cad7da4c43",
"assets/images/fantalogo.png": "5868792d96be703c5be33010ff4c252f",
"assets/images/fusetea05.png": "accf8c925111e836d04b3e6b8b31c966",
"assets/images/fusetea1.png": "5f5a8826338296a0ddc92fe285efc71b",
"assets/images/icecream.png": "53b268f119622d5d5c9d40556bd3f4e7",
"assets/images/keyfsi.png": "c792431b22c70d218cd32974347338c4",
"assets/images/logo1.png": "88afb98ebb7e87b1ed88db0907b13a7e",
"assets/images/logo2.png": "4e10fecd8406e55285c415207942792a",
"assets/images/muzqaymoq.png": "ebb7ed9ba82fd968a7cc581e22553ea3",
"assets/images/pepsi.png": "9ffa8f7d52f569fbfc51f3d6dc2f011b",
"assets/images/pepsi05.png": "cb7aad2f2f2859aa2d35ee19678166f5",
"assets/images/pepsi15l.png": "706677254f245756b0a824d8a0a08ea4",
"assets/images/pepsi1l.png": "e4a59eb9b502e6dba9dac9597f534df3",
"assets/images/pepsilogo.png": "c65a09a48e6b073bc17c73b583d7c141",
"assets/images/salad4.png": "5e4cd664a8d951126fdaf2bd29616615",
"assets/images/screen2.png": "69747a2b15b6ae50fe1d3f980f09bb4a",
"assets/images/screen3.png": "927d09a1c0c98d80daff49a9d8b196c9",
"assets/images/screen5.png": "f615ada48faa26093219819db76744c6",
"assets/images/soda.png": "023a0e73c3a2243409c77d29797ed559",
"assets/images/tort.png": "1c749098a486b15bde90349386c34230",
"assets/images/tovuq.png": "449134aa3aaadce1d4342eaec8556b64",
"assets/NOTICES": "6c345203a4602e5c7410e7ab4ac47c99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "0da21e00e58b5dde7e6b405e628e9ffb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "092a92a6f570e987999d906c7d2b04de",
"icons/apple-touch-icon.png": "e55c5cbe3653dce6e748718b0765e8b7",
"icons/favicon-16x16.png": "28f9ea140727ed06044c0d243ef69e12",
"icons/favicon-32x32.png": "314486d5e6817558ef1e787ce0a611fc",
"icons/Icon-192.png": "ce6a08e30b29e35169e3cfb9ecc58a6f",
"icons/Icon-512.png": "76bfe7f67241cc180dff1783084323ac",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "271119c9b39b25430d0f3ab9dff01e4a",
"/": "271119c9b39b25430d0f3ab9dff01e4a",
"main.dart.js": "7f7b037d470bbc76e15e6778e95c42a2",
"manifest.json": "1f53212f6468b4042288a64e05be557d",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "4b59a9c088d4450da0fbb402e8a5eacb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
