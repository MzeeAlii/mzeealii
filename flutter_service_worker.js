'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f17941746e709126e87f697497f5a36c",
"index.html": "f756778e9195f7807c90ccfc1cfe725f",
"/": "f756778e9195f7807c90ccfc1cfe725f",
"main.dart.js": "f6de4a83d7ef296014c4298114976bf6",
"favicon.png": "0cbaae00fdf3af44e7881e8d0ca5a0b2",
"icons/Icon-192.png": "640fadbe7b856e4ea64d63ff33caf6cb",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "54ace76f2c7871947fd83a3065d5f5ba",
"manifest.json": "c86f9d60bfadf7c071e29a4c53b68d20",
".git/config": "22482cbe5cf535ff7d5622380cb4a47c",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/92/046111a485c8b90bbbd672b787c4bd122a6252": "ecb2228086a62188bf84641f192a7221",
".git/objects/92/a1943392e79529f12f4cae45098d5b6d307365": "3721aab499cd67aa2d83dd3cdcf20ee0",
".git/objects/66/d3e32dc9506b5e07c6111d9f32a7a385893285": "5c4408d35fe7685ee37861b387c9ac46",
".git/objects/50/bd4c9d21c25d8af498c78366600a8461afb0f3": "1a6bdd8b1c5828704923748dbf5fd016",
".git/objects/57/edef532c9af122c1895d694092b51e57db2a42": "4838df68db0ce029edcf7d3dcbb81e6d",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/3b/021dc26fb939aafbee619d877883071da45d41": "d625c567a56c8071a3928e8e15fa8376",
".git/objects/51/03ee8c66385aec308d15ce5499b2bf15784f94": "9c923beea697a76b2727e2e53dc38cc1",
".git/objects/67/3bd077f19a415055909b81d9b0ed34b9403645": "6a54485252c7f682dc7f4363cd7a811b",
".git/objects/ac/30caab5d37f4177e938a9b7152c57b7b323079": "e5a734b5da97a46fafc78ba3f08facb9",
".git/objects/d6/eb4d5cff9fe65055deabd5f07dcc2c7249be9b": "5fa5f8af1d9aac68670470b9bb24b98e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/8d667b26442883a8ecf46dadc446a5459058c7": "f415c0cd8a01ddf901ab978d687390cf",
".git/objects/f3/ec08999bbdaba12072f2ccd57e96f0d43877eb": "86ba070497d40a1e53e22be368c2b9df",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/b6c70c45043a9452d9db306d65465c7d1bf507": "7ce19d7f83a95e265c9217443b61ac07",
".git/objects/89/4e8cbc61fe83402a9103d853a9684714c1e8f8": "c0a682317775822edebe6225404ea20c",
".git/objects/89/a54af1b4587d547ac18fa87b70593091eb659e": "63b7da1c57efffe33588502228d919d8",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/19/a6acd0e2f23d503862cb1525b181d9a74b7ecb": "e0c2f1bca309a10ade502f62d66dc143",
".git/objects/44/a2ca9ed0729758baf0fcafc39428f6d4c9ac15": "89a88cf5f6b82451e27e84b0101124ea",
".git/objects/2a/08946a1bfdb040ea894ddd2d788db2b004917d": "d100a1b25909c7e04a70403da6dbb9bf",
".git/objects/2f/05e127deca239d9429c1fafb1563c1505c0b9d": "112449078788093f4702bc0945fa0459",
".git/objects/5d/099c56eff9154a35afded6c425610abc9674a0": "0072d26adff0cbf63014bde66fa5f6f7",
".git/objects/54/3420612baf8a52f5993ab745887d4523d4b206": "ec6b2219194478433c7ce133ab08ea01",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/9fa42f128ac9fbd3950c6a59633b2937a78605": "9d1a92effa51db3e0f79c23273e24d7c",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/8481411b77009daaf18979657e5a81809fd502": "24b7d4019d4cd33791b4f56d7de49ed4",
".git/objects/c4/61f40e1fd354885d0291e58cc38522cc476082": "767dce2f1d3ec89a1d4e604f86549fae",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f9/c60ac84d5dbe61c3c64a103fa896df9781af0e": "9e27f0c5634a7642c5f1913d4b4ce100",
".git/objects/ff/366dac5415b06e183ac4d902da1f976ece2f8b": "79b0413c4c64fffee48b01f868171d80",
".git/objects/f6/128d893e54bdfd247a94cdab96a3cf8cb5aa21": "9e8573445cbf47185c19167d7794f4bf",
".git/objects/ce/33f7517f892902004fc7211d53d85e4a15b4a1": "0aa6bffa4435df361ac1f57fe5cdc114",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/3f13945954cbd53c631300f0243edb4b274e01": "90326187f5f2a540f3991208f5916350",
".git/objects/76/819faff133d26bb2ceaa77c7a15797d1e7be60": "324e551b326e28aa57fc43256b4179fc",
".git/objects/76/7bb3dea7d9f17e86cea185969718c49d794442": "309051e55b18c50fa9df374d416cedf2",
".git/objects/78/0690d022ec43892c06d59748cda2d7ebd7a5b7": "44d275e9f4cba708904d9d309d1b5dce",
".git/objects/78/71937d9ef845ea02d1c09b3704994096d6f976": "d2c882424406dddf18be39b76e9b1e63",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "366a3155293216e2566a317a8eb28f28",
".git/logs/refs/heads/main": "366a3155293216e2566a317a8eb28f28",
".git/logs/refs/remotes/origin/main": "b2502d3b390f515ae273e4a3153cac5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a44c08d5998806ea316f44e8b1d2532b",
".git/refs/remotes/origin/main": "a44c08d5998806ea316f44e8b1d2532b",
".git/index": "14d397c84ae1105da5195b940f50642f",
".git/COMMIT_EDITMSG": "3f37d32eeec353d819a5cc974d5467f4",
"assets/AssetManifest.json": "e502b7cc86b63be8be7da5ba73ed6835",
"assets/NOTICES": "ab6785d4176bafa121314bbb6e38a004",
"assets/FontManifest.json": "c25bf4a4539ac8c3764cbf87915f9084",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_remix_icon/assets/fonts/remixicon-glyph.json": "173ad1c516a66dbe4ae8ec80a68d1ce1",
"assets/packages/flutter_remix_icon/assets/fonts/remixicon.ttf": "888e61f04316f10bddfff7bee10c6dd0",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "be33a6215773668408a58e07176db334",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/lang/sw-TZ.json": "4ea96b2c4d74cfdea5890a57da63b1ca",
"assets/assets/lang/en-US.json": "8d3efa17d8522ca414ae06065ab4bc6c",
"assets/google_fonts/readme.txt": "6438484eb58bf2356bb7e050ee719a2e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
