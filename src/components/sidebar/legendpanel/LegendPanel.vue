<template>
  <div class="w-full px-3 pt-3 pb-2 rounded-md shadow-lg bg-fillMain">
    <BgBl v-if="mapStore.getLegendName === 'BgBl'"/>
    <BkWt v-if="mapStore.getLegendName === 'BkWt'"/>
    <BnYlGn v-if="mapStore.getLegendName === 'BnYlGn'"/>
    <RdGnBl v-if="mapStore.getLegendName === 'RdGnBl'"/>
  </div>
</template>

<script setup>
import BgBl from "./BgBl.vue"
import BkWt from "./BkWt.vue"
import BnYlGn from "./BnYlGn.vue"
import RdGnBl from "./RdGnBl.vue"

import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()
</script>
