<template>
    <!-- Social Media Contact -->
    <div class="glass-effect rounded-xl p-6 shadow-xl">
        <h2 class="text-xl font-semibold mb-4 text-white">
            Contato CIIG Systems
        </h2>
        <div class="flex justify-center space-x-6 py-2">
            <a href="#" class="social-icon text-white hover:text-green-400">
                <i class="fab fa-whatsapp text-3xl"></i>
            </a>
            <a href="#" class="social-icon text-white hover:text-pink-400">
                <i class="fab fa-instagram text-3xl"></i>
            </a>
            <a href="#" class="social-icon text-white hover:text-blue-400">
                <i class="fab fa-facebook text-3xl"></i>
            </a>
        </div>
        <div class="mt-4 text-center">
            <p class="text-gray-300 text-sm">Suporte disponível 24/7</p>
            <p class="text-white font-medium mt-1">
                contato@ciigsystems.com
            </p>
        </div>
    </div>
</template>

<script setup>
// import '@/assets/css/TelaHome.css';
</script>

<style scoped>
.social-icon {
  transition: all 0.2s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

.glass-effect {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>