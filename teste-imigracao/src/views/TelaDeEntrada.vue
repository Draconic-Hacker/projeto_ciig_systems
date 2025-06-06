<template>
  <div class="splash-screen">
    <h1 class="company-name">CIIG SYSTEMS</h1>
    <div class="logo">
      <img :src="logo" alt="Logo da empresa" class="logo" />
    </div>
    <p class="slogan">O Site que procura sempre ajudar você no mundo dos negócios.</p>
  </div>
</template>

<script setup>

import logo from '@/assets/ciig.png';

setTimeout(() => {
      window.location.href = "/login.html";  // OU window.location.href se não tiver usando router ainda
    }, 4000);

</script>

<style>
/* Cola aqui o conteúdo do seu index.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: linear-gradient(135deg, #000000, #2b2bb2);
}

body, html {
  height: 100%;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.splash-screen {
  text-align: center;
  opacity: 0;
  animation: fadeInZoom 2s forwards;
}

.company-name {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
}

.logo {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  background-color: #ff69b4;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.slogan {
  margin-top: 20px;
  font-size: 1.2em;
  color: #ccc;
}

@keyframes fadeInZoom {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
