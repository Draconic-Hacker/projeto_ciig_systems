<template>
  <button
    @click="emitToggle"
    @mouseenter="hoverOpen ? emitOpen() : null"
    class="p-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 transition-colors duration-200"
  >
    <slot>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  hoverOpen: { type: Boolean, default: false }
})

// Emite eventos para o componente pai controlar a sidebar
const emit = defineEmits(['toggle', 'open'])

function emitToggle() {
  emit('toggle')
}

function emitOpen() {
  emit('open')
}
</script>
