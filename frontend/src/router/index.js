import { createRouter, createWebHistory } from 'vue-router'
import TelaDeEntrada from '@/views/TelaDeEntrada.vue'
import TelaLogin from '@/views/TelaLogin.vue'
import teste from '@/views/teste.vue'

const routes = [
    { path: '/', component: TelaDeEntrada },
    { path: '/login', component: TelaLogin },
    { path: '/sucesso', component: teste },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router