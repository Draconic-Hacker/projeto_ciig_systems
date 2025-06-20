<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Informações Pessoais</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Email</p>
        <p class="text-gray-800 dark:text-white">joao.silva@email.com</p>
      </div>
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Telefone</p>
        <p class="text-gray-800 dark:text-white">(11) 98765-4321</p>
      </div>
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Endereço</p>
        <p class="text-gray-800 dark:text-white">Rua Exemplo, 123 - São Paulo/SP</p>
      </div>
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Data de Nascimento</p>
        <p class="text-gray-800 dark:text-white">15/03/1990</p>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
</script>

<style scoped>
</style>
