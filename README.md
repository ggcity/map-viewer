# Architecture

- Style via Maputnik
- Basemap is native Mapbox layer
- Use ol-mapbox-style #applyStyle on a LayerGroup. Use the returned LG object to get glStyle which legend will be constructed from
- Use [legend-symbol](https://github.com/watergis/legend-symbol) to build legend
- For printing, try `ol-ext`

## Configuration

- Application loads config file (JSON)
  - Title
  - Access token
  - Optional tools (legend, data tables, buffer)
  - Center/extent/initial zoom/minmax zoom
  - Basemap (Mapbox)
  - Aerials
    - Nearmap
      - API key
    - XYZ/WMS/WMTS
  - Overlays
    - olms - VectorTile with MB GL Styles
    - wms - supports wms info
    - geojson
    - xyz - probably not need too much
- Vector layers loads matching name `.js` file for configuring popup templates