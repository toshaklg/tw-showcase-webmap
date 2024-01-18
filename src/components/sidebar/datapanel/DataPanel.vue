<template>
  <div class="flex flex-col px-3 pt-2 pb-3 overflow-x-hidden overflow-y-auto rounded-md shadow-lg grow bg-bgPrimary">
    <Transition name="slide-left" mode="out-in">
      <div v-if="tab === 'explore'" class="flex flex-col">
        <WindowHeading class="mb-2" text="Available scenes" />
        <SceneEntry class="mb-3 last:mb-0" v-for="(scene, key) in mapStore.scenes" :id=key :title=scene.title
          :hint=scene.hint :img=scene.cover :key=key :active=mapStore.activeScene
          :is-ready=mapStore.hasSceneCapabilities(key) @click="tab = 'visualize'" />
        <div class="flex items-center justify-center">
          <v-icon class="text-iconPrimary" animation="float" speed="slow" name="bi-arrow-up-short" scale="1.75" />
          <span class="text-center text-textPrimary">Select a scene from options above</span>
          <v-icon class="text-iconPrimary" animation="float" speed="slow" name="bi-arrow-up-short" scale="1.75" />
        </div>
      </div>
      <div v-else-if="tab === 'visualize'" class="flex flex-col">
        <WindowHeading class="mb-2" text="Data layers" />
        <div v-if="mapStore.activeScene === ''" class="flex flex-col items-center justify-center py-3 text-textPrimary">
          <v-icon class="text-iconPrimary" name="bi-exclamation-diamond" scale="4" />
          <span>Scene is not selected.</span>
        </div>
        <LayerEntry class="mb-3 last:mb-0" v-for="(layer, key) in mapStore.dataLayers" :id=key :title=layer.title
          :description=layer.description :img=layer.cover :key=key :active=mapStore.activeDataLayer />
        <div v-if="mapStore.activeScene !== ''" class="flex items-center justify-center">
          <v-icon class="text-iconPrimary" animation="float" speed="slow" name="bi-arrow-up-short" scale="1.75" />
          <span class="text-center text-textPrimary">Select a preffered visualization</span>
          <v-icon class="text-iconPrimary" animation="float" speed="slow" name="bi-arrow-up-short" scale="1.75" />
        </div>
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
