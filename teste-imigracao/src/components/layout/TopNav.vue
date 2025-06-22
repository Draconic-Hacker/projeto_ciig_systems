<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm z-10">
    <div class="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <button @click="$emit('toggleSidebar')" class="md:hidden mr-4 text-gray-600 dark:text-gray-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div class="relative">
          <input
            type="text"
            placeholder="Pesquisar..."
            class="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <ThemeToggle />
        <div class="relative">
          <button data-testid="notification-icon" @click="RedirectNotificacoes" class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white relative">
            🔔
            <span class="notification-badge bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute -top-2 -right-2">3</span>
          </button>
        </div>
        <div class="relative">
          <button class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            ✉️
            <span class="notification-badge bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute -top-2 -right-2">5</span>
          </button>
        </div>
        <div class="border-l pl-4 border-gray-300 dark:border-gray-600 flex items-center space-x-2">
          <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">AG</div>
          <button @click="RedirectPerfil">
            <span data-testid="profile-icon" class="text-sm font-medium text-gray-700 dark:text-gray-300">Admin Gestor</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ThemeToggle from '@/components/Common/ThemeToggle.vue'
const router = useRouter();

function RedirectNotificacoes(){
    router.push('/notificacoes')
}

function RedirectPerfil(){
    router.push('/perfil')
}
</script>

<style scoped>
.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
}
</style>
