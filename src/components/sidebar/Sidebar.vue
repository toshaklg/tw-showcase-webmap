<template>
  <div class="flex flex-col max-h-[100vh] absolute top-0 left-0 w-full p-3 md:w-96">
    <NavPanel v-model:isOpen="isOpen" />
    <DataTabs v-if="isOpen" v-model:tab="tab" @on-tab-change="(t) => tab = t" class="mt-2" />
    <DataPanel v-if="isOpen" v-model:tab="tab" />
    <BasePanel v-if="isOpen" class="mt-2" />
    <DatesSelector v-if="mapStore.dimension.length !== 0" :dates="mapStore.dimension" class="mt-2"/>
  </div>
</template>

<script setup>
import { ref } from "vue"

import { useMapStore } from "/src/stores/mapStore"
import NavPanel from "./NavPanel.vue"
import DataPanel from "./datapanel/DataPanel.vue"
import BasePanel from "./BasePanel.vue";
import DataTabs from "./datapanel/DataTabs.vue"
import DatesSelector from "/src/components/generic/DatesSelector.vue"
const mapStore = useMapStore()

const tab = ref("explore")
const isOpen = ref(true)

function switchTab(value) {
  tab.value = value
}
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.15s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(15px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}
</style>