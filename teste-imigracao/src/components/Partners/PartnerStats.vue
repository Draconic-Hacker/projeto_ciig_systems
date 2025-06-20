<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <Card v-for="(stat, index) in stats" :key="index">
      <div class="flex items-center space-x-3">
        <div :class="[stat.iconBg, 'p-2 rounded-lg']">
          <component :is="stat.icon" class="w-6 h-6" />
        </div>
        <div>
          <h4 class="text-lg font-bold text-gray-800 dark:text-white">{{ stat.value }}</h4>
          <p class="text-sm text-gray-500 dark:text-gray-300">{{ stat.label }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { Users, UserCheck, Star, UserPlus } from 'lucide-vue-next'
import Card from '@/components/Common/Card.vue'

const stats = [
  { label: 'Parceiros Totais', value: 120, icon: Users, iconBg: 'bg-blue-100 dark:bg-blue-900/30' },
  { label: 'Ativos', value: 85, icon: UserCheck, iconBg: 'bg-green-100 dark:bg-green-900/30' },
  { label: 'Premium', value: 30, icon: Star, iconBg: 'bg-yellow-100 dark:bg-yellow-900/30' },
  { label: 'Novos', value: 5, icon: UserPlus, iconBg: 'bg-purple-100 dark:bg-purple-900/30' }
]
</script>

<style scoped>
</style>
