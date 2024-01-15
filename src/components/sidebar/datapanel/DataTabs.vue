<template>
  <div class="grid grid-cols-2 gap-2 px-2 text-base font-medium select-none">
    <button class="py-1 text-center cursor-pointer rounded-t-md" @click="$emit('onTabChange', 'explore')"
      :class="[tab === 'explore' ? 'bg-bgPrimary text-textPrimary' : 'bg-gradient-to-t from-tabShadowFrom via-tabShadowTo via-20% to-tabShadowTo text-textSecondary']">
      Explore
    </button>
    <button class="py-1 text-center cursor-pointer rounded-t-md" @click="$emit('onTabChange', 'visualize')"
      :class="[tab === 'visualize' ? 'bg-bgPrimary text-textPrimary' : 'bg-gradient-to-t from-tabShadowFrom via-tabShadowTo via-20% to-tabShadowTo text-textSecondary']">
      Visualize
    </button>
  </div>
</template>

<script setup>
const tab = defineModel("tab")
</script>
