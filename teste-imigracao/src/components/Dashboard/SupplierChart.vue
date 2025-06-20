<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Desempenho de Fornecedores</h3>
    <canvas ref="chartCanvas"></canvas>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)
let chartInstance = null

onMounted(() => {
  chartInstance = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C', 'Fornecedor D'],
      datasets: [{
        label: 'Pedidos Entregues',
        data: [80, 65, 90, 70],
        backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444']
      }]
    },
    options: {
      responsive: true,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  })
})

onUnmounted(() => {
  if (chartInstance) chartInstance.destroy()
})
</script>

<style scoped>
</style>
