<template>
  <div class="flex justify-between items-center">
    <h1 class="text-xl font-semibold text-gray-800">Notificações</h1>
    <div class="flex items-center space-x-2">
      <button
        @click="$emit('marcarTodasComoLidas')"
        class="bg-gray-600 hover:bg-gray-500 text-gray-300 px-3 py-1 rounded-lg text-sm flex items-center"
      >
        <i class="fas fa-check-double mr-2"></i>
        Marcar todas como lidas
      </button>

      <button
        class="bg-gray-600 hover:bg-gray-500 text-gray-300 px-3 py-1 rounded-lg text-sm flex items-center"
      >
        <i class="fas fa-sort mr-2"></i>
        Ordenar
      </button>

      <ThemeToggle />
    </div>
  </div>
</template>

<script setup>
import ThemeToggle from '@/components/Common/ThemeToggle.vue'
</script>

<style scoped>
</style>
