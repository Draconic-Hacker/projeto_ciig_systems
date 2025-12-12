<template>
  <div v-if="visivel" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <Card class="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center border-b pb-2 mb-4">
        <h2 class="text-lg font-semibold">Detalhes da Notificação</h2>
        <button @click="$emit('fechar')" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <slot />
    </Card>
  </div>
</template>

<script setup>
defineProps({
  visivel: Boolean
})
defineEmits(['fechar'])
import Card from '@/components/Common/Card.vue'
</script>

<style scoped>
</style>
