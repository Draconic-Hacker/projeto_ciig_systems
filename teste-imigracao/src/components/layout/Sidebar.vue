<template>
  <aside
    :class="['sidebar w-64 flex-shrink-0 bg-gradient-to-b from-[#1a3a6d] to-[#0f2952] dark:from-[#0f172a] dark:to-[#0c1322]', { hidden: isHidden }]"
  >
    <div class="flex items-center justify-center h-16 border-b border-gray-700">
      <button @click="RedirectHome" class="flex items-center space-x-3">
        <img
          src="/ciig.png"
          alt="Foto de Perfil"
          class="w-9 h-9 rounded-full object-cover"
        />
        <h2 class="text-xl font-bold text-white">CIIG SYSTEMS</h2>
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
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { Home, Box, ShoppingBag, Users, Calendar, BarChart2, Settings } from 'lucide-vue-next'

const router = useRouter();
const isHidden = ref(false)

const menu = [
  { label: 'Dashboard', icon: Home, route: '/dashboard' },
  { label: 'Inventário', icon: Box, route: '/inventario' },
  { label: 'Pedidos', icon: ShoppingBag, route: '/notificacoes' },
  { label: 'Fornecedores', icon: Users, route: '/fornecedores' },
  { label: 'Planejamento', icon: Calendar, route: '/planejamento' },
  { label: 'Relatórios', icon: BarChart2, route: '/relatorios' },
  { label: 'Configurações', icon: Settings, route: '/configuracoes' }
]

function RedirectHome(){
  router.push('/home')
}

// Adiciona um método para lidar com o clique no menu
function handleMenuClick(item) {
  if (item.route) {
    router.push(item.route)
  }
}
</script>

<style scoped>
.sidebar-link {
  transition: all 0.2s;
}
.sidebar-link:hover {
  transform: translateX(5px);
  border-left: 4px solid #38bdf8;
  background: rgba(255,255,255,0.12);
  color: #fff;
}
.sidebar-link.active {
  border-left: 4px solid #38bdf8;
}
</style>
