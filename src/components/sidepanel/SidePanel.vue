<template>
  <div id="container" class="flex flex-col max-h-[100vh] absolute top-0 left-0 w-full p-3 md:w-96">

    <div id="navabar" class="flex gap-2">
      <div id="controls" class="flex flex-col gap-2 ">
        <button @click="isOpen = !isOpen"
          class="flex items-center justify-center w-10 rounded-md shadow-lg cursor-pointer aspect-square bg-fillMain hover:bg-hoverMain">
          <v-icon name="bi-layout-sidebar-inset" scale="1.25" />
        </button>
        <div class="w-5 aspect-square">
          <button
            class="flex items-center justify-center w-10 rounded-md shadow-lg cursor-pointer aspect-square bg-fillMain hover:bg-hoverMain">
            <v-icon name="io-settings-outline" scale="1.25" />
          </button>
        </div>
      </div>
      <div id="logo" class="flex items-center justify-center rounded-md shadow-lg text-textMain bg-fillMain grow">
        center logo
      </div>
    </div>

    <div v-if="isOpen" id="tabs" class="mt-3">
      <div class="grid grid-cols-2 gap-2 px-2 text-base font-medium select-none">
        <button class="py-1 text-center cursor-pointer rounded-t-md" @click="switchTab('explore')"
          :class="[tab === 'explore' ? 'bg-fillMain' : 'bg-gradient-to-t from-tabshadowfrom via-tabshadowto via-20% to-tabshadowto text-textSecondary']">
          Explore
        </button>
        <button class="py-1 text-center cursor-pointer rounded-t-md" @click="switchTab('visualize')"
          :class="[tab === 'visualize' ? 'bg-fillMain' : 'bg-gradient-to-t from-tabshadowfrom via-tabshadowto via-20% to-tabshadowto text-textSecondary']">
          Visualize
        </button>
      </div>
    </div>

    <div v-if="isOpen" id="panel"
      class="flex flex-col overflow-x-hidden overflow-y-auto rounded-md shadow-lg grow bg-fillMain">
      <div class="px-3 pt-2 pb-3">
        <!--Explore tab content-->
        <Transition name="slide-up" mode="out-in">
          <div v-if="tab === 'explore'">
            <ViewHeading class="mb-2" text="Available scenes" />

            <SceneEntry v-for="(scene, key) in mapStore.scenes" :id=key :title=scene.title :hint=scene.hint
              :img=scene.cover :key=key :active=mapStore.activeScene @click=mapStore.setActiveScene(key) />

            <NewEntry />
          </div>
          <!--Visualize tab content-->
          <div v-else-if="tab === 'visualize'">
            <ViewHeading class="mb-2" text="Data layers" />
            <!--
            <div v-if="mapStore.activeScene === ''" class="flex flex-col items-center justify-center py-3 text-textMain">
              <v-icon name="bi-exclamation-diamond" scale="4" />
              <span>Scene is not selected.</span>
            </div>
            -->

            <DataLayerEntry v-for="(layer, key) in mapStore.dataLayers" :id=key :title=layer.title
              :description=layer.description :img=layer.cover :key=key :active=mapStore.activeDataLayer @click="mapStore.toggleLayer('data_layer', key)" />
          </div>
        </Transition>
      </div>
    </div>

    <div v-if="isOpen" class="w-full px-3 pt-2 pb-3 mt-2 rounded-md shadow-lg bg-fillMain">
      <ViewHeading class="mb-2" text="Base map style" />
      <Dropdown :items="mapStore.getBaseLayersKeys" :selected="mapStore.activeBaseLayer"
        @on-change="(key) => mapStore.toggleLayer('base_layer', key)" />
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import ViewHeading from "./ViewHeading.vue"
import SceneEntry from "./SceneEntry.vue"
import Dropdown from "/src/components/Dropdown.vue"
import NewEntry from "/src/components/sidepanel/NewEntry.vue"
import ice_ground from "/src/assets/ice_ground.jpg"
import volcano_ground from "/src/assets/volcano_ground.jpg"
import true_color_ground from "/src/assets/true_color_ground.jpg"
import DataLayerEntry from "./DataLayerEntry.vue"

import { useMapStore } from "/src/stores/mapStore"
const mapStore = useMapStore()

const tab = ref("explore")
const isOpen = ref(true)

function switchTab(value) {
  tab.value = value;
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