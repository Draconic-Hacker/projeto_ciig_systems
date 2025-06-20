<template>
  <div 
    v-show="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    @click="close"
  >
    <div 
      class="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-lg transition-transform duration-300"
      :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
      @click.stop
    >
      <div class="p-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">Filtros</h2>
          <button @click="close" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <!-- Reutiliza o mesmo conteúdo do FilterSidebar -->
        <FilterSidebarContent 
          @apply-filters="handleApplyFilters"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import FilterSidebarContent from './FilterSidebar.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close', 'apply-filters']);

const close = () => {
  emit('close');
};

const handleApplyFilters = (filters) => {
  emit('apply-filters', filters);
  close();
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>