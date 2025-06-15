import { createRouter, createWebHistory } from 'vue-router'
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaLogin from '@/views/TelaLogin.vue'
import TelaOuvidoria from '@/views/TelaOuvidoria.vue'

const routes = [
  { path: '/', component: TelaOuvidoria },
  // { path: '/', component: TelaDeEntrada },
  { path: '/login', component: TelaLogin },
  // { path: '/ouvidoria', component: TelaOuvidoria },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router