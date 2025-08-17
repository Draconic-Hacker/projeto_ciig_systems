<template>
    <div class="telahome-body" :class="{ 'dark-theme': isDarkTheme }">
        <!-- Header -->
        <Header @toggle-theme="handleThemeToggle" />
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
    transition: background 1s cubic-bezier(.4,0,.2,1), background-image 1s cubic-bezier(.4,0,.2,1), filter 1s cubic-bezier(.4,0,.2,1);
}

.telahome-body.dark-theme {
    background-image: url('@/assets/captura-login.png');
    background-size: cover;
    background-position: center;
    filter: brightness(0.9) saturate(1.1);
    transition: background 1s cubic-bezier(.4,0,.2,1), background-image 1s cubic-bezier(.4,0,.2,1), filter 1s cubic-bezier(.4,0,.2,1);
}
</style>