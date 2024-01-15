<template>
  <div class="relative text-textPrimary">
    <button @click="toggle($event)" @blur="(event) => blur(event)"
      class="relative flex items-center justify-between w-full overflow-hidden border rounded-md border-accentDisabled group h-9">
      <span class="flex items-center pl-2 overflow-hidden font-medium whitespace-nowrap text-clip">
        {{ props.selected !== "" ? props.items.find((item) => item.key === props.selected).value : "Select option..." }}
      </span>
      <div class="flex h-full w-11">
        <div
          class="group-hover:w-full group-focus:w-full transition-all origin-bottom-left bg-accentSecondary w-2 -skew-x-12 shadow-[rgba(0,0,15,0.40)_-4px_0px_10px_0px]">
        </div>
      </div>
      <v-icon class="absolute right-0 text-iconPrimary group-hover:text-iconContrast group-focus:text-iconContrast"
        name="bi-arrow-down-short" scale="1.75" />
    </button>
    <Transition name="slide-down" mode="out-in">
      <div v-if="isOpen" :class="`${sideStyle}`"
        class="absolute flex flex-col w-full py-1 border rounded-md shadow-lg bg-bgPrimary border-accentDisabled">
        <button name="dd-item" v-for="item in props.items" :key="item.key"
          class="flex py-1 pl-2 font-medium hover:bg-hoverTint" @click="$emit('onChange', item.key); toggle($event)">
          {{ item.value }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  items: {
    type: Array,
    default: []
  },
  selected: {
    type: String,
    default: ""
  }
})
const isOpen = ref(false)
const sideStyle = ref("")

function toggle(event) {
  let emitter = event.target
  const expectedLineHeight = 36
  if (props.items.length * expectedLineHeight + emitter.getBoundingClientRect().bottom >= window.innerHeight) {
    sideStyle.value = "bottom-full"
  } else {
    sideStyle.value = ""
  }
  isOpen.value = !isOpen.value
}

function blur(event) {
  if (event.relatedTarget === null || event.relatedTarget.name !== "dd-item") {
    isOpen.value = false
  }
}
</script>