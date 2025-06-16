<template>
<div class="ouvidoria-theme">

<div class="min-h-screen flex flex-col">
    <!-- Header -->
  <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M10 4a1 1 0 100 2 1 1 0 000-2zm0 7a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-3a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
        </svg>
        <h1 class="text-xl font-bold text-primary-600 dark:text-primary-400">CIIG System</h1>
      </div>
      <div class="flex items-center space-x-4">
        <button
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          @click="toggleTheme"
          :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
        >
          <!-- Sun icon (aparece no modo escuro) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="isDark">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon icon (aparece no modo claro) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <div class="relative">
          <button class="flex items-center space-x-2 focus:outline-none">
            <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
              <span class="font-medium text-sm">US</span>
            </div>
            <span class="hidden md:block">Usuário</span>
          </button>
        </div>
      </div>
    </div>
  </header>


    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="mb-8">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Ouvidoria CIIG System</h2>
    <p class="text-gray-600 dark:text-gray-300">Central de atendimento e suporte para nossos usuários.</p>
  </div>

  <!-- Service Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    <!-- Automated Chat -->
    <div class="card-hover bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div class="flex items-center mb-4">
        <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <h3 class="ml-3 text-lg font-semibold text-gray-800 dark:text-white">Chat Automático</h3>
      </div>
      <p class="text-gray-600 dark:text-gray-300 mb-4">Tire suas dúvidas rapidamente com nosso assistente virtual.</p>
      <button
        class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        @click="openModal('auto-chat')"
      >
        Iniciar Chat
      </button>
    </div>

    <!-- Human Chat -->
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
      <button
        class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        @click="openModal('human-chat')"
      >
        Falar com Atendente
      </button>
    </div>
  </div>

       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    <!-- Supplier Redirect -->
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
      <button
        class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        @click="openModal('supplier')"
      >
        Selecionar Fornecedor
      </button>
    </div>

    <!-- Employee Support -->
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
      <button
        class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        @click="openModal('employee-support')"
      >
        Acessar Suporte
      </button>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
    <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Perguntas Frequentes</h3>
    <div class="space-y-4">
      <div
      v-for="(faq, idx) in faqList"
      :key="idx"
      class="border-b border-gray-200 dark:border-gray-700 pb-4"
    >
      <button
        class="faq-toggle flex justify-between items-center w-full text-left font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
        @click="toggleFaq(idx)"
      >
        <span>{{ faq.q }}</span>
        <svg
          class="faq-icon h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200"
          :class="{ 'rotate-180': faqOpen[idx] }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-show="faqOpen[idx]" class="faq-content mt-2 text-gray-600 dark:text-gray-400">
        {{ faq.a }}
      </div>
    </div>
   </div>
   </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 shadow-inner py-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <p class="text-sm text-gray-600 dark:text-gray-400">&copy; 2023 CIIG System. Todos os direitos reservados.</p>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
          <span class="sr-only">Política de Privacidade</span>
          <span>Política de Privacidade</span>
        </a>
        <a href="#" class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
          <span class="sr-only">Termos de Uso</span>
          <span>Termos de Uso</span>
        </a>
        <a href="#" class="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
          <span class="sr-only">Contato</span>
          <span>Contato</span>
        </a>
      </div>
    </div>
  </div>
</footer>
</div>

<!-- Automated Chat Modal -->
<div
  v-if="modals['auto-chat']"
  class="fixed inset-0 z-50 overflow-y-auto"
