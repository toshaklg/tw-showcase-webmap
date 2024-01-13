<template>
  <div class="w-full px-3 pt-2 pb-2 rounded-md shadow-lg bg-fillMain">
    <div class="mb-1 text-sm font-medium">
      <span>Credit: 
        <a class="underline" v-for="item in mapStore.getSceneCopyrights" target="_blank" :href=item.url>{{ item.text }}</a>
      </span>
    </div>
    <BgBl v-if="mapStore.getLegendName === 'BgBl'"/>
    <BkWt v-else-if="mapStore.getLegendName === 'BkWt'"/>
    <BnYlGn v-else-if="mapStore.getLegendName === 'BnYlGn'"/>
    <RdGnBl v-else-if="mapStore.getLegendName === 'RdGnBl'"/>
    <RdGnBl_S1 v-else-if="mapStore.getLegendName === 'RdGnBl_S1'" />
  </div>
</template>

<script setup>
import BgBl from "./BgBl.vue"
import BkWt from "./BkWt.vue"
import BnYlGn from "./BnYlGn.vue"
import RdGnBl from "./RdGnBl.vue"
import RdGnBl_S1 from "./RdGnBl_S1.vue"

import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()
</script>
