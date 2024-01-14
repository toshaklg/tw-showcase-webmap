<template>
  <div class="inline-flex flex-col-reverse justify-end w-5 mr-1 italic select-none h-9 text-accentPale">
    <ol :id="props.id" class="transition-all">
      <li class="flex items-center h-9" v-for="n in [...Array(total).keys()]">
        {{ n }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { onUpdated, onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String
  },
  number: {
    type: Number
  }
})

const total = 100

onMounted(() => {
  shift()
})

onUpdated(() => {
  shift()
})

function shift() {
  const lineHeight = 36

  var shift = props.number
  if (props.number > 100) {
    shift = 99
  }

  shift = shift * lineHeight
  const elm = document.getElementById(props.id)
  if (elm) {
    elm.style.transform = `translateY(-${shift}px)`
  }
}

</script>