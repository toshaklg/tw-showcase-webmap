<template>
  <button
    :style="{'background-image': 'url(' + img + ')'}"
    class="w-full h-12 overflow-hidden bg-center bg-cover rounded-md shadow-lg cursor-pointer select-none hover:outline hover:outline-2 hover:outline-offset-2 outline-accentDark">
    <div class="w-full h-full bg-black bg-opacity-50">
      <div class="flex items-center justify-between h-full px-3 font-normal">
        <p class="text-textContrast">{{ title }}</p>
      </div>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  img: {
    type: String
  }
})
</script>