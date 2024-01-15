<template>
  <div class="flex items-center justify-between w-full overflow-hidden rounded-md shadow-lg min-h-9 h-9 bg-bgPrimary">
    <button :class="disablePrev() ? 'pointer-events-none text-iconDisabled' : 'text-iconPrimary'" class="relative flex justify-end h-full group w-11"
      @click="prev">
      <div :class="disablePrev() ? 'bg-accentDisabled' : 'bg-accentPrimary'"
        class="group-hover:w-full transition-all origin-top-right bg-accentPrimary w-2 h-full -skew-x-12 shadow-[rgba(0,0,15,0.40)_4px_0px_10px_0px]">
      </div>
      <v-icon class="absolute left-0 self-center" name="bi-arrow-left-short" scale="1.75" />
    </button>
    <div class="flex items-center text-xl mb-[2px] italic select-none text-textSecondary">
      +
    </div>
    <DatesCassette id="left_cassette" :number=calculatePrev() />
    <div class="w-32 mx-auto text-lg font-medium text-center select-none text-textPrimary">
      {{ mapStore.dimension[mapStore.position] }}
    </div>
    <div class="flex items-center text-xl mb-[2px] italic select-none text-textSecondary">
      +
    </div>
    <DatesCassette id="right_cassette" :number=calculateNext() />
    <button :class="disableNext() ? 'pointer-events-none text-iconDisabled' : 'text-iconPrimary'" class="relative flex justify-start h-full group w-11"
      @click="next">
      <div :class="disableNext() ? 'bg-accentDisabled' : 'bg-accentPrimary'"
        class="group-hover:w-full transition-all origin-bottom-left w-2 h-full -skew-x-12 shadow-[rgba(0,0,15,0.40)_-4px_0px_10px_0px]">
      </div>
      <v-icon class="absolute right-0 self-center" name="bi-arrow-right-short" scale="1.75" />
    </button>
  </div>
</template>

<script setup>
import DatesCassette from "./DatesCassette.vue"
import { onMounted } from "vue"
import { useMapStore } from "/src/stores/mapStore"

const mapStore = useMapStore()

onMounted(() => {
  callUpdate()
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
  return mapStore.position
}

function calculateNext() {
  return mapStore.dimension.length - mapStore.position - 1
}
</script>