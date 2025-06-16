import { createRouter, createWebHistory } from 'vue-router'
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaLogin from '@/views/TelaLogin.vue'
import TelaOuvidoria from '@/views/TelaOuvidoria.vue'
import MenuHome from '@/views/TelaMenu.vue'

const routes = [
  { path: '/', component: TelaDeEntrada },
  { path: '/login', component: TelaLogin },
  { path: '/home', component: MenuHome },
  { path: '/ouvidoria', component: TelaOuvidoria },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router