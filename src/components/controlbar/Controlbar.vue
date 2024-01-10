<template>
  <div class="absolute flex gap-2 w-full p-3 bottom-0 md:bottom-3 min-h-fit md:left-[50%] md:w-fit md:translate-x-[-50%] justify-end">

      <DatesSelector v-if="mapStore.dimension.length !== 0" :dates="mapStore.dimension" />
      <button @click="mapStore.mapInstance.zoomIn()"
        class="rounded-md shadow-lg h-9 aspect-square bg-fillMain">
        <v-icon class="text-textMain" name="hi-plus-sm" scale="1.25" />
      </button>
      <button @click="mapStore.mapInstance.zoomOut()"
        class="rounded-md shadow-lg h-9 aspect-square bg-fillMain">
        <v-icon class="text-textMain" name="hi-minus-sm" scale="1.25" />
      </button>

      <!--
      <div class="flex justify-between gap-2">
        <div class="flex gap-2">
          <button class="px-2 font-medium border border-solid rounded-md border-accentPale h-9">
            Reset view
          </button>
          <button @click="mapStore.mapInstance.setRotation(0)" class="px-2 font-medium border border-solid rounded-md border-accentPale h-9">
            Align north
          </button>
        </div>
        <div class="flex gap-2">
          <button @click="mapStore.mapInstance.zoomIn()" class="border border-solid rounded-md border-accentPale h-9 aspect-square">
            <v-icon class="text-textMain" name="hi-plus-sm" scale="1.25" />
          </button>
          <button @click="mapStore.mapInstance.zoomOut()" class="border border-solid rounded-md border-accentPale h-9 aspect-square">
            <v-icon class="text-textMain" name="hi-minus-sm" scale="1.25" />
          </button>
        </div>
      </div>
      -->


  </div>
</template>

<script setup>
import { ref } from "vue"
import DatesSelector from "./DatesSelector.vue";
import { useMapStore } from "/src/stores/mapStore"
const mapStore = useMapStore()

</script>
