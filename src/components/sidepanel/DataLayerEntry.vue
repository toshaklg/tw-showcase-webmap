<template>
  <div :class="isOpen ? 'h-32' : 'h-14', props.active === props.id ? 'shadow-halo' : ''"
    class="overflow-hidden transition-[height] mb-3 rounded-md cursor-pointer select-none hover:outline hover:outline-2 hover:outline-offset-2 outline-accentDark border border-solid border-accentPale">
    <button class="w-full h-14 bg-[#00000000] bg-center bg-cover bg-blend-darken flex items-center justify-between px-3"
      :style="{ 'background-image': 'url(' + getImageUrl() + ')' }">
      <span class="font-normal text-textContrast">{{ title }}</span>
      <v-icon @click="isOpen = !isOpen" class="text-accentPale" name="bi-file-text" scale="1.5" />
    </button>
    <div class="px-2 pt-1 text-sm font-medium text-textMain">
      Short description of the layer, e.g. what is consists of, what colors reporesent what and so on. Maybe use cases.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

import blueprint_scene from "/src/assets/scenes/blueprint_scene.jpg"
import precipitation_blue from "/src/assets/visualizations/precipitation_blue.jpg"
import s1_vv from "/src/assets/visualizations/s1_vv.jpg"
import s1_vh from "/src/assets/visualizations/s1_vh.jpg"
import s1_vh_over_vv from "/src/assets/visualizations/s1_vh_over_vv.jpg"
import s2_tci from "/src/assets/visualizations/s2_tci.jpg"
import s2_ndvi from "/src/assets/visualizations/s2_ndvi.jpg"

const covers = {
  "blueprint_scene": blueprint_scene,
  "precipitation_blue": precipitation_blue,
  "s1_vv": s1_vv,
  "s1_vh": s1_vh,
  "s1_vh_over_vv": s1_vh_over_vv,
  "s2_tci": s2_tci,
  "s2_ndvi": s2_ndvi,
}

const isOpen = ref(false)

const props = defineProps({
  id: {
    type: String
  },
  title: {
    type: String,
    default: "{{title}}"
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  active: {
    type: String
  }
})

function getImageUrl() {
  if (!(props.img in covers)) {
    return blueprint_scene
  }
  return covers[props.img]
}
</script>