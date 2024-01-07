import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import TileWMS from 'ol/source/TileWMS'


class MapEngine {
  constructor () {
    this.baseLayers = {}
    this.dataLayers = {}
    this.map = new Map({
      target: "map",
      layers: [],
      controls: [],
      view: new View({
        zoom: 0,
        center: [0, 0],
        constrainResolution: true
      }),
    })
    return this
  }
  createBaseLayers(entries) {
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
      this.baseLayers[key] = xyz
      this.map.addLayer(xyz)
    })
  }
  createDataLayers(entries, url) {
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
      this.dataLayers[key] = twms
      this.map.addLayer(twms)
    })
  }
  setLayerVisibility (group, onKey, offKey = "") {
    console.log(onKey, offKey)
    if (group == "base_layer") {
      this.baseLayers[onKey].setVisible(true)
      if (offKey !== "") {
        this.baseLayers[offKey].setVisible(false)
      }
    }
    if (group == "data_layer") {
      this.dataLayers[onKey].setVisible(true)
      if (offKey !== "") {
        this.dataLayers[offKey].setVisible(false)
      }
    }
    return onKey
  }
  updateLayerTime(key, value) {
    this.dataLayers[key].getSource().updateParams({"TIME": value})
  }
}

export default MapEngine