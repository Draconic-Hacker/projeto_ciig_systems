<template>
  <button @click="toggleTheme" class="hover-toggle p-2 rounded-full hover:bg-blue-700 transition flex items-center justify-center w-10 h-10">
    <!-- Sun Icon (FontAwesome) -->
    <i v-if="isDark" class="fas fa-sun text-yellow-400 text-lg"></i>
    <!-- Moon Icon (FontAwesome) -->
    <i v-else class="fas fa-moon text-gray-600 text-lg"></i>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle-theme']);
const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  emit('toggle-theme', isDark.value);
}
</script>

<style scoped>
.hover-toggle {
    transition: transform 0.2s cubic-bezier(.4,0,.2,1), box-shadow 0.2s;
}
.hover-toggle:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
</style>
