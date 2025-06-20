<template>
  <aside
    :class="['sidebar w-64 flex-shrink-0 bg-gradient-to-b from-[#1a3a6d] to-[#0f2952] dark:from-[#0f172a] dark:to-[#0c1322]', { hidden: isHidden }]"
  >
    <div class="flex items-center justify-center h-16 border-b border-gray-700">
      <button @click="RedirectHome">
        <h2 class="text-xl font-bold text-white">CIIG Global</h2>
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
            :class="['sidebar-link flex items-center px-4 py-3 rounded-lg mb-1', item.active ? 'bg-white/20 text-white active' : 'text-gray-300 hover:text-white']"
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
  { label: 'Dashboard', icon: Home, active: true },
  { label: 'Inventário', icon: Box },
  { label: 'Pedidos', icon: ShoppingBag },
  { label: 'Fornecedores', icon: Users },
  { label: 'Planejamento', icon: Calendar },
  { label: 'Relatórios', icon: BarChart2 },
  { label: 'Configurações', icon: Settings }
]

function RedirectHome(){
    router.push('/home')
}
function RedirectDashboard() {
  router.push('/dashboard')
}
function RedirectFornecedores() {
  router.push('/fornecedores')
}
function RedirectNotificacoes() {
  router.push('/notificacoes')
}

// Adiciona um método para lidar com o clique no menu
function handleMenuClick(label) {
  switch (label) {
    case 'Dashboard':
      RedirectDashboard();
      break;
    case 'Pedidos':
      router.push('/pedidos');
      break;
    case 'Fornecedores':
      RedirectFornecedores();
      break;
    default:
      // Adicione outros casos conforme necessário
      break;
  }
}
</script>

<style scoped>
.sidebar-link {
  transition: all 0.2s;
}
.sidebar-link:hover {
  transform: translateX(5px);
}
.sidebar-link.active {
  border-left: 4px solid #38bdf8;
}
</style>
