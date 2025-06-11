import { createRouter, createWebHistory } from 'vue-router'

// importa suas views
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaLogin from '@/views/TelaDeLogin.vue'

const routes = [
  { path: '/', component: TelaDeEntrada },
  { path: '/login', component: TelaLogin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router