// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
    },
  },
  plugins: [
    VitePWA({
      srcDir: 'public',
      filename: "sw.js",
      strategies: 'injectManifest',
      injectRegister: null,
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module'
      },
      injectManifest: {
        globDirectory: './dist',
        globPatterns: [
          '**/*.js',
          '**/*.css',
          '**/*.png',
          '**/*.html'
        ]
      },
      manifest: {
        "name": "Garden Grove Map Viewer",
        "short_name": "Map Viewer",
        "theme_color": "#F8F8F8",
        "background_color": "#ffffff",
        "scope": ".",
        "start_url": "/",
        "id": "/",
        "prefer_related_applications": false,
        "display": "standalone",
        "display_override": ["standalone", "browser", "window-controls-overlay"],
        "orientation": "any",
        "icons": [
          {
            "src": "icons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "splash_pages": null,
        "description": "Official City of Garden Grove web maps",
        "dir": "ltr",
        "lang": "en",
        "categories": [
          "government",
          "utilities"
        ],
        "handle_links": "preferred",
        "launch_handler": {
          "client_mode": ["navigate-existing"]
        },
        "protocol_handlers": []
      }
    })
  ]
})
