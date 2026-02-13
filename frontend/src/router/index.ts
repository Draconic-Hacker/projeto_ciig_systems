import { createRouter, createWebHistory } from 'vue-router'
// import TelaDeEntrada from '@/views/TelaDeEntrada.vue'


const routes = [
    // { path: '/', component: TelaDeEntrada },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router