<template>
  <div class="flex flex-col px-3 pt-2 pb-3 overflow-x-hidden overflow-y-auto rounded-md shadow-lg grow bg-fillMain">
    <Transition name="slide-up" mode="out-in">
      <div v-if="tab === 'explore'">
        <WindowHeading class="mb-2" text="Available scenes" />
        <SceneEntry class="mb-3 last:mb-0" v-for="(scene, key) in mapStore.scenes" :id=key :title=scene.title
          :hint=scene.hint :img=scene.cover :key=key :active=mapStore.activeScene @click=mapStore.setActiveScene(key) />
      </div>
      <div v-else-if="tab === 'visualize'">
        <WindowHeading class="mb-2" text="Data layers" />
        <div v-if="mapStore.activeScene === ''" class="flex flex-col items-center justify-center py-3 text-textMain">
          <v-icon name="bi-exclamation-diamond" scale="4" />
          <span>Scene is not selected.</span>
        </div>
        <LayerEntry class="mb-3 last:mb-0" v-for="(layer, key) in mapStore.dataLayers" :id=key :title=layer.title
          :description=layer.description :img=layer.cover :key=key :active=mapStore.activeDataLayer
          @click="mapStore.toggleLayer('data_layer', key)" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import WindowHeading from "/src/components/generic/WindowHeading.vue"
import SceneEntry from "./SceneEntry.vue"
import LayerEntry from "./LayerEntry.vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()
const tab = defineModel("tab")
</script>
