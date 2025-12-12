<template>
    <div class="telahome-body theme-transition duration-slow" :class="{ 'dark-theme': isDarkTheme }">
        <!-- Header -->
        <Header class="theme-transition duration-normal" @toggle-theme="handleThemeToggle" />
        <!-- Menu -->
        <Menu class="theme-transition duration-slow" />
        <!-- Footer -->
        <Footer class="theme-transition duration-normal" />
    </div>
</template>

<script setup>
// import '@/assets/css/TelaHome.css';
import Header from '@/components/home/Header.vue';
import Menu from '@/components/home/Menu.vue';
import Footer from '@/components/layout/Footer.vue';
import { ref } from 'vue';

const isDarkTheme = ref(false);

function handleThemeToggle(isDark) {
  isDarkTheme.value = isDark;
  console.log(isDark)
}
</script>

<style scoped>
.telahome-body {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #1a3a6d, #2a5298);
    min-height: 100vh;
}

.telahome-body.dark-theme {
    background-image: url('@/assets/captura-login.png');
    background-size: cover;
    background-position: center;
    filter: brightness(0.9) saturate(1.1);
}
</style>