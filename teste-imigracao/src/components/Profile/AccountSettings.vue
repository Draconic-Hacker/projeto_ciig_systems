<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Configurações da Conta</h3>
    <ul class="space-y-2">
      <li class="flex justify-between items-center">
        <span class="text-gray-700 dark:text-gray-300">Notificações por Email</span>
        <input type="checkbox" v-model="emailNotifications" class="form-checkbox text-primary-500" />
      </li>
      <li class="flex justify-between items-center">
        <span class="text-gray-700 dark:text-gray-300">Autenticação em Duas Etapas</span>
        <input type="checkbox" v-model="twoFactor" class="form-checkbox text-primary-500" />
      </li>
    </ul>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Common/Card.vue'

const emailNotifications = ref(true)
const twoFactor = ref(false)
</script>

<style scoped>
</style>
