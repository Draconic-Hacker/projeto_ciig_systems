import { createRouter, createWebHistory } from 'vue-router'
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaLogin from '@/views/TelaLogin.vue'
import teste from '@/views/teste.vue'
import teste2 from '@/views/teste2.vue'
import teste3 from '@/views/sass.vue'

const routes = [
    { path: '/', component: TelaDeEntrada },
    { path: '/login', component: TelaLogin },
    { path: '/teste', component: teste },
    { path: '/teste2', component: teste2 },
    { path: '/teste3', component: teste3 },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router