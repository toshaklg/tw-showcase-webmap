<template>
  <div class="lg:w-80">

    <div id="navabar" class="flex h-12 gap-2 lg:h-20">
      <div
        class="flex items-center justify-center w-10 rounded-md shadow-lg cursor-pointer bg-fillMain lg:hidden hover:bg-hoverMain">
        <v-icon class="" name="co-hamburger-menu" scale="1.25" />
      </div>
      <div class="flex items-center justify-center rounded-md shadow-lg text-textMain bg-fillMain grow">
        center logo
      </div>
      <div
        class="flex items-center justify-center w-10 rounded-md shadow-lg cursor-pointer bg-fillMain lg:hidden hover:bg-hoverMain">
        <v-icon class="" name="io-settings-outline" scale="1.25" />
      </div>
    </div>

    <div id="tabs" class="mt-3">
      <div class="grid grid-cols-2 gap-2 px-2 text-base font-medium select-none">
        <div class="py-1 text-center cursor-pointer rounded-t-md" @click="switchTab('explore')"
          :class="[tab === 'explore' ? 'bg-fillMain' : 'bg-gradient-to-t from-tabshadowfrom via-tabshadowto via-20% to-tabshadowto text-textSecondary']">
          Explore
        </div>
        <div class="py-1 text-center cursor-pointer rounded-t-md" @click="switchTab('visualize')"
          :class="[tab === 'visualize' ? 'bg-fillMain' : 'bg-gradient-to-t from-tabshadowfrom via-tabshadowto via-20% to-tabshadowto text-textSecondary']">
          Visualize
        </div>
      </div>
    </div>

    <div id="panel" class="flex flex-col transition-all rounded-md shadow-lg bg-fillMain">
      <div class="w-full h-full px-3 pt-2 pb-3">
        <!--Explore tab content-->
        <Transition name="slide-up" mode="out-in">
          <div v-if="tab === 'explore'">
            <ViewHeading text="Available scenes" />
            <div>

              <SceneEntry title="Some titile" />
              <SceneEntry title="Some titile" />
              <SceneEntry title="Some titile" />
              <SceneEntry title="Some titile" />
              <SceneEntry title="Some titile" />
              <SceneEntry title="Some titile" />

            </div>
          </div>
          <!--Visualize tab content-->
          <div v-else-if="tab === 'visualize'">
            <div class="flex items-center justify-between text-base font-semibold">
              <span class="">Data layers</span>
              <v-icon class="justify-self-end text-[#C5C3C6] " name="hi-solid-question-mark-circle" scale="1.25" />
            </div>
            <div class="mt-3">
              <div class="bg-[url('/src/assets/TCIB.png')] bg-cover bg-center h-14 rounded-md  overflow-hidden shadow-lg">
                <div class="w-full h-full bg-black bg-opacity-25">
                  <div class="flex items-center justify-between w-full h-full px-3 font-normal">
                    <p class="text-[#EEEEEE]">True Color Image</p>
                    <v-icon class="text-[#C5C3C6]" name="bi-file-text" scale="1.25" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <!--Constant base map selector-->
      <div class="w-full h-full px-3 pt-2 pb-3 border-t border-solid border-accentPale">
        <ViewHeading text="Base map style"/>
        <Dropdown/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ViewHeading from "./ViewHeading.vue";
import SceneEntry from "./SceneEntry.vue";
import Dropdown from "/src/components/Dropdown.vue";

const tab = ref("explore");

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