<template>
  <Card>
    <div class="flex items-center space-x-4">
      <img
        src="/ciig.png"
        alt="Foto de Perfil"
        class="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">João Silva</h2>
        <p class="text-gray-600 dark:text-gray-400">Analista de Logística</p>
      </div>
      <div class="ml-auto">
        <button
          @click="$emit('editProfile')"
          class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded"
        >
          Editar Perfil
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'

defineEmits(['editProfile'])
</script>

<style scoped>
</style>
