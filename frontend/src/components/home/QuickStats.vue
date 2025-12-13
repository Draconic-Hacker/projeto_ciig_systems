<template>
    <!-- Quick Stats -->
    <div class="glass-effect rounded-xl p-6 shadow-xl">
        <h2 class="text-xl font-semibold mb-4 text-white">Visão Geral</h2>
        <div class="space-y-4">
            <div class="flex justify-between items-center">
                <span class="text-gray-300">Pedidos Pendentes</span>
                <span class="text-white font-semibold">12</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-300">Fornecedores Ativos</span>
                <span class="text-white font-semibold">28</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-300">Materiais em Estoque</span>
                <span class="text-white font-semibold">1,254</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-300">Alertas</span>
                <span class="text-red-400 font-semibold">3</span>
            </div>
        </div>
    </div>
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