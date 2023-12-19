<template>
  <button
    class="relative flex flex-col items-start justify-center w-full pl-2 overflow-hidden border rounded-md cursor-pointer select-none h-14 border-accentPale hover:outline hover:outline-2 hover:outline-offset-2 outline-accentDark">
    <span class="font-medium text-textMain">{{ title }}</span>
    <span class="text-xs font-semibold text-textSecondary">{{ datesHint }}</span>
    <div
      class="absolute right-0 h-full bg-center bg-cover aspect-video bg-gradient-to-r from-[#fff] to-[#000] bg-blend-darken"
      :style="{ 'background-image': 'url(' + img + ')' }"></div>
    <div class="absolute right-0 h-full aspect-video bg-gradient-to-r from-fillMain to-[#fff0]"></div>
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "{{unset.title}}"
  },
  datesHint: {
    type: String,
    default: "{{unset.datesHint}}"
  },
  img: {
    type: String
  }
})
</script>