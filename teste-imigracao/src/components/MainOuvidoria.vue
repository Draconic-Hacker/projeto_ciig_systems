<template>
  <main class="flex-grow container mx-auto px-4 py-8">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Ouvidoria CIIG System</h2>
      <p class="text-gray-600 dark:text-gray-300">
        Central de atendimento e suporte para nossos usuários.
      </p>
    </div>

    <!-- Service Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <!-- Chat Automático -->
      <div class="card-hover bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <div class="flex items-center mb-4">
          <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <!-- Ícone -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 class="ml-3 text-lg font-semibold text-gray-800 dark:text-white">Chat Automático</h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Tire suas dúvidas rapidamente com nosso assistente virtual.</p>
        <button @click="openAutoChat" class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
        Iniciar Chat
        </button>

      </div>

      <!-- Chat com Funcionário -->
      <div class="card-hover bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <div class="flex items-center mb-4">
          <div class="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="ml-3 text-lg font-semibold text-gray-800 dark:text-white">Chat com Funcionário</h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Fale diretamente com um de nossos atendentes especializados.</p>
        <button @click="openHumanChat" class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
        Falar com Atendente
        </button>

      </div>

      <!-- Fornecedores -->
      <div class="card-hover bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
        <div class="flex items-center mb-4">
          <div class="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="ml-3 text-lg font-semibold text-gray-800 dark:text-white">Fornecedores</h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Acesse diretamente o suporte do fornecedor desejado.</p>
        <button @click="openSupplier" class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
        Selecionar Fornecedor
        </button>


      </div>

      <!-- Apoio ao Servidor -->
      <div class="card-hover bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-amber-500">
        <div class="flex items-center mb-4">
          <div class="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-500 dark:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="ml-3 text-lg font-semibold text-gray-800 dark:text-white">Apoio ao Servidor</h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Suporte técnico para funcionários do sistema CIIG.</p>
        <button id="open-employee-support" class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
          Acessar Suporte
        </button>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Perguntas Frequentes</h3>

      <div class="space-y-4">
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <button class="faq-toggle flex justify-between items-center w-full text-left font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
            <span>Como posso atualizar meus dados cadastrais?</span>
            <svg class="faq-icon h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="faq-content hidden mt-2 text-gray-600 dark:text-gray-400">
            Para atualizar seus dados cadastrais, acesse o menu "Minha Conta" no painel principal e selecione a opção "Editar Perfil". Lá você poderá atualizar todas as suas informações.
          </div>
        </div>

        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <button class="faq-toggle flex justify-between items-center w-full text-left font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
            <span>Como solicitar um novo fornecedor no sistema?</span>
            <svg class="faq-icon h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="faq-content hidden mt-2 text-gray-600 dark:text-gray-400">
            Para solicitar a inclusão de um novo fornecedor, acesse o menu "Fornecedores" e clique em "Solicitar Novo Fornecedor". Preencha o formulário com os dados necessários e nossa equipe analisará sua solicitação em até 48 horas úteis.
          </div>
        </div>

        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <button class="faq-toggle flex justify-between items-center w-full text-left font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
            <span>Esqueci minha senha, como recuperá-la?</span>
            <svg class="faq-icon h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="faq-content hidden mt-2 text-gray-600 dark:text-gray-400">
            Na tela de login, clique em "Esqueci minha senha" e siga as instruções para redefinir sua senha. Um link de recuperação será enviado para o e-mail cadastrado no sistema.
          </div>
        </div>

        <div class="pb-2">
          <button class="faq-toggle flex justify-between items-center w-full text-left font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none">
            <span>Como gerar relatórios personalizados?</span>
            <svg class="faq-icon h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="faq-content hidden mt-2 text-gray-600 dark:text-gray-400">
            Acesse o menu "Relatórios" no painel principal, selecione "Novo Relatório" e escolha os filtros e parâmetros desejados. Você pode salvar modelos de relatórios para uso futuro e exportar em diversos formatos como PDF, Excel ou CSV.
          </div>
        </div>
      </div>
    </div>
  </main>

  <ModalAutoChat v-if="showAutoChat" @close="showAutoChat = false" />
  <ModalHumanChat v-if="showHumanChat" @close="showHumanChat = false" />
  <ModalSupplier v-if="showSupplier" @close="showSupplier = false" />
 

</template>

<script setup>
import ModalAutoChat from './ModalAutoChat.vue'
import ModalHumanChat from './ModalHumanChat.vue'
import ModalSupplier from './ModalSupplier.vue'


import { ref } from 'vue'

const showAutoChat = ref(false)
const showHumanChat = ref(false)
const showSupplier = ref(false)

function openAutoChat() {
  showAutoChat.value = true
}

function openHumanChat() {
  showHumanChat.value = true
}

function openSupplier() {
  showSupplier.value = true
}

</script>


<style scoped>
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.dark .card-hover:hover {
  box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.05), 0 10px 10px -5px rgba(255, 255, 255, 0.02);
}
</style>
