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
      visible: false,
      source: new XYZ({
        url: value.url
      })
    })
    baseLayers.push(xyz)
  })
  return baseLayers
}

export function createDataLayers(entries, url) {
  var dataLayers = []
  Object.entries(entries).forEach(layer => {
    const [key, value] = layer

    let params = {
      "FORMAT": "image/png",
      "TILED": true,
    }
    Object.entries(value.params).forEach(param => {
      const [pKey, pValue] = param
      params[pKey] = pValue
    })
    console.log(params)

    let twms = new TileLayer({
      key: key,
      group: "data_layer",
      zIndex: 1,
      visible: false,
      //extent: [-2039259, 2870341, -7455066, 6338219],
      source: new TileWMS({
        url: url,
        params: params
      })
    })
    dataLayers.push(twms)
  })
  return dataLayers
}

export function addMapLayers(map, layers) {
  Object.entries(layers).forEach(layer => {
    const [key, value] = layer
    map.addLayer(value)
  })
}

export function setLayerVisibility(map, onKey, offKey = "") {
  console.log(onKey, offKey)
  map.getLayers().getArray().forEach((layer) => {
    const lkey = layer.get("key")
    if (lkey === offKey) {
      layer.setVisible(false)
    }
    if (lkey === onKey) {
      console.log('toggled?')
      layer.setVisible(true)
    }
  })
  return onKey
}

export function updateLayerTime(map, key, value) {
  map.getLayers().getArray().forEach((layer) => {
    const lkey = layer.get("key")
    if (lkey === key) {
      layer.getSource().updateParams({"TIME": value})
    }
  })
  return value
}