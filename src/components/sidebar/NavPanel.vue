<template>
  <div class="flex gap-2">
    <div class="flex flex-col gap-2 ">
      <button @click="isOpen = !isOpen"
        class="flex items-center justify-center w-10 rounded-md shadow-lg cursor-pointer aspect-square bg-fillMain hover:bg-hoverMain">
        <v-icon name="bi-layout-sidebar-inset" scale="1.25" />
      </button>
      <div class="w-5 aspect-square">
        <button
          class="flex items-center justify-center w-10 rounded-md shadow-lg cursor-pointer aspect-square bg-fillMain hover:bg-hoverMain">
          <v-icon name="io-settings-outline" scale="1.25" />
        </button>
      </div>
    </div>
    <div id="logo" class="flex items-center justify-center rounded-md shadow-lg text-textMain bg-fillMain grow">
      center logo
    </div>
  </div>
</template>

<script setup>
const isOpen = defineModel("isOpen")
</script>
