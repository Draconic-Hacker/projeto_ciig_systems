<template>
    <div class="telahome-body">
        <!-- Header -->
        <Header />
        <!-- Menu -->
        <Menu />
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
// import '@/assets/css/TelaHome.css';
import Header from '@/components/home/Header.vue';
import Menu from '@/components/home/Menu.vue';
import Footer from '@/components/home/Footer.vue';
</script>

<style scoped>
.telahome-body {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #1a3a6d, #2a5298);
    min-height: 100vh;
    background-image: url('@/assets/captura-login.png');
    background-size: cover;
    background-position: center;
}
</style>