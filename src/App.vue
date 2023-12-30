<template>
  <div class="w-full h-screen font-inter">
    <MapView />
    <SidePanel />
    <DatesSelector />
  </div>
</template>

<script setup>
import DatesSelector from "./components/DatesSelector.vue";
import MapView from "./components/map/MapView.vue"
import SidePanel from "./components/sidepanel/SidePanel.vue"
</script>
