import { createRouter, createWebHistory } from 'vue-router'
import SuppliersView from '@/views/SuppliersView.vue'

const routes = [
  {
    path: '/fornecedores',
    name: 'suppliers',
    component: SuppliersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router