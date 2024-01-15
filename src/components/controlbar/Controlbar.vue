<template>
  <div
    class="absolute flex gap-2 w-full p-3 bottom-0 md:bottom-3 min-h-fit md:left-[50%] md:w-fit md:translate-x-[-50%] justify-end">
    <DatesSelector v-if="mapStore.dimension.length !== 0" />
    <button @click="mapStore.mapInstance.zoomIn()"
      class="transition-all rounded-md shadow-lg h-9 aspect-square bg-bgPrimary hover:bg-hoverTint">
      <v-icon class="transition-all text-iconPrimary" name="hi-plus-sm" scale="1.25" />
    </button>
    <button @click="mapStore.mapInstance.zoomOut()"
      class="transition-all rounded-md shadow-lg h-9 aspect-square bg-bgPrimary hover:bg-hoverTint">
      <v-icon class="transition-all text-iconPrimary" name="hi-minus-sm" scale="1.25" />
    </button>
  </div>
</template>

<script setup>
import DatesSelector from "./DatesSelector.vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()
</script>
