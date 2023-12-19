<template>
  <div id="map" class="w-full h-full"></div>
</template>

<script>
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// importing the OpenLayers stylesheet is required for having
// good looking buttons!
import 'ol/ol.css'

export default {
  name: 'MapContainer',
  components: {},
  props: {},
  mounted() {
    // this is where we create the OpenLayers map
    new Map({
      // the map will be created using the 'map-root' ref
      target: 'map',
      layers: [
        // adding a background tiled layer
        new TileLayer({
          source: new OSM() // tiles are served by OpenStreetMap
        }),
      ],
      controls: [],
      // the map view will initially show the whole world
      view: new View({
        zoom: 0,
        center: [0, 0],
        constrainResolution: true
      }),
    })
  },
}
</script>