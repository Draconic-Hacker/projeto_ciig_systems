<template>
 <!-- Footer -->
<footer class="glass-effect bg-blue-900 text-white py-4">
<div
    class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
>
    <div class="text-center md:text-left mb-4 md:mb-0">
    <p>
        &copy; 2023 CIIG Systems Supply Chain. Todos os direitos
        reservados.
    </p>
    </div>
    <div class="flex space-x-4">
    <a href="#" class="hover:text-blue-300 transition">Termos</a>
    <a href="#" class="hover:text-blue-300 transition">Privacidade</a>
    <a href="#" class="hover:text-blue-300 transition">Ajuda</a>
    </div>
</div>
</footer>
</template>

<script setup>
// import '@/assets/css/TelaHome.css';
</script>

<style scoped>
.glass-effect {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>