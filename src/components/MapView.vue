<template>
  <div id="map" class="w-full h-full"></div>
  <!--<button @click="getDatesFromWmts">Click me to request!</button>-->
  <button @click="createmap">Click me to init!</button>
</template>

<script setup>
import { useMapContentStore } from "/src/stores/MapContentStore"

const mapStore = useMapContentStore()

function createmap() {
  mapStore.settoggleLayer()
}

</script>