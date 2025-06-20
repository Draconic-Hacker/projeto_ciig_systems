<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Perguntas Frequentes</h3>
    <div class="space-y-4">
      <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 dark:border-gray-700 pb-4">
        <button @click="toggle(index)"
                class="flex justify-between items-center w-full text-left font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 focus:outline-none">
          <span>{{ faq.question }}</span>
          <svg :class="['h-5 w-5 text-gray-500 transition-transform duration-200', { 'rotate-180': faq.open }]"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="faq.open" class="mt-2 text-gray-600 dark:text-gray-400">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const faqs = reactive([
  {
    question: 'Como posso atualizar meus dados cadastrais?',
    answer: 'Acesse "Minha Conta" e clique em "Editar Perfil".',
    open: false
  },
  {
    question: 'Como solicitar um novo fornecedor no sistema?',
    answer: 'Vá em "Fornecedores" > "Solicitar Novo Fornecedor".',
    open: false
  },
  {
    question: 'Esqueci minha senha, como recuperá-la?',
    answer: 'Clique em "Esqueci minha senha" na tela de login.',
    open: false
  },
  {
    question: 'Como gerar relatórios personalizados?',
    answer: 'Acesse "Relatórios" > "Novo Relatório" e defina os filtros.',
    open: false
  }
])

const toggle = (index) => {
  faqs[index].open = !faqs[index].open
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
