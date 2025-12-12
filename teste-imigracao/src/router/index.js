import { createRouter, createWebHistory } from 'vue-router'
import HomeMenu from '@/views/TelaHome.vue'
import GestaoDeMercado from '@/views/GestaoDeMercado.vue'
import TelaDashboard from '@/views/TelaDashboard.vue'
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaFornecedores from '@/views/TelaFornecedores.vue'
import TelaLogin from '@/views/TelaLogin.vue'
import TelaNotificacoes from '@/views/TelaNotificacoes.vue'
import TelaOuvidoria from '@/views/TelaOuvidoria.vue'
import TelaPerfil from '@/views/TelaPerfil.vue'
// import Menutoggle from '@/views/MenuCircleRotate.vue'

const routes = [
  { path: '/', component: TelaDeEntrada },
  // { path: '/menutoggle', component: Menutoggle },
  { path: '/login', component: TelaLogin },
  { path: '/perfil', component: TelaPerfil },
  { path: '/home', component: HomeMenu },
  { path: '/ouvidoria', component: TelaOuvidoria },
  { path: '/dashboard', component: TelaDashboard },
  { path: '/fornecedores', component: TelaFornecedores },
  { path: '/notificacoes', component: TelaNotificacoes },
  // { path: '/gestao-de-mercado',
  //   component: GestaoDeMercado,
  //   children: [
  //     { path: 'dashboard', component: Dashboard },
  //     { path: 'inventario', component: Inventario },
  //     { path: 'pedidos', component: Pedidos }, 
  //     { path: 'vendedores', component: Vendedores },
  //     { path: 'analises', component: Analises },
  //     { path: 'logistica', component: Logistica }
  //   ]
  //  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router