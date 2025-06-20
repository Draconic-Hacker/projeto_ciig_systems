<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <header class="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div class="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center font-bold text-xl mr-3">CG</div>
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white">CIIG Global</h1>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mt-1">Gerenciamento de Parceiros</p>
        </div>
        <button 
          @click="toggleTheme"
          class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <SupplierFilters 
        :active-filter="activeFilter"
        @filter-change="handleFilterChange"
        @toggle-mobile-filters="toggleMobileFilters"
      />

      <SupplierStats :stats="stats" />

      <SupplierList 
        :suppliers="filteredSuppliers"
        @show-details="showSupplierDetails"
      />

      <SupplierModal 
        v-if="selectedSupplier"
        :supplier="selectedSupplier"
        :is-open="isModalOpen"
        @close="closeModal"
      />

      <MobileSupplierFilters 
        :is-open="isMobileFiltersOpen"
        :active-filter="activeFilter"
        @close="closeMobileFilters"
        @filter-change="handleFilterChange"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SupplierFilters from '@/components/suppliers/SupplierFilters.vue';
import SupplierStats from '@/components/suppliers/SupplierStats.vue';
import SupplierList from '@/components/suppliers/SupplierList.vue';
import SupplierModal from '@/components/suppliers/SupplierModal.vue';
import MobileSupplierFilters from '@/components/suppliers/MobileSupplierFilters.vue';
import { useSuppliers } from '@/composables/useSuppliers';

const { suppliers, stats } = useSuppliers();

// Estado
const darkMode = ref(false);
const activeFilter = ref('all');
const searchTerm = ref('');
const selectedSupplier = ref(null);
const isModalOpen = ref(false);
const isMobileFiltersOpen = ref(false);

// Computed
const filteredSuppliers = computed(() => {
  let filtered = [...suppliers.value];
  
  // Aplicar filtro
  switch(activeFilter.value) {
    case 'active':
      filtered = filtered.filter(s => s.status === 'active');
      break;
    case 'inactive':
      filtered = filtered.filter(s => s.status === 'inactive');
      break;
    case 'premium':
      filtered = filtered.filter(s => s.isPremium);
      break;
    case 'new':
      filtered = filtered.filter(s => s.isNew);
      break;
  }
  
  // Aplicar busca
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase();
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(term) || 
      s.location.toLowerCase().includes(term)
    );
  }
  
  return filtered;
});

// Métodos
const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
};

const handleFilterChange = (filter) => {
  activeFilter.value = filter;
  closeMobileFilters();
};

const showSupplierDetails = (supplier) => {
  selectedSupplier.value = supplier;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const toggleMobileFilters = () => {
  isMobileFiltersOpen.value = !isMobileFiltersOpen.value;
};

const closeMobileFilters = () => {
  isMobileFiltersOpen.value = false;
};

// Inicialização
onMounted(() => {
  if (localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    darkMode.value = true;
  }
});
</script>

<style scoped>
/* Estilos específicos do componente */
</style>