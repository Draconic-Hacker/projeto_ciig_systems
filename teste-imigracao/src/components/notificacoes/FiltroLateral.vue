<template>
  <aside class="w-64 p-4 bg-white dark:bg-gray-800 border-r border-gray-900">
    <h2 class="text-lg font-semibold text-gray-500 mb-4">Filtros</h2>

    <!-- Exemplo de filtro -->
    <div class="mb-6">
      <label class="text-sm font-medium text-gray-500">Categoria</label>
      <div class="space-y-2 mt-2">
        <div v-for="categoria in categorias" :key="categoria" class="flex items-center">
          <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600" checked />
          <span class="ml-2 text-sm text-gray-500">{{ categoria }}</span>
        </div>
      </div>
    </div>

    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
      Aplicar Filtros
    </button>
  </aside>
</template>

<script setup>
const categorias = [
  'Operacional',
  'Estoque',
  'Financeira',
  'Logística',
  'Compliance',
  'Sistema',
  'Colaboração'
]
</script>

<style scoped>
</style>
