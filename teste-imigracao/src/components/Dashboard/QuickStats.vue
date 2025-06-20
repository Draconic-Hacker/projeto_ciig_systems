<template>
  <Card>

    <div class="bg-white dark:bg-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div
      v-for="(card, index) in stats"
      :key="index"
      class="card bg-white dark:bg-gray-800 rounded-xl shadow p-6"
    >
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-gray-500 dark:text-gray-400 text-sm font-medium">{{ card.title }}</h3>
        <div :class="['p-2 rounded-lg', card.bgColor]">
          <component :is="card.icon" class="w-6 h-6" />
        </div>
      </div>
      <div class="flex items-baseline">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white">{{ card.value }}</h2>
        <span :class="['ml-2 text-sm font-medium flex items-center', card.changeColor]">
          <component :is="card.arrow" class="w-3 h-3 mr-1" />
          {{ card.change }}
        </span>
      </div>
      <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">{{ card.subText }}</p>
    </div>
  </div>
</Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
import { TrendingUp, TrendingDown, Package, BarChart, Truck, DollarSign } from 'lucide-vue-next'

const stats = [
  {
    title: 'Pedidos Pendentes',
    value: '42',
    change: '12%',
    subText: 'Desde o último mês',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    changeColor: 'text-green-500',
    arrow: TrendingUp,
    icon: Package
  },
  {
    title: 'Nível de Estoque',
    value: '78%',
    change: '5%',
    subText: 'Capacidade total',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    changeColor: 'text-red-500',
    arrow: TrendingDown,
    icon: BarChart
  },
  {
    title: 'Entregas no Prazo',
    value: '94%',
    change: '3%',
    subText: 'Últimos 30 dias',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    changeColor: 'text-green-500',
    arrow: TrendingUp,
    icon: Truck
  },
  {
    title: 'Custo Logístico',
    value: 'R$87K',
    change: '8%',
    subText: 'Comparado ao mês anterior',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    changeColor: 'text-red-500',
    arrow: TrendingDown,
    icon: DollarSign
  }
]
</script>

<style scoped>
.card {
  transition: all 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
