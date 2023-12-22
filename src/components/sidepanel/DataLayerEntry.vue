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
import vv_ground from "/src/assets/visualizations/vv_ground.jpg"
import vh_ground from "/src/assets/visualizations/vh_ground.jpg"
import vh_over_vv_ground from "/src/assets/visualizations/vh_over_vv_ground.jpg"

const covers = {
  "blueprint_scene": blueprint_scene,
  "vv_ground": vv_ground,
  "vh_ground": vh_ground,
  "vh_over_vv_ground": vh_over_vv_ground,
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