>
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
    </div>
    <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Chat Automático
              <button class="close-modal ml-auto focus:outline-none" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </h3>
            <div class="mt-4">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-80 overflow-y-auto flex flex-col space-y-3" id="auto-chat-messages">
                <div
                  v-for="(msg, i) in autoChatMessages"
                  :key="i"
                  class="chat-message flex items-start"
                  :class="msg.type === 'user' ? 'justify-end' : ''"
                >
                  <template v-if="msg.type === 'user'">
                    <div class="flex-grow"></div>
                    <div class="bg-primary-100 dark:bg-primary-900 rounded-lg px-4 py-2 max-w-[80%] shadow">
                      <p class="text-gray-800 dark:text-gray-200">{{ msg.text }}</p>
                    </div>
                    <div class="flex-shrink-0 ml-3">
                      <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div class="flex-shrink-0 mr-3">
                      <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                      </div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 max-w-[80%] shadow">
                      <p class="text-gray-800 dark:text-gray-200">{{ msg.text }}</p>
                    </div>
                  </template>
                </div>
              </div>
              <div class="mt-4 flex">
                <input
                  type="text"
                  class="flex-grow rounded-l-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                  placeholder="Digite sua mensagem..."
                  v-model="autoChatInput"
                  @keyup.enter="sendAutoMessage()"
                >
                <button
                  class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  @click="sendAutoMessage()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
              <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Sugestões:
                <template v-for="(suggestion, i) in autoSuggestions" :key="i">
                  <button
                    class="suggestion-btn text-primary-500 hover:underline"
                    @click="sendAutoMessage(suggestion)"
                  >{{ suggestion }}</button>
                  <span v-if="i < autoSuggestions.length - 1"> · </span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Human Chat Modal -->
<div
  v-if="modals['human-chat']"
  class="fixed inset-0 z-50 overflow-y-auto"
 >
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
    </div>
    <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Chat com Atendente
              <button class="close-modal ml-auto focus:outline-none" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </h3>
            <div class="mt-4">
              <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-80 overflow-y-auto flex flex-col space-y-3" id="human-chat-messages">
                <div
                  v-for="(msg, i) in humanChatMessages"
                  :key="i"
                  class="chat-message flex items-start"
                  :class="msg.type === 'user' ? 'justify-end' : ''"
                >
                  <template v-if="msg.type === 'user'">
                    <div class="flex-grow"></div>
                    <div class="bg-primary-100 dark:bg-primary-900 rounded-lg px-4 py-2 max-w-[80%] shadow">
                      <p class="text-gray-800 dark:text-gray-200">{{ msg.text }}</p>
                    </div>
                    <div class="flex-shrink-0 ml-3">
                      <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="msg.type === 'human'">
                    <div class="flex-shrink-0 mr-3">
                      <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 max-w-[80%] shadow">
                      <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">{{ msg.name }}</p>
                      <p class="text-gray-800 dark:text-gray-200">{{ msg.text }}</p>
                    </div>
                  </template>
                  <template v-else-if="msg.type === 'typing'">
                    <div class="flex-shrink-0 mr-3">
                      <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 max-w-[80%] shadow">
                      <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Ana Silva - Atendente</p>
                      <p class="text-gray-800 dark:text-gray-200">
                        <span class="inline-flex">
                          <span class="typing-dot">.</span>
                          <span class="typing-dot">.</span>
                          <span class="typing-dot">.</span>
                        </span>
                      </p>
                    </div>
                  </template>
                </div>
              </div>
              <div class="mt-4 flex">
                <input
                  type="text"
                  class="flex-grow rounded-l-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                  placeholder="Digite sua mensagem..."
                  v-model="humanChatInput"
                  @keyup.enter="sendHumanMessage"
                >
                <button
                  class="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  @click="sendHumanMessage"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
              <div class="mt-2 flex items-center justify-between">
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  <span class="inline-flex items-center">
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    Atendente online
                  </span>
                </div>
                <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Supplier Modal -->
<div
  v-if="modals['supplier']"
  class="fixed inset-0 z-50 overflow-y-auto"
>
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
    </div>
    <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Selecionar Fornecedor
              <button class="close-modal ml-auto focus:outline-none" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </h3>
            <div class="mt-4">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Buscar fornecedor:</label>
                <input
                  type="text"
                  class="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                  placeholder="Digite o nome do fornecedor..."
                  v-model="supplierSearch"
                >
              </div>
              <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-64 overflow-y-auto">
                <div class="space-y-2">
                  <div
                    v-for="(supplier, i) in filteredSuppliers"
                    :key="i"
                    class="supplier-item bg-white dark:bg-gray-800 rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer transition-colors duration-150"
                    @click="selectSupplier(supplier)"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                        :class="{
                          'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300': supplier.color === 'blue',
                          'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300': supplier.color === 'green',
                          'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300': supplier.color === 'amber',
                          'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300': supplier.color === 'purple',
                          'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300': supplier.color === 'red'
                        }"
                      >
                        <span class="font-bold">{{ supplier.initials }}</span>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800 dark:text-white">{{ supplier.name }}</h4>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ supplier.category }}</p>
                      </div>
                    </div>
                  </div>
                  <div v-if="filteredSuppliers.length === 0" class="text-center text-gray-500 dark:text-gray-400 py-8">
                    Nenhum fornecedor encontrado.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm">
          Acessar Suporte
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm close-modal"
          @click="closeModal"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
