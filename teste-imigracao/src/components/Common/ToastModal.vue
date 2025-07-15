<template>
  <transition name="toast-fade">
    <div
      v-if="visible"
      class="toast-modal"
      :class="type"
      @mouseenter="pause"
      @mouseleave="resume"
      @click="close"
      :style="{ opacity: isPaused ? 1 : undefined }"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
const emit = defineEmits(['clear'])
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  message: String,
  type: { type: String, default: 'info' }, // 'success' | 'error' | 'info'
  duration: { type: Number, default: 3000 }
})

const visible = ref(false)
const isPaused = ref(false)
let timer = null

function show() {
  visible.value = true
  startTimer()
}

function startTimer() {
  clearTimeout(timer)
  timer = setTimeout(() => {
    if (!isPaused.value) close()
  }, props.duration)
}

function pause() {
  isPaused.value = true
  clearTimeout(timer)
}

function resume() {
  isPaused.value = false
  startTimer()
}

function close() {
  visible.value = false
  // Aguarda a animação de saída antes de emitir o evento
  setTimeout(() => {
    emit('clear')
  }, 600) // 600ms = tempo da transição CSS
}

watch(() => props.message, (val) => {
  if (val) show()
})

onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.toast-modal {
  position: fixed;
  right: 32px;
  bottom: 32px;
  min-width: 220px;
  max-width: 320px;
  padding: 16px 24px;
  border-radius: 8px;
  color: #fff;
  font-size: 1.1em;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  cursor: pointer;
  z-index: 9999;
  opacity: 0.92;
  transition: background 0.2s, opacity 0.3s;
  user-select: none;
}
.toast-modal.success { background: #28a745; }
.toast-modal.error   { background: #dc3545; }
.toast-modal.info    { background: #007bff; }
.toast-modal:hover   { opacity: 1; filter: brightness(1.1); }
.toast-fade-enter-active, .toast-fade-leave-active {
  transition: opacity 0.6s;
}
.toast-fade-enter-from, .toast-fade-leave-to {
  opacity: 0;
}
</style>