<template>
  <div class="flex gap-2">
    <div class="flex flex-col gap-2 ">
      <button @click="isOpen = !isOpen"
        class="flex items-center justify-center w-10 transition-all rounded-md shadow-lg cursor-pointer aspect-square bg-bgPrimary hover:bg-hoverTint">
        <v-icon class="transition-all text-iconPrimary" name="bi-layout-sidebar-inset" scale="1.25" />
      </button>
      <div class="w-5 aspect-square">
        <button
          class="flex items-center justify-center w-10 transition-all rounded-md shadow-lg cursor-pointer aspect-square bg-bgPrimary hover:bg-hoverTint">
          <v-icon class="transition-all text-iconPrimary" name="hi-solid-sun" scale="1.25" />
        </button>
      </div>
    </div>
    <div id="logo" class="flex items-center justify-center transition-all rounded-md shadow-lg text-textPrimary bg-bgPrimary grow">
      center logo
    </div>
  </div>
</template>

<script setup>
const isOpen = defineModel("isOpen")
</script>
