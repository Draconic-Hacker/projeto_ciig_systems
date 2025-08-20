<template>
  <!-- Toggle Button -->
  <ToggleSidebarButton 
    @toggle="toggleSidebar" 
    @open="openSidebar"
    :hoverOpen="true"
    class="fixed top-4 left-4 z-50"
  />

  <!-- Overlay -->
  <div
    v-if="isSidebarOpen"
    class="fixed inset-0 modal-overlay z-40 transition-opacity duration-normal"
    @click="closeSidebar"
  ></div>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed left-0 top-0 h-full w-64 transform transition-transform duration-300 z-50 bg-gradient-to-b from-[#1a3a6d] to-[#0f2952] dark:from-[#0f172a] dark:to-[#0c1322]',
      { '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }
    ]"
  >
    <div class="flex items-center justify-between h-16 border-b border-gray-700 px-4">
      <button @click="RedirectHome" class="flex items-center space-x-3">
        <img
          src="/ciig.png"
          alt="Logo"
          class="w-9 h-9 rounded-full object-cover"
        />
        <h2 class="text-xl font-bold text-white">CIIG SYSTEMS</h2>
      </button>
      <!-- Close Button -->
      <button @click="closeSidebar" class="p-2 rounded-md hover:bg-white/20 transition-colors">
        <font-awesome-icon :icon="['fas', 'x']" class="text-white"/>
      </button>
    </div>

    <div class="px-4 py-6">
      <div class="flex items-center mb-6">
        <div class="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">
          AG
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-white">Admin Gestor</p>
          <p class="text-xs text-gray-300">Administrador</p>
        </div>
      </div>

      <nav>
        <template v-for="(item, index) in menu" :key="index">
          <a
            href="#"
            :class="[
              'sidebar-link flex items-center px-4 py-3 rounded-lg mb-1 text-gray-300 hover:text-white hover:bg-white/20 hover:border-l-4 hover:border-sky-400',
              $route.path === item.route ? 'active' : ''
            ]"
            @click.prevent="handleMenuClick(item)"
          >
            <component :is="item.icon" class="w-5 h-5 mr-3" />
            {{ item.label }}
          </a>
        </template>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import ToggleSidebarButton from '@/components/layout/ToggleSidebarButton.vue'
import { Home, Box, ShoppingBag, Users, Calendar, BarChart2, Settings } from 'lucide-vue-next'

// Adicionando ícones FontAwesome
library.add(faBars, faX)

const router = useRouter()
const isSidebarOpen = ref(false)

const menu = [
  { label: 'Dashboard', icon: Home, route: '/dashboard' },
  { label: 'Inventário', icon: Box, route: '/inventario' },
  { label: 'Pedidos', icon: ShoppingBag, route: '/notificacoes' },
  { label: 'Vendedores', icon: Users, route: '/fornecedores' },
  { label: 'Análises', icon: Calendar, route: '/planejamento' },
  { label: 'Logística', icon: BarChart2, route: '/relatorios' },
  { label: 'Configurações', icon: Settings, route: '/configuracoes' }
]

function RedirectHome() {
  router.push('/home')
}

function handleMenuClick(item) {
  if (item.route) router.push(item.route)
  closeSidebar() // fecha sidebar ao clicar em item
}

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function openSidebar() {
  isSidebarOpen.value = true
}

function closeSidebar() {
  isSidebarOpen.value = false
}
</script>

<style scope>
.modal-overlay {
  background: rgba(0, 0, 0, 0.539); /* cinza escuro com 20% de opacidade */
}
</style>