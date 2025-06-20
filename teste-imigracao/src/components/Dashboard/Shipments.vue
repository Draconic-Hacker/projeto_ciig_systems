<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Remessas em Trânsito</h3>
    <div class="space-y-4">
      <div v-for="(shipment, index) in shipments" :key="index">
        <div class="flex justify-between mb-1">
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ shipment.name }}</span>
          <span class="text-sm text-gray-600 dark:text-gray-300">{{ shipment.progress }}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div :style="{ width: shipment.progress + '%' }" :class="[shipment.color, 'h-2 rounded-full']"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
const shipments = [
  { name: 'Pedido PO1234 - São Paulo', progress: 70, color: 'bg-blue-500' },
  { name: 'Pedido PO1235 - Rio de Janeiro', progress: 45, color: 'bg-green-500' },
  { name: 'Pedido PO1236 - Belo Horizonte', progress: 90, color: 'bg-yellow-500' }
]
</script>

<style scoped>
</style>
