<template>
  <div
    class="bg-[url('/src/assets/true_color_ground.jpg')] bg-cover bg-center h-12 rounded-md overflow-hidden shadow-lg select-none cursor-pointer">
    <div class="w-full h-full bg-black bg-opacity-25">
      <div class="flex items-center justify-between w-full h-full px-3 font-normal">
        <p class="text-textContrast">{{ title }}</p>
        <v-icon class="text-accentPale" name="bi-file-text" scale="1.5" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  img: {
    type: String
  }
});
</script>