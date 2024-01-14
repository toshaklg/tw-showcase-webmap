import { defineStore } from "pinia"
import { ref, computed } from "vue"
import MapEngine from "../utils/mapEngine"
import appConfig from "/src/configs/app.json"
import { parseDimensionFromCapabilities, getCenter } from "../utils/helpers"

// Help: https://pinia.vuejs.org/core-concepts/#Setup-Stores
export const useMapStore = defineStore("mapStore", () => {
  const isReady = ref(false)
  const config = ref({})
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
  // Time controls
  const dimension = ref([])
  const position = ref(-1)
  const bbox = ref([])

  // Load initial state
  function initialize() {
    appName.value = appConfig.app_name
    baseLayers.value = appConfig.base_layers
    scenes.value = appConfig.scenes
    config.value = appConfig
    isReady.value = true
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

  const getLegendName = computed(() => {
    if (activeDataLayer.value) {
      return dataLayers.value[activeDataLayer.value].legend
    }
    return ''
  })

  const getSceneCopyrights = computed(() => {
    if (activeScene.value) {
      return scenes.value[activeScene.value].copyrights
    }   
    return ''
  })

  const getBaseLayersCopyrights = computed(() => {
    return config.value.copyrights
  })

  // Functions
  function initMap() {
    mapInstance.value = new MapEngine()
    mapInstance.value.createBaseLayers(baseLayers.value)
    activeBaseLayer.value = Object.keys(baseLayers.value)[0]
    mapInstance.value.setLayerVisibility("base_layer", activeBaseLayer.value)

    for (const [scene, sv] of Object.entries(appConfig.scenes)) {
      mapInstance.value.createDataLayers(sv.data_layers, sv.wms_url)
    }
  }

  function setActiveScene(scene_key) {
    activeScene.value = scene_key
    dataLayers.value = scenes.value[activeScene.value].data_layers

    activeDataLayer.value = mapInstance.value.setLayerVisibility("data_layer", "", activeDataLayer.value)
    dimension.value = []
    position.value = -1
    bbox.value = []
  }

  function toggleLayer(group, key) {
    if (group === "base_layer") {
      activeBaseLayer.value = mapInstance.value.setLayerVisibility(group, key, activeBaseLayer.value)
    }
    if (group === "data_layer") {
      activeDataLayer.value = mapInstance.value.setLayerVisibility(group, key, activeDataLayer.value)

      let lr = dataLayers.value[activeDataLayer.value].params.LAYERS
      const dimensionParsed = parseDimensionFromCapabilities(scenes.value[activeScene.value].capabilities, lr)
      dimension.value = dimensionParsed[0]
      position.value = dimension.value.length - 1
      bbox.value = dimensionParsed[1]

      mapInstance.value.navigateTo(getCenter(bbox.value))
    }
  }

  function setSceneProperty(scene_key, property, value) {
    scenes.value[scene_key][property] = value
  }

  function hasSceneCapabilities(scene_key) {
    if (Object.hasOwn(scenes.value[scene_key], "capabilities")) {
      return true
    }
    return false
  }

  return {
    isReady,
    appName,
    mapInstance,
    activeBaseLayer,
    baseLayers,
    activeScene,
    scenes,
    activeDataLayer,
    dataLayers,
    dimension,
    position,
    bbox,
    // Getters
    getBaseLayersKeyValue,
    getLegendName,
    getSceneCopyrights,
    getBaseLayersCopyrights,
    // Functions
    initMap,
    setActiveScene,
    toggleLayer,
    setSceneProperty,
    hasSceneCapabilities
  }
})