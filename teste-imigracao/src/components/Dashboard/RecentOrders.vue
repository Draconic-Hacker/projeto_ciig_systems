<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Pedidos Recentes</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">#Pedido</th>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Cliente</th>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Status</th>
            <th class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index" class="border-t dark:border-gray-700">
            <td class="px-4 py-2">{{ order.id }}</td>
            <td class="px-4 py-2">{{ order.customer }}</td>
            <td class="px-4 py-2">
              <span :class="['px-2 py-1 rounded-full text-xs font-medium', order.statusClass]">
                {{ order.status }}
              </span>
            </td>
            <td class="px-4 py-2">{{ order.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'

const orders = [
  { id: 'PO1234', customer: 'Empresa Alpha', status: 'Pendente', value: 'R$1.200,00', statusClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' },
  { id: 'PO1235', customer: 'Tech Solutions', status: 'Processando', value: 'R$3.400,00', statusClass: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  { id: 'PO1236', customer: 'Inova Logística', status: 'Enviado', value: 'R$2.500,00', statusClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
  { id: 'PO1237', customer: 'LogiMax', status: 'Cancelado', value: 'R$980,00', statusClass: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' }
]
</script>

<style scoped>
</style>
