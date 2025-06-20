<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
    <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Filtrar Parceiros</h2>
    <div class="flex flex-wrap gap-3">
      <button 
        v-for="filter in filters"
        :key="filter.value"
        @click="$emit('filter-change', filter.value)"
        :class="[
          'px-4 py-2 rounded-md font-medium transition-colors',
          activeFilter === filter.value 
            ? 'bg-primary-500 text-white hover:bg-primary-600'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        ]"
      >
        {{ filter.label }}
      </button>
    </div>
    
    <div class="relative mt-4 md:hidden">
      <input 
        type="text" 
        v-model="searchTerm"
        placeholder="Buscar parceiros..." 
        class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-gray-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  activeFilter: {
    type: String,
    default: 'all'
  }
});

defineEmits(['filter-change', 'toggle-mobile-filters']);

const searchTerm = ref('');

const filters = [
  { value: 'all', label: 'Todos os Parceiros' },
  { value: 'active', label: 'Ativos' },
  { value: 'inactive', label: 'Inativos' },
  { value: 'premium', label: 'Parceiros Premium' },
  { value: 'new', label: 'Novos Parceiros' }
];
</script>

<style scoped>
/* Estilos específicos do componente */
</style>