</div>

    <!-- Employee Support Modal -->
<div
  v-if="modals['employee-support']"
  class="fixed inset-0 z-50 overflow-y-auto"
>
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
    </div>
    <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Apoio ao Servidor
              <button class="close-modal ml-auto focus:outline-none" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </h3>
            <div class="mt-4">
              <div class="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm text-amber-800 dark:text-amber-200">
                      Esta área é exclusiva para funcionários do CIIG System. Por favor, informe seu ID de funcionário.
                    </p>
                  </div>
                </div>
              </div>
              <form @submit.prevent="submitSupport">
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ID de Funcionário:</label>
                  <input
                    type="text"
                    class="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    placeholder="Ex: CIIG-12345"
                    v-model="employeeId"
                  >
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categoria:</label>
                  <select
                    class="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    v-model="supportCategory"
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="technical">Suporte Técnico</option>
                    <option value="access">Problemas de Acesso</option>
                    <option value="training">Treinamento</option>
                    <option value="suggestion">Sugestão de Melhoria</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prioridade:</label>
                  <div class="flex space-x-4">
                    <label class="inline-flex items-center">
                      <input type="radio" name="priority" value="low" class="text-primary-500 focus:ring-primary-500" v-model="supportPriority">
                      <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Baixa</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input type="radio" name="priority" value="medium" class="text-primary-500 focus:ring-primary-500" v-model="supportPriority">
                      <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Média</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input type="radio" name="priority" value="high" class="text-primary-500 focus:ring-primary-500" v-model="supportPriority">
                      <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Alta</span>
                    </label>
                  </div>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Descrição do problema:</label>
                  <textarea
                    rows="4"
                    class="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    placeholder="Descreva detalhadamente o problema que está enfrentando..."
                    v-model="supportDescription"
                  ></textarea>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Anexar arquivos:</label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <div class="flex text-sm text-gray-600 dark:text-gray-400">
                        <label class="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-primary-500 hover:text-primary-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                          <span>Carregar arquivo</span>
                          <input
                            name="file-upload"
                            type="file"
                            class="sr-only"
                            @change="onFileChange"
                          >
                        </label>
                        <p class="pl-1">ou arraste e solte</p>
                      </div>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, PDF até 10MB
                      </p>
                      <div v-if="fileName" class="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        Arquivo selecionado: {{ fileName }}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
          @click="submitSupport"
        >
          Enviar Solicitação
        </button>
        <button
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm close-modal"
          @click="closeModal"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
</div>

   <!-- Success Modal -->
<div
  v-if="modals['success']"
  class="fixed inset-0 z-50 overflow-y-auto"
>
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
    </div>
    <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 sm:mx-0 sm:h-10 sm:w-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              {{ successTitle }}
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ successMessage }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm close-success"
          @click="closeSuccess"
        >
          Entendi
        </button>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';

// Tema escuro
const isDark = ref(false);
const html = document.documentElement;

