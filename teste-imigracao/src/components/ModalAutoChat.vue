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
      <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Chat Automático</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Este é o nosso assistente virtual. Envie suas perguntas e receba respostas automáticas.
      </p>

      <!-- Exemplo de FAQ dentro do modal -->
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">Perguntas Frequentes</h3>
        <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
          <li>Como posso acessar meu perfil?</li>
          <li>Qual o horário de atendimento?</li>
          <li>Posso falar com um humano?</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Nenhum script aqui, o @click="$emit('close')" já cuida do fechamento
</script>

<style scoped>
/* Animações ou estilos extras pros modais, se quiser */
</style>
