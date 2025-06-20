<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
      <!-- Botão de fechar -->
      <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Conteúdo do Modal -->
      <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Chat com Atendente Humano</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Aqui você pode falar com um de nossos atendentes em tempo real.
      </p>

      <!-- Área de mensagens fake só pra visual -->
      <div class="border rounded-md p-3 mb-4 h-40 overflow-y-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
        <p><strong>Atendente:</strong> Olá! Em que posso ajudar?</p>
      </div>

      <!-- Campo de envio de mensagem -->
      <div class="flex">
        <input type="text" placeholder="Digite sua mensagem..." class="flex-grow p-2 rounded-l-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
        <button class="px-4 py-2 bg-primary-500 text-white rounded-r-md hover:bg-primary-600">
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Lógica real do chat viria depois se quiser implementar backend ou socket
</script>

<style scoped>
/* Personalização do modal se quiser */
</style>
