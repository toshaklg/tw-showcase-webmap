import { defineStore } from "pinia"
import { ref, computed } from "vue"
import {
  createMapInstance,
  createBaseLayers,
  addMapLayers,
  setLayerVisibility,
  createDataLayers
} from "../utils/mapEngine"
import { requestCapabilites, getDimensionFromCapabilities } from "../utils/helpers"

// Help: https://pinia.vuejs.org/core-concepts/#Setup-Stores
export const useMapStore = defineStore("mapStore", () => {
  const appName = ref("")
  const mapInstance = ref({})
  // OSM, ESRI, etc.
  const activeBaseLayer = ref("")
  const baseLayers = ref({})
  // Scenes
  const activeScene = ref("")
  const scenes = ref({})
  // Data layers from scenes
  const activeDataLayer = ref("")
  const dataLayers = ref({})

  // Load initial state
  function initialize() {
    fetch(`/src/configs/${import.meta.env.VITE_key}.json`)
      .then(response => response.json())
      .then(data => {
        appName.value = data.app_name
        baseLayers.value = data.base_layers
        scenes.value = data.scenes
      })
  }
  initialize()

  // Getters
  const getBaseLayersKeys = computed(() => {
    let layers = []
    if (baseLayers.value.length === 0) {
      return []
    }
    Object.entries(baseLayers.value).forEach(entry => {
      const [key, value] = entry
      layers.push({ "key": key, "value": value.name })
    })
    return layers
  })

  // Functions
  function setActiveScene(scene_key) {
    // 0. Init map if it wasn't already
    //// 0.1. Set base layers
    // 1. Make scene active
    // 2. Request capabilities info
    // 3. Set data layers
    //// 0.2. Set data layers
    // 4. Switch view
    if (Object.keys(mapInstance.value).length === 0) {
      mapInstance.value = createMapInstance()
      addMapLayers(mapInstance.value, createBaseLayers(baseLayers.value))
    }

    activeScene.value = scene_key
    requestCapabilites(scenes.value[activeScene.value].capabilities_url).then(function (result) {
      scenes.value[activeScene.value].capabilities = result
    })

    activeBaseLayer.value = Object.keys(baseLayers.value)[0]
    setLayerVisibility(mapInstance.value, activeBaseLayer.value)

    dataLayers.value = scenes.value[activeScene.value].data_layers
    addMapLayers(mapInstance.value, createDataLayers(dataLayers.value, scenes.value[activeScene.value].wms_url))

  }

  function toggleLayer(group, key) {
    if (group === "base_layer") {
      activeBaseLayer.value = setLayerVisibility(mapInstance.value, key, activeBaseLayer.value)
    } else if (group === "data_layer") {
      activeDataLayer.value = setLayerVisibility(mapInstance.value, key, activeDataLayer.value)

      let lr = dataLayers.value[activeDataLayer.value].params.LAYERS
      getDimensionFromCapabilities(scenes.value[activeScene.value].capabilities, lr)
    }
  }

  return {
    appName,
    mapInstance,
    activeBaseLayer,
    baseLayers,
    activeScene,
    scenes,
    activeDataLayer,
    dataLayers,
    // Getters
    getBaseLayersKeys,
    // Functions
    setActiveScene,
    toggleLayer
  }
})