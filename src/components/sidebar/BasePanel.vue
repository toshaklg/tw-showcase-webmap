<template>
  <div class="w-full px-3 pt-2 pb-3 mt-2 rounded-md shadow-lg bg-fillMain">
    <WindowHeading class="mb-2" text="Base map style" />
    <Dropdown :items="mapStore.getBaseLayersKeys" :selected="mapStore.activeBaseLayer"
      @on-change="(key) => mapStore.toggleLayer('base_layer', key)" />
  </div>
</template>

<script setup>
import WindowHeading from "/src/components/generic/WindowHeading.vue"
import Dropdown from "/src/components/generic/Dropdown.vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()
</script>
