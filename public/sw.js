import { cleanupOutdatedCaches, PrecacheFallbackPlugin, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import {NetworkOnly, NetworkFirst, StaleWhileRevalidate} from 'workbox-strategies';
import {registerRoute, setDefaultHandler, Route} from 'workbox-routing';
import {ExpirationPlugin} from 'workbox-expiration';
import {offlineFallback} from 'workbox-recipes';

self.__WB_DISABLE_DEV_LOGS = true;

/////////////////////////////////
// Precache
/////////////////////////////////

// self.__WB_MANIFEST is default injection point.
// This is required for Workbox injectManifest strategy to work.
// We set the glob pattern in vite.config.js
precacheAndRoute(self.__WB_MANIFEST);

// Clean old assets
cleanupOutdatedCaches();

/////////////////////////////////
// Run-time cache
/////////////////////////////////

// Set up default handler to a simple Network-only strategy
// If network can't handle navigation, fallback to offline page (/offline.html),
// which will provide our user with a phone number to call.
setDefaultHandler(new NetworkOnly());
//offlineFallback();


// Create a route for script and style requests to use a
// stale-while-revalidate strategy.
// const staticAssetsRoute = new Route(({request}) => {
//     return ['script', 'style', 'font'].includes(request.destination);
//   }, new StaleWhileRevalidate({
//   cacheName: 'static-assets',
//   plugins: [
//     new ExpirationPlugin({
//       maxEntries: 50,
//       maxAgeSeconds: 60 * 24 * 60 * 60, // 2 months
//     }),
//   ],
// }));

// // Register the route handling static assets
// registerRoute(staticAssetsRoute);

// Cache API JSON using Network-first strategy
// This should allow some data to be shown without network
const geoserverRoute = new Route(({url}) => {
  return /^https:\/\/ggcity.org\/geoserver\/.+\/ows/.test(url.toString());
}, new StaleWhileRevalidate({
    cacheName: 'geoserver',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 24 * 60 * 30, // 1 month
      }),
    ],
  })
);

registerRoute(geoserverRoute);

self.skipWaiting();
clientsClaim();
