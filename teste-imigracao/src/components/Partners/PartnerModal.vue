<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Detalhes do Parceiro</h3>
      <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>Nome:</strong> {{ partner.name }}</p>
        <p><strong>Status:</strong> {{ partner.status }}</p>
        <p><strong>Tipo:</strong> {{ partner.type }}</p>
        <p><strong>Contato:</strong> contato@{{ partner.name.replaceAll(' ', '').toLowerCase() }}.com</p>
        <p><strong>Histórico:</strong> Última atualização há 3 dias.</p>
      </div>
      <div class="flex justify-end mt-4">
        <button @click="$emit('close')" class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded">
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  partner: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])
</script>

<style scoped>
</style>
