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
      <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Seleção de Fornecedores</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Escolha o fornecedor que deseja contatar:
      </p>

      <ul class="space-y-2">
        <li>
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
            Fornecedor 1 - Suporte Técnico
          </button>
        </li>
        <li>
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
            Fornecedor 2 - Atendimento Comercial
          </button>
        </li>
        <li>
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
            Fornecedor 3 - Financeiro
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Lógica de seleção pode vir depois se quiser
</script>

<style scoped>
/* Customizações extras se precisar */
</style>
