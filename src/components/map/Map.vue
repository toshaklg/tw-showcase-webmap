<template>
  <div id="map" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted } from "vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()

onMounted(() => {
  mapStore.initMap()
})
</script>