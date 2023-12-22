import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import TileWMS from 'ol/source/TileWMS'

export function createMapInstance() {
  return new Map({
    target: "map",
    layers: [],
    controls: [],
    view: new View({
      zoom: 0,
      center: [0, 0],
      constrainResolution: true
    }),
  })
}

export function createBaseLayers(entries) {
  var baseLayers = []
  Object.entries(entries).forEach(layer => {
    const [key, value] = layer
    let xyz = new TileLayer({
      key: key,
      group: "base_layer",
      source: new XYZ({
        url: value.url
      })
    })
    xyz.setVisible(false)
    baseLayers.push(xyz)
  })
  return baseLayers
}

export function createDataLayers(entries) {
  /*
  var dataLayers = []
  Object.entries(entries).forEach(layer => {
    const [key, value] = layer
    let twms = new TileLayer({
      //extent: [-2039259, 2870341, -7455066, 6338219],
      source: new TileWMS({
        url: "https://ows.digitalearth.africa/wms",
        params: {
          "LAYERS": "s1_rtc",
          "FORMAT": "image/png",
          "TILED": true,
          "TIME": "2023-12-21T00:00:00Z",
          "STYLES": "vh",
        }
      })
    })
    twms.setVisible(true)
    dataLayers.push(twms)
  })
  return dataLayers*/

  var dataLayers = []
  let twms = new TileLayer({
    //extent: [-2039259, 2870341, -7455066, 6338219],
    source: new TileWMS({
      url: "https://ows.digitalearth.africa/wms",
      params: {
        "LAYERS": "s1_rtc",
        "FORMAT": "image/png",
        "TILED": true,
        "TIME": "2023-12-21T00:00:00Z",
        "STYLES": "vh",
      }
    }),
    zIndex: 1
  })
  twms.setVisible(true)
  dataLayers.push(twms)
  return dataLayers
}

export function addMapLayers(map, layers) {
  Object.entries(layers).forEach(layer => {
    const [key, value] = layer
    map.addLayer(value)
  })
}

export function toggleLayer(map, onKey, offKey = "") {
  map.getLayers().getArray().forEach((layer) => {
    const lkey = layer.get("key")
    if (lkey === offKey) {
      layer.setVisible(false)
    }
    if (lkey === onKey) {
      layer.setVisible(true)
    }
  })
  return onKey
}