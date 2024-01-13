<template>
  <div class="flex items-center justify-between font-semibold text-md">
    <span class="text-textMain">{{ text }}</span>
    <div class="text-sm font-medium">
      <span v-for="item in props.links">
        &nbsp;<a class="underline" target="_blank" :href=item.url>{{ item.text }}</a>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String
  },
  links: {
    type: Array
  }
})
</script>