<template>
  <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <button @click="RedirectHome">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M10 4a1 1 0 100 2 1 1 0 000-2zm0 7a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-3a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
          </svg>
          <h1 class="text-xl font-bold text-primary-600 dark:text-primary-400">CIIG System</h1>
        </button>
      </div>

      <div class="flex items-center space-x-4">
        <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <!-- Sun Icon -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon Icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
            <span class="font-medium text-sm">US</span>
          </div>
          <span class="hidden md:block">Usuário</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

function RedirectHome(){
    router.push('/home')
}

import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  isDark.value =
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<style scoped>
</style>
