<template>
  <Card>
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Informações Profissionais</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Departamento</p>
        <p class="text-gray-800 dark:text-white">Logística</p>
      </div>
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Cargo</p>
        <p class="text-gray-800 dark:text-white">Analista de Suprimentos</p>
      </div>
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Data de Admissão</p>
        <p class="text-gray-800 dark:text-white">10/07/2015</p>
      </div>
      <div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Supervisor</p>
        <p class="text-gray-800 dark:text-white">Maria Souza</p>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
</script>

<style scoped>
</style>
