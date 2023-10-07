// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'MapViewer',
      // the proper extensions will be added
      fileName: 'map-viewer',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['ol', 'ol-mapbox-style', 'mapbox-gl', 'idb-keyval', 'js-yaml'],
    },
  },
});
