<template>
  <div
    class="bg-[url('/src/assets/true_color_ground.jpg')] bg-cover bg-center h-12 rounded-md overflow-hidden shadow-lg select-none cursor-pointer mb-3 hover:outline hover:outline-2 hover:outline-offset-2 outline-accentDark">
    <div class="w-full h-full bg-black bg-opacity-25">
      <div class="flex items-center justify-between h-full px-3 font-normal">
        <p class="text-textContrast">{{ title }}</p>
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