function setTheme(dark) {
  isDark.value = dark;
  if (dark) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

onMounted(() => {
  if (
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    setTheme(true);
  } else {
    setTheme(false);
  }
});

// Alternar tema
function toggleTheme() {
  setTheme(!isDark.value);
}

// FAQ (Perguntas Frequentes)
const faqOpen = ref([false, false, false, false]);
function toggleFaq(idx) {
  faqOpen.value[idx] = !faqOpen.value[idx];
}

// Controle de modais
const modals = reactive({
  'auto-chat': false,
  'human-chat': false,
  'supplier': false,
  'employee-support': false,
  'success': false
});

function openModal(key) {
  Object.keys(modals).forEach(k => (modals[k] = false));
  modals[key] = true;
}
function closeModal() {
  Object.keys(modals).forEach(k => (modals[k] = false));
}
function closeSuccess() {
  modals['success'] = false;
}

// Chat Automático
const autoChatMessages = ref([
  {
    type: 'bot',
    text: 'Olá! Sou o assistente virtual do CIIG System. Como posso ajudar você hoje?'
  }
]);
const autoChatInput = ref('');

function sendAutoMessage(suggestion = null) {
  const message = suggestion || autoChatInput.value.trim();
  if (message) {
    autoChatMessages.value.push({ type: 'user', text: message });
    autoChatInput.value = '';
    nextTick(() => scrollToBottom('auto-chat-messages'));

    setTimeout(() => {
      let response;
      if (message.toLowerCase().includes('login') || message.toLowerCase().includes('senha')) {
        response = "Para problemas de login, verifique se suas credenciais estão corretas. Se persistir, você pode redefinir sua senha na tela de login ou entrar em contato com o suporte técnico.";
      } else if (message.toLowerCase().includes('cadastrar') || message.toLowerCase().includes('produto')) {
        response = "Para cadastrar um novo produto, acesse o menu 'Produtos' > 'Novo Produto' e preencha todos os campos obrigatórios. Não se esqueça de incluir o código SKU e a categoria correta.";
      } else if (message.toLowerCase().includes('relatório') || message.toLowerCase().includes('relatorio')) {
        response = "Você pode gerar relatórios personalizados no menu 'Relatórios'. Selecione o tipo de relatório, o período desejado e os filtros específicos. Os relatórios podem ser exportados em PDF, Excel ou CSV.";
      } else {
        response = "Obrigado pelo seu contato. Para melhor atendê-lo, poderia fornecer mais detalhes sobre sua dúvida? Ou se preferir, você pode falar diretamente com um de nossos atendentes.";
      }
      autoChatMessages.value.push({ type: 'bot', text: response });
      nextTick(() => scrollToBottom('auto-chat-messages'));
    }, 800);
  }
}

// Chat Humano
const humanChatMessages = ref([
  {
    type: 'human',
    text: 'Olá! Sou a Ana, atendente do CIIG System. Como posso ajudar você hoje?',
    name: 'Ana Silva - Atendente'
  }
]);
const humanChatInput = ref('');

function sendHumanMessage() {
  const message = humanChatInput.value.trim();
  if (message) {
    humanChatMessages.value.push({ type: 'user', text: message });
    humanChatInput.value = '';
    nextTick(() => scrollToBottom('human-chat-messages'));

    // Simula indicador de digitação
    const typing = { type: 'typing' };
    humanChatMessages.value.push(typing);

    setTimeout(() => {
      humanChatMessages.value.pop(); // remove typing
      let response;
      if (/(olá|oi|bom dia|boa tarde)/i.test(message)) {
        response = "Olá! É um prazer atendê-lo. Como posso ajudar você hoje com o CIIG System?";
      } else if (/(problema|erro|bug)/i.test(message)) {
        response = "Sinto muito pelo inconveniente. Poderia me fornecer mais detalhes sobre o problema que está enfrentando? Se possível, informe o módulo do sistema e os passos para reproduzir o erro.";
      } else if (/(treinamento|aprender|tutorial)/i.test(message)) {
        response = "Temos diversos materiais de treinamento disponíveis. Posso enviar tutoriais em PDF, vídeos explicativos ou agendar uma sessão de treinamento personalizada com nossa equipe. O que seria melhor para você?";
      } else {
        response = "Obrigada por sua mensagem. Estou analisando sua solicitação e vou ajudá-lo da melhor forma possível. Poderia me fornecer mais informações para que eu possa direcionar seu atendimento corretamente?";
      }
      humanChatMessages.value.push({
        type: 'human',
        text: response,
        name: 'Ana Silva - Atendente'
      });
      nextTick(() => scrollToBottom('human-chat-messages'));
    }, 1500);
  }
}

// Scroll para o fim do chat
function scrollToBottom(id) {
  const el = document.getElementById(id);
  if (el) el.scrollTop = el.scrollHeight;
}

// Sugestões de chat automático
const autoSuggestions = [
  'Problemas com login',
  'Como cadastrar produto',
  'Relatórios'
];

// Supplier search/filter
const supplierSearch = ref('');
const suppliers = ref([
  { initials: 'TS', name: 'TechSupply Ltda.', category: 'Equipamentos de TI', color: 'blue' },
  { initials: 'EM', name: 'EcoMateriais S.A.', category: 'Materiais Sustentáveis', color: 'green' },
  { initials: 'GL', name: 'Global Logistics', category: 'Serviços de Logística', color: 'amber' },
  { initials: 'IS', name: 'InnoSoft', category: 'Soluções de Software', color: 'purple' },
  { initials: 'SM', name: 'SupplyMax', category: 'Material de Escritório', color: 'red' }
]);
const filteredSuppliers = computed(() => {
  const term = supplierSearch.value.toLowerCase();
  return suppliers.value.filter(s =>
    s.name.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
  );
});
function selectSupplier(supplier) {
  successTitle.value = 'Redirecionando';
  successMessage.value = `Você será redirecionado para o suporte da ${supplier.name} em instantes.`;
  openModal('success');
}

// Employee support form
const employeeId = ref('');
const supportCategory = ref('');
const supportPriority = ref('medium');
const supportDescription = ref('');
const fileName = ref('');
const successTitle = ref('Solicitação Enviada');
const successMessage = ref('Sua solicitação foi enviada com sucesso. Nossa equipe entrará em contato em breve.');

function submitSupport() {
  if (employeeId.value && supportCategory.value && supportDescription.value) {
    successTitle.value = 'Solicitação Enviada';
    successMessage.value = 'Sua solicitação de suporte foi enviada com sucesso. Nossa equipe técnica entrará em contato em breve.';
    openModal('success');
    // Reset form
    employeeId.value = '';
    supportCategory.value = '';
    supportPriority.value = 'medium';
    supportDescription.value = '';
    fileName.value = '';
  } else {
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
}

// File upload preview
function onFileChange(e) {
  fileName.value = e.target.files[0]?.name || '';
}

const faqList = [
  {
    q: 'Como posso atualizar meus dados cadastrais?',
    a: 'Para atualizar seus dados cadastrais, acesse o menu "Minha Conta" no painel principal e selecione a opção "Editar Perfil". Lá você poderá atualizar todas as suas informações.'
  },
  {
    q: 'Como solicitar um novo fornecedor no sistema?',
    a: 'Para solicitar a inclusão de um novo fornecedor, acesse o menu "Fornecedores" e clique em "Solicitar Novo Fornecedor". Preencha o formulário com os dados necessários e nossa equipe analisará sua solicitação em até 48 horas úteis.'
  },
  {
    q: 'Esqueci minha senha, como recuperá-la?',
    a: 'Na tela de login, clique em "Esqueci minha senha" e siga as instruções para redefinir sua senha. Um link de recuperação será enviado para o e-mail cadastrado no sistema.'
  },
  {
    q: 'Como gerar relatórios personalizados?',
    a: 'Acesse o menu "Relatórios" no painel principal, selecione "Novo Relatório" e escolha os filtros e parâmetros desejados. Você pode salvar modelos de relatórios para uso futuro e exportar em diversos formatos como PDF, Excel ou CSV.'
  }
];

// Exporte as funções e variáveis que precisar usar no template!
</script>

<style scoped>
.chat-message {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

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

.ouvidoria-theme{
    --primary-50: #e6f0ff;
    --primary-100: #b3d1ff;
    --primary-200: #80b3ff;
    --primary-300: #4d94ff;
    --primary-400: #1a75ff;
    --primary-500: #0066ff;
    --primary-600: #0052cc;
    --primary-700: #003d99;
    --primary-800: #002966;
    --primary-900: #001433;
}

.dark .ouvidoria-theme{
    --primary-50: #1a2233;
  --primary-100: #223366;
  --primary-200: #335599;
  --primary-300: #4466bb;
  --primary-400: #5577cc;
  --primary-500: #6699ff;
  --primary-600: #80b3ff;
  --primary-700: #99ccff;
  --primary-800: #b3d9ff;
  --primary-900: #e6f0ff;
}
</style>