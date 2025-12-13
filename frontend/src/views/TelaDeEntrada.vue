<template>
  <div class="bg-entrada">
  <div class="splash-screen">
    <h1 class="company-name">CIIG SYSTEMS</h1>
    <div class="logo">
      <img :src="logo" alt="Logo da empresa" class="logo" />
    </div>
    <p class="slogan">O Site que procura sempre ajudar você no mundo dos negócios.</p>
  </div>
  </div>
</template>

<script setup>
import logo from '@/assets/ciig.png';
import { useRouter } from 'vue-router'


import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    router.replace('/login')  // Use replace para não manter a splash na pilha de histórico
  }, 4000);
});

const router = useRouter()
</script>

<style scoped>
@import '@/assets/css/entrada.css';
</style>