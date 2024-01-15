<template>
  <button :class="props.active === props.id ? 'shadow-halo' : '', isReady ? '' : 'pointer-events-none'"
    class="relative flex justify-end overflow-hidden border rounded-md cursor-pointer select-none bg-bgPrimary h-14 border-accentDisabled hover:outline hover:outline-2 hover:outline-offset-2 outline-hoverOutline"
    @click=mapStore.setActiveScene(props.id)>
    <div class="absolute flex flex-col items-start justify-center h-full left-2">
      <span class="font-medium text-textPrimary">{{ title }}</span>
      <span class="text-sm">
        <span class="text-xs font-semibold text-textSecondary">{{ hint }}</span>
      </span>
    </div>
    <div class="absolute flex items-center justify-center h-full aspect-square">
      <v-icon v-if="!isReady" class="text-iconPrimary" animation="spin" speed="slow" name="ri-loader-2-line" scale="1.75" />
      <v-icon v-else class="text-iconPrimary" name="ri-check-line" scale="1.75" />
    </div>
    <div class="h-full bg-center bg-cover aspect-video bg-gradient-to-r"
      :style="{ 'background-image': 'url(' + getImageUrl() + ')' }">
      <div class="h-full bg-gradient-to-r from-bgPrimary to-[#fff0]"></div>
    </div>
  </button>
</template>

<script setup>
import blueprint_scene from "/src/assets/scenes/blueprint_scene.jpg"
import { ref } from "vue"
import { useMapStore } from "/src/stores/mapStore"
import { requestCapabilites } from "/src/utils/helpers.js"

const mapStore = useMapStore()
const covers = {
  "blueprint_scene": blueprint_scene
}
const props = defineProps({
  id: {
    type: String
  },
  title: {
    type: String
  },
  hint: {
    type: String
  },
  img: {
    type: String,
    default: "blueprint_scene"
  },
  active: {
    type: String
  },
  isReady: {
    type: Boolean,
    default: false
  }
})
const isReady = ref(props.isReady)

function getImageUrl() {
  if (!(props.img in covers)) {
    return blueprint_scene
  }
  return covers[props.img]
}

if (isReady.value == false) {
  requestCapabilites(mapStore.scenes[props.id].capabilities_url).then(function (result) {
    mapStore.setSceneProperty(props.id, "capabilities", result)
    isReady.value = true
  })
}
</script>