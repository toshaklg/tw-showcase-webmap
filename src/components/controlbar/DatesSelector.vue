<template>
  <div class="flex items-center justify-between w-full overflow-hidden rounded-md shadow-lg min-h-9 h-9 bg-fillMain">

    <button :class="disablePrev() ? 'pointer-events-none' : ''" class="relative flex justify-end h-full group w-11"
      @click="prev">
      <div :class="disablePrev() ? 'bg-accentPale' : 'bg-accentMain'"
        class="group-hover:w-full transition-all origin-top-right bg-accentMain w-2 h-full -skew-x-12 shadow-[rgba(0,0,15,0.40)_4px_0px_10px_0px]">
      </div>
      <v-icon class="absolute left-0 self-center text-textMain" name="bi-arrow-left-short" scale="1.75" />
    </button>

    <div class="flex items-center text-xl mb-[2px] italic select-none text-accentPale">
      + 
    </div>
    <DatesCassette id="left_cassette" :number=calculatePrev() />

    <div class="w-32 mx-auto text-lg font-medium text-center select-none">
      {{ mapStore.dimension[mapStore.position] }}
    </div>

    
    <div class="flex items-center text-xl mb-[2px] italic select-none text-accentPale">
      + 
    </div>
    <DatesCassette id="right_cassette" :number=calculateNext() />

    <button :class="disableNext() ? 'pointer-events-none' : ''" class="relative flex justify-start h-full group w-11"
      @click="next">
      <div :class="disableNext() ? 'bg-accentPale' : 'bg-accentMain'"
        class="group-hover:w-full transition-all origin-bottom-left w-2 h-full -skew-x-12 shadow-[rgba(0,0,15,0.40)_-4px_0px_10px_0px]">
      </div>
      <v-icon class="absolute right-0 self-center text-textMain" name="bi-arrow-right-short" scale="1.75" />
    </button>

  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue"
import { useMapStore } from "/src/stores/mapStore"
import DatesCassette from "/src/components/generic/DatesCassette.vue"

const mapStore = useMapStore()

onMounted(() => {
  console.log("call update")
})


function next() {
  if (mapStore.dimension.length - 1 > mapStore.position) {
    mapStore.position = mapStore.position + 1
    callUpdate()
  }
}

function prev() {
  if (mapStore.position > 0) {
    mapStore.position = mapStore.position - 1
    callUpdate()
  }
}

function callUpdate() {
  mapStore.mapInstance.updateLayerTime(mapStore.activeDataLayer, mapStore.dimension[mapStore.position])
}

function disablePrev() {
  if (mapStore.position === 0) {
    return true
  }
  return false
}

function disableNext() {
  if (mapStore.dimension.length === (mapStore.position + 1)) {
    return true
  }
  return false
}

function calculatePrev() {
  console.log("prev", mapStore.position)
  return mapStore.position
}

function calculateNext() {
  return mapStore.dimension.length - mapStore.position - 1
}
</script>