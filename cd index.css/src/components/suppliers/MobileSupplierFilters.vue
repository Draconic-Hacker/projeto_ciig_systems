<template>
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
    :class="{ 'opacity-0 pointer-events-none': !isOpen, 'opacity-100': isOpen }"
    v-show="isOpen"
    @click.self="$emit('close')"
  >
    <div 
      class="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300"
      :class="{ 'translate-x-full': !isOpen, 'translate-x-0': isOpen }"
    >
      <div class="p-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Filtros</h2>
          <button 
            @click="$emit('close')"
            class="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="space-y-4">
          <button 
            v-for="filter in filters"
            :key="filter.value"
            @click="$emit('filter-change', filter.value)"
            :class="[
              'w-full text-left px-4 py-2 rounded-md font-medium transition-colors',
              activeFilter === filter.value 
                ? 'bg-primary-500 text-white hover:bg-primary-600'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
  activeFilter: String
});

defineEmits(['close', 'filter-change']);

// Definindo os filtros disponíveis
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