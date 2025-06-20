<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Desempenho dos Fornecedores</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Fornecedor</th>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Pedidos</th>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Pontualidade</th>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Qualidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(supplier, index) in suppliers" :key="index" class="border-t dark:border-gray-700">
            <td class="px-4 py-2">{{ supplier.name }}</td>
            <td class="px-4 py-2">{{ supplier.orders }}</td>
            <td class="px-4 py-2">
              <span :class="['px-2 py-1 rounded-full text-xs font-medium', supplier.onTimeClass]">
                {{ supplier.onTime }}%
              </span>
            </td>
            <td class="px-4 py-2">
              <span :class="['px-2 py-1 rounded-full text-xs font-medium', supplier.qualityClass]">
                {{ supplier.quality }}%
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
const suppliers = [
  { name: 'Fornecedor A', orders: 120, onTime: 92, quality: 95, onTimeClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', qualityClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
  { name: 'Fornecedor B', orders: 85, onTime: 78, quality: 88, onTimeClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', qualityClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
  { name: 'Fornecedor C', orders: 60, onTime: 65, quality: 80, onTimeClass: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300', qualityClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' }
]
</script>

<style scoped>
</style>
