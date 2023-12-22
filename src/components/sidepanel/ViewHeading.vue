<template>
  <div class="flex items-center justify-between font-semibold text-md">
    <span class="text-textMain">{{ text }}</span>
    <v-icon class=" justify-self-end text-accentPale" name="hi-solid-question-mark-circle" scale="1.25" />
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String
  },
})
</script>