<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Atividade Recente</h3>
    <ul class="space-y-3">
      <li v-for="(activity, index) in activities" :key="index" class="text-sm text-gray-700 dark:text-gray-300">
        <span class="font-medium">{{ activity.date }}:</span> {{ activity.action }}
      </li>
    </ul>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'

const activities = [
  { date: '20/06/2025', action: 'Atualizou informações pessoais' },
  { date: '18/06/2025', action: 'Alterou senha de acesso' },
  { date: '15/06/2025', action: 'Solicitou suporte técnico' }
]
</script>

<style scoped>
</style>
