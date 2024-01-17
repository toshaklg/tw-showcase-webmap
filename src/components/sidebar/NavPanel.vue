<template>
  <div class="flex gap-2">
    <div class="flex flex-col gap-2 ">
      <button @click="isOpen = !isOpen"
        class="flex items-center justify-center w-10 transition-all rounded-md shadow-lg cursor-pointer aspect-square bg-bgPrimary hover:bg-hoverTint">
        <v-icon class="transition-all text-iconPrimary" name="bi-layout-sidebar-inset" scale="1.25" />
      </button>
      <div class="w-5 aspect-square">
        <button @click="switchTheme(!mapStore.isThemeDark)"
          class="flex items-center justify-center w-10 transition-all rounded-md shadow-lg cursor-pointer aspect-square bg-bgPrimary hover:bg-hoverTint">
          <v-icon class="transition-all text-iconPrimary"
            :name="mapStore.isThemeDark === true ? 'hi-solid-sun' : 'hi-solid-moon'" scale="1.25" />
        </button>
      </div>
    </div>
    <div id="logo"
      class="flex items-center justify-around transition-all rounded-md shadow-lg text-textPrimary bg-bgPrimary grow">
      <div class="text-lg font-medium">Vue3 + Tailwind webmap</div>
      <div class="text-xs">{{ version }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useMapStore } from "/src/stores/mapStore"

const isOpen = defineModel("isOpen")
const mapStore = useMapStore()
const version = __APP_VERSION__

function enableDarkMode() {
  const elm = document.getElementsByTagName("html")[0]
  elm.setAttribute("color-theme", "dark")
  mapStore.isThemeDark = true
}

function disableDarkMode() {
  const elm = document.getElementsByTagName("html")[0]
  elm.setAttribute("color-theme", "light")
  mapStore.isThemeDark = false
}

function switchTheme(isDark) {
  if (isDark) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
}

onMounted(() => {
  const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)")
  switchTheme(themeWatcher.matches)
  themeWatcher.addEventListener("change", function () {
    switchTheme(themeWatcher.matches)
  })
})
</script>
