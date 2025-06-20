<template>
  <Card class="mt-6">
    <h3 class="text-sm font-medium text-gray-700 mb-2">Nova Mensagem</h3>
    <textarea
      v-model="mensagem"
      class="w-full h-28 border border-gray-300 rounded-lg p-2 text-sm"
      placeholder="Digite sua mensagem..."
    />
    <div class="text-right mt-2">
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded-lg text-sm">
        Enviar
      </button>
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Common/Card.vue'

const mensagem = ref('')
</script>

<style scoped>
</style>
