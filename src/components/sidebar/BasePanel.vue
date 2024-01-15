<template>
  <div class="w-full px-3 pt-2 pb-3 rounded-md shadow-lg bg-bgPrimary">
    <WindowHeading class="mb-2" text="Base map style" :links="mapStore.getBaseLayersCopyrights" />
    <Dropdown :items="mapStore.getBaseLayersKeyValue" :selected="mapStore.activeBaseLayer"
      @on-change="(key) => mapStore.toggleLayer('base_layer', key)" />
  </div>
</template>

<script setup>
import WindowHeading from "/src/components/generic/WindowHeading.vue"
import Dropdown from "/src/components/generic/Dropdown.vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()
</script>
