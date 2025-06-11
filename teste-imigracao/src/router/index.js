import { createRouter, createWebHistory } from 'vue-router'
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaLogin from '@/views/TelaLogin.vue'

const routes = [
  { path: '/', component: TelaDeEntrada },
  { path: '/login', component: TelaLogin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
