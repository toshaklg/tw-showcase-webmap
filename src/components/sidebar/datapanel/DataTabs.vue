<template>
  <div class="grid grid-cols-2 gap-2 px-2 text-base font-medium select-none">
    <button class="py-1 text-center cursor-pointer rounded-t-md" @click="$emit('onTabChange', 'explore')"
      :class="[tab === 'explore' ? 'bg-fillMain' : 'bg-gradient-to-t from-tabshadowfrom via-tabshadowto via-20% to-tabshadowto text-textSecondary']">
      Explore
    </button>
    <button class="py-1 text-center cursor-pointer rounded-t-md" @click="$emit('onTabChange', 'visualize')"
      :class="[tab === 'visualize' ? 'bg-fillMain' : 'bg-gradient-to-t from-tabshadowfrom via-tabshadowto via-20% to-tabshadowto text-textSecondary']">
      Visualize
    </button>
  </div>
</template>

<script setup>
const tab = defineModel("tab")
</script>
