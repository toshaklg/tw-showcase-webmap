import { defineStore } from "pinia"
import { ref, computed } from "vue"
import MapEngine from "../utils/mapEngine"
import { parseDimensionFromCapabilities } from "../utils/helpers"

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
        mapInstance.value = new MapEngine()

        mapInstance.value.createBaseLayers(baseLayers.value)
        activeBaseLayer.value = Object.keys(baseLayers.value)[0]
        mapInstance.value.setLayerVisibility("base_layer", activeBaseLayer.value)
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
    activeScene.value = scene_key
    dataLayers.value = scenes.value[activeScene.value].data_layers
    // Reset dimension
    dimension.value = []
  }

  function toggleLayer(group, key) {
    if (group === "base_layer") {
      activeBaseLayer.value = mapInstance.value.setLayerVisibility(group, key, activeBaseLayer.value)
    }
    if (group === "data_layer") {
      activeDataLayer.value = mapInstance.value.setLayerVisibility(group, key, activeDataLayer.value)

      let lr = dataLayers.value[activeDataLayer.value].params.LAYERS
      dimension.value = parseDimensionFromCapabilities(scenes.value[activeScene.value].capabilities, lr)
    }
  }

  function setCapabilities(scene_key, capabilities) {
    scenes.value[scene_key].capabilities = capabilities
    mapInstance.value.createDataLayers(scenes.value[scene_key].data_layers, scenes.value[scene_key].wms_url)
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