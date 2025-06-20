<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Lista de Parceiros</h2>
      <div class="relative hidden md:block">
        <input 
          type="text" 
          v-model="searchTerm"
          placeholder="Buscar parceiros..." 
          class="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 dark:text-gray-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>

    <div v-if="filteredSuppliers.length === 0" class="col-span-full text-center py-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">Nenhum parceiro encontrado</h3>
      <p class="text-gray-500 dark:text-gray-400 mt-1">Tente ajustar seus filtros ou critérios de busca</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SupplierCard 
        v-for="supplier in filteredSuppliers"
        :key="supplier.id"
        :supplier="supplier"
        @show-details="$emit('show-details', supplier)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SupplierCard from '@/components/suppliers/SupplierCard.vue';

const props = defineProps({
  suppliers: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['show-details']);

const searchTerm = ref('');

const filteredSuppliers = computed(() => {
  if (!searchTerm.value) return props.suppliers;
  
  const term = searchTerm.value.toLowerCase();
  return props.suppliers.filter(s => 
    s.name.toLowerCase().includes(term) || 
    s.location.toLowerCase().includes(term)
  );
});
</script>