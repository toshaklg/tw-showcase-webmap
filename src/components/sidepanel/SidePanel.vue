<template>
  <div id="container" class="flex flex-col max-h-[calc(100vh-0.75rem*2)] absolute top-0 left-0 w-full p-3 md:w-80">

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

    <div v-if="isOpen">
      <div id="tabs" class="mt-3">
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
      <div id="panel" class="flex flex-col overflow-x-hidden overflow-y-auto rounded-md shadow-lg grow bg-fillMain">
        <div class="px-3 pt-2 pb-3">
          <!--Explore tab content-->
          <Transition name="slide-up" mode="out-in">
            <div v-if="tab === 'explore'">
              <ViewHeading class="mb-2" text="Available scenes" />
              <SceneEntry class="mb-3" title="Turkey Earthquake" :img="volcano_ground" />
              <SceneEntry class="mb-3" title="Glacier off the coast" :img="ice_ground" />
              <NewEntry />
            </div>
            <!--Visualize tab content-->
            <div v-else-if="tab === 'visualize'">
              <ViewHeading class="mb-2" text="Raster layers" />
              <DataLayerEntry :img="true_color_ground" />
            </div>
          </Transition>
        </div>
      </div>
      <!--Base map selector-->
      <div class="w-full px-3 pt-2 pb-3 mt-2 rounded-md shadow-lg bg-fillMain">
        <ViewHeading class="mb-2" text="Base map style" />
        <Dropdown />
      </div>
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

const tab = ref("explore");
const isOpen = ref(true);

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