<template>
  <div class="bg-white border-b border-gray-200 p-4">
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-semibold text-gray-800">Notificações</h1>
      <div class="flex items-center space-x-2">
        <button 
          @click="$emit('toggleMobileFilters')"
          class="md:hidden bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm"
        >
          <i class="fas fa-filter mr-2"></i> Filtros
        </button>
        <button 
          @click="$emit('markAllRead')"
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm"
        >
          <i class="fas fa-check-double mr-2"></i> Marcar todas como lidas
        </button>
        <div class="relative">
          <button 
            @click="toggleSortDropdown"
            class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm"
          >
            <i class="fas fa-sort mr-2"></i> Ordenar
          </button>
          <div 
            v-show="showSortDropdown"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
          >
            <div class="py-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mais recentes primeiro</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mais antigas primeiro</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Por prioridade</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Por categoria</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showSortDropdown = ref(false);

const toggleSortDropdown = () => {
  showSortDropdown.value = !showSortDropdown.value;
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>