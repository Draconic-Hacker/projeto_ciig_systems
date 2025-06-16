<template>
    <div class="bg-home">

        <div class="title">
            <h1>SOC GLOBAL</h1>
            <p>PORTAL DE COMPRAS</p>
        </div>

        <div class="menu-box">

            <button class="menu-item">
                <i class="fas fa-shopping-cart"></i>
                <span>MATERIAL</span>
            </button>

            <button class="menu-item">
                <i class="fas fa-tags"></i>
                <span>DESCONTOS</span>
            </button>

            <button class="menu-item">
                <i class="fas fa-store"></i>
                <span>FORNECEDORES</span>
            </button>

            <button class="menu-item" @click="RedirectOuvidoria">
                <i class="fas fa-comments"></i>
                <span>OUVIDORIA GERAL</span>
            </button>

            <button class="menu-item">
                <i class="fas fa-bell"></i>
                <span>NOTIFICAÇÃO</span>
            </button>

            <button class="menu-item">
                <i class="fas fa-user-circle"></i>
                <span>PERFIL</span>
            </button>

        </div>

        <div class="footer">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
        </div>

    </div>
</template>

<script setup>
import('@/assets/js/fontawesome.js');
import { useRoute } from 'vue-router';
const router = useRoute();

function RedirectOuvidoria(){
    router.push('/ouvidoria')
}

</script>

<style scoped>
    @import '@/assets/css/menu.css'
</style>