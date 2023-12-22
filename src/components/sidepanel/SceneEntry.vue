<template>
  <button
    :class="mapStore.activeScene === props.id ? 'shadow-halo': ''"
    class="relative flex justify-end w-full mb-3 overflow-hidden border rounded-md cursor-pointer select-none h-14 border-accentPale hover:outline hover:outline-2 hover:outline-offset-2 outline-accentDark">
    <div class="absolute top-0 flex flex-col items-start justify-center w-full h-full left-2">
      <span class="font-medium text-textMain">{{ title }}</span>
      <span class="text-sm">
        <span class="text-xs font-semibold text-textSecondary">{{ hint }}</span>
      </span>
    </div>
    <div class="h-full bg-center bg-cover aspect-video bg-gradient-to-r" :style="{ 'background-image': 'url(' + getImageUrl() + ')' }">
      <div class="h-full bg-gradient-to-r from-fillMain to-[#fff0]"></div>
    </div>
  </button>
</template>

<script setup>
import { useMapContentStore } from "/src/stores/MapContentStore"
import blueprint_scene from "/src/assets/scenes/blueprint_scene.jpg"

const mapStore = useMapContentStore()
const covers = {
  "blueprint_scene": blueprint_scene
}

const props = defineProps({
  id: {
    type: String
  },
  title: {
    type: String,
    default: "{{title}}"
  },
  hint: {
    type: String,
    default: "{{hint}}"
  },
  img: {
    type: String,
    default: "blueprint_scene"
  }
})

function getImageUrl() {
  if (!(props.img in covers)) {
    return blueprint_scene
  }
  return covers[props.img]
}
</script>