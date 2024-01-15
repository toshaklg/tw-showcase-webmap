<template>
  <div class="flex flex-col max-h-[100vh] absolute top-0 left-0 w-full p-3 md:w-96">
    <NavPanel v-model:isOpen="isOpen" />
    <DataTabs v-if="isOpen" v-model:tab="tab" @on-tab-change="(t) => tab = t" class="mt-2" />
    <DataPanel v-if="isOpen" v-model:tab="tab" />
    <BasePanel v-if="isOpen" class="mt-2" />
    <LegendPanel v-if="mapStore.activeDataLayer !== ''" class="mt-2" />
  </div>
</template>

<script setup>
import NavPanel from "./NavPanel.vue"
import DataPanel from "./datapanel/DataPanel.vue"
import BasePanel from "./BasePanel.vue"
import DataTabs from "./datapanel/DataTabs.vue"
import LegendPanel from "./legendpanel/LegendPanel.vue"
import { ref } from "vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()
const tab = ref("explore")
const isOpen = defineModel("isOpen")
</script>