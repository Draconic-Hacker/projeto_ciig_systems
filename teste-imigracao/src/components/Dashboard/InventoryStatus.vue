<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Status do Inventário</h3>
    <div class="space-y-4">
      <div v-for="(item, index) in inventoryStatus" :key="index">
        <div class="flex justify-between mb-1">
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ item.category }}</span>
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ item.percentage }}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div :style="{ width: item.percentage + '%' }" :class="[item.color, 'h-2 rounded-full']"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
const inventoryStatus = [
  { category: 'Matéria-Prima', percentage: 80, color: 'bg-blue-500' },
  { category: 'Produtos Acabados', percentage: 60, color: 'bg-green-500' },
  { category: 'Componentes', percentage: 45, color: 'bg-yellow-500' },
  { category: 'Em Trânsito', percentage: 30, color: 'bg-purple-500' }
]
</script>

<style scoped>
</style>
