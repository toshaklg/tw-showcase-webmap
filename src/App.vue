<template>
  <div class="w-full h-screen font-inter">
      <MapView />
      <div id="container" class="p-3">
        <SidePanel />
      </div>
  </div>
</template>

<script setup>
import MapView from "./components/MapView.vue"
import SidePanel from "./components/sidepanel/SidePanel.vue"
</script>
