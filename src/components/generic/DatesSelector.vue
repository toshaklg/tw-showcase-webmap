<template>
  <div
    class="absolute flex items-center overflow-hidden border rounded-md shadow-lg bg-fillMain border-accentPale font-inter bottom-12 left-6 h-9">

    <button class="flex justify-end h-full group w-11" @click="prev">
      <div
        class="group-hover:w-full transition-all origin-top-right bg-accentMain w-2 -skew-x-12 shadow-[rgba(0,0,15,0.40)_4px_0px_10px_0px]">
      </div>
      <v-icon class="absolute left-0 text-textMain" name="bi-arrow-left-short" scale="1.75" />
    </button>

    <div class="ml-1 italic text-accentPale">
      +1
    </div>

    <div class="mx-6 text-lg font-medium">
      2023-03-15
    </div>

    <div class="mr-2 italic text-accentPale">
      +1
    </div>

    <button class="flex justify-start h-full group w-11" @click="next">
      <div
        class="group-hover:w-full transition-all origin-bottom-left bg-accentMain w-2 -skew-x-12 shadow-[rgba(0,0,15,0.40)_-4px_0px_10px_0px]">
      </div>
      <v-icon class="absolute right-0 text-textMain" name="bi-arrow-right-short" scale="1.75" />
    </button>

  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  dates: {
    type: Array
  }
})


function next() {
  console.log(props.dates[0])
}

function prev() {
  console.log("prev")
}
</script>