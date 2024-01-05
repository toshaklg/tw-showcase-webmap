import { defineStore } from "pinia"
import { ref, computed } from "vue"
import {
  createMapInstance,
  createBaseLayers,
  addMapLayers,
  setLayerVisibility,
  createDataLayers
} from "../utils/mapEngine"
import { requestCapabilites, parseDimensionFromCapabilities } from "../utils/helpers"

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
  const dimension = ref([])

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
  const getBaseLayersKeyValue = computed(() => {
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
  const getSceneCapabilities = computed((key) => {
    return key
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
      console.log("Creating instance")
      mapInstance.value = createMapInstance()
      addMapLayers(mapInstance.value, createBaseLayers(baseLayers.value))
    }

    activeScene.value = scene_key
    // TODO: Avoid requesting if already exist
    if (!Object.hasOwn(scenes.value[activeScene.value], "capabilities")) {
      requestCapabilites(scenes.value[activeScene.value].capabilities_url).then(function (result) {
        scenes.value[activeScene.value].capabilities = result
      })
    }

    activeBaseLayer.value = Object.keys(baseLayers.value)[0]
    setLayerVisibility(mapInstance.value, activeBaseLayer.value)

    // TODO: Layers are not removed actually, so I add more and more in the end...
    dataLayers.value = scenes.value[activeScene.value].data_layers
    addMapLayers(mapInstance.value, createDataLayers(dataLayers.value, scenes.value[activeScene.value].wms_url))

    // Reset dimension
    dimension.value = []
  }

  function toggleLayer(group, key) {
    if (group === "base_layer") {
      activeBaseLayer.value = setLayerVisibility(mapInstance.value, key, activeBaseLayer.value)
    } else if (group === "data_layer") {
      activeDataLayer.value = setLayerVisibility(mapInstance.value, key, activeDataLayer.value)

      let lr = dataLayers.value[activeDataLayer.value].params.LAYERS
      dimension.value = parseDimensionFromCapabilities(scenes.value[activeScene.value].capabilities, lr)
    }
  }

  function setCapabilities(scene_key, capabilities) {
    scenes.value[scene_key].capabilities = capabilities
  }

  function getCapabilities(scene_key) {
    if (Object.hasOwn(scenes.value[scene_key], "capabilities")) {
      return true
    }
    return false
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
    dimension,
    // Getters
    getBaseLayersKeyValue,
    getSceneCapabilities,
    // Functions
    setActiveScene,
    toggleLayer,
    setCapabilities,
    getCapabilities
  }
})