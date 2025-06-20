<template>
  <div class="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex justify-between items-center">
        Selecionar Fornecedor
        <button @click="$emit('close')">✖️</button>
      </h3>

      <input v-model="search" type="text" placeholder="Buscar fornecedor..."
             class="w-full mb-4 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2" />

      <div class="space-y-2 max-h-64 overflow-y-auto">
        <div v-for="supplier in filteredSuppliers" :key="supplier" @click="selectSupplier(supplier)"
             class="cursor-pointer p-3 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
          {{ supplier }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['close', 'success'])

const search = ref('')
const suppliers = ['TechSupply Ltda.', 'EcoMateriais S.A.', 'Global Logistics', 'InnoSoft', 'SupplyMax']

const filteredSuppliers = computed(() =>
  suppliers.filter(s => s.toLowerCase().includes(search.value.toLowerCase()))
)

const selectSupplier = (name) => {
  emit('success', `Redirecionando para o suporte da ${name}`)
  emit('close')
}
</script>

<style scoped>
</style>
