<template>
  <div class="relative text-textMain">
    <button @click="toggle($event)" @blur="(event) => blur(event)"
      class="relative flex items-center justify-between w-full overflow-hidden border rounded-md border-accentPale group h-9">
      <span class="flex items-center pl-2 overflow-hidden font-medium whitespace-nowrap text-clip">
        {{ props.selected !== "" ? props.items.find((item) => item.key === props.selected).value : "---TODO---" }}
      </span>
      <div class="flex h-full w-11">
        <div
          class="group-hover:w-full group-focus:w-full transition-all origin-bottom-left bg-accentDark w-2 -skew-x-12 shadow-[rgba(0,0,15,0.40)_-4px_0px_10px_0px]">
        </div>
      </div>
      <v-icon class="absolute right-0 text-textMain group-hover:text-textContrast group-focus:text-textContrast"
        name="bi-arrow-down-short" scale="1.75" />
    </button>
    <Transition name="slide-down" mode="out-in">
      <div v-if="isOpen" :class="`${sideStyle}`"
        class="absolute flex flex-col w-full py-1 border rounded-md shadow-lg bg-fillMain border-accentPale">
        <button name="dd-item" v-for="item in props.items" :key="item.key"
          class="flex py-1 pl-2 font-medium hover:bg-hoverMain" @click="$emit('onChange', item.key); toggle($event)">
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

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.15s ease-out;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-15px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>