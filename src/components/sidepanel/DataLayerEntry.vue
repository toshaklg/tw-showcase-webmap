<template>
  <div
    class="overflow-hidden transition-[height] rounded-md shadow-lg cursor-pointer select-none hover:outline hover:outline-2 hover:outline-offset-2 outline-accentDark border border-solid border-accentPale"
    :class="isOpen ? 'h-32' : 'h-14'">
    <button class="w-full h-14 bg-[#00000000] bg-center bg-cover bg-blend-darken flex items-center justify-between px-3"
      :style="{ 'background-image': 'url(' + img + ')' }">
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

const isOpen = ref(false)

const props = defineProps({
  title: {
    type: String,
    default: "{{unset.title}}"
  },
  description: {
    type: String
  },
  img: {
    type: String
  }
});
</script>