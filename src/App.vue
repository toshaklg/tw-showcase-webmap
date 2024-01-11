<template>
  <div class="relative w-full h-screen font-inter">
    <Map v-if="mapStore.isReady" />
    <Sidebar v-model:isOpen="isSideOpen"/>
    <Controlbar :class="isSideOpen ? 'hidden md:flex' : ''" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Map from "./components/map/Map.vue"
import Sidebar from "./components/sidebar/Sidebar.vue"
import Controlbar from "./components/controlbar/Controlbar.vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()

const isSideOpen = ref(true)
</script>
