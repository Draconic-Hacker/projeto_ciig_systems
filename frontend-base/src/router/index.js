import { createRouter, createWebHistory } from 'vue-router'
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaLogin from '@/views/TelaLogin.vue'
import HomeMenu from '@/views/TelaHome.vue'

const routes = [
  { path: '/', component: TelaDeEntrada },
  { path: '/login', component: TelaLogin },
  { path: '/home', component: HomeMenu },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router