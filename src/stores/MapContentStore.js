import { defineStore } from "pinia"
import { ref, computed } from "vue"

// Help: https://pinia.vuejs.org/core-concepts/#Setup-Stores
export const useMapContentStore = defineStore("mapContentStore", () => {
  const config = ref({})
  const appName = ref("")
  const sceneLayers = ref([])
  const currentScene = ref("")
  const visualizationLayers = ref([])

  function initialize() {
    fetch(`/src/configs/${import.meta.env.VITE_key}.json`)
    .then(response => response.json())
    .then(data => {
      config.value = data
      appName.value = data.app_name
      sceneLayers.value = data.scene_layers
      console.log('Data is fetched.')
    })
  }

  // Getters
  const getAppName = computed(() => appName)

  // Functions (Setters?)
  function setCurrentScene(value) {
    currentScene.value = value
  }
  function increment() {
    //count.value++
    console.log("increment call")
  }
  function setName(value) {
    appName.value = value
  }

  initialize()

  return {
    config,
    appName,
    sceneLayers,
    currentScene,
    visualizationLayers,
    getAppName,
    increment,
    setName,
    setCurrentScene,
  }
})