<template>
    <!-- Main Navigation Buttons -->
    <div class="w-full md:w-2/3 glass-effect rounded-xl p-6 shadow-xl">
        <h2 class="text-xl font-semibold mb-6 text-white">
            Gestão de Cadeia de Suprimentos
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- Button 1: Materiais -->
            <button
                class="main-button bg-black bg-opacity-60 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:shadow-lg">
                <i class="fas fa-boxes text-3xl mb-3"></i>
                <span class="font-medium">Materiais</span>
            </button>

            <!-- Button 2: Descontos -->
            <button
                class="main-button bg-black bg-opacity-60 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:shadow-lg">
                <i class="fas fa-percentage text-3xl mb-3"></i>
                <span class="font-medium">Descontos</span>
            </button>

            <!-- Button 3: Fornecedores -->
            <button
                class="main-button bg-black bg-opacity-60 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:shadow-lg">
                <i class="fas fa-truck text-3xl mb-3"></i>
                <span class="font-medium">Fornecedores</span>
            </button>

            <!-- Button 4: Ouvidoria Geral -->
            <button
                class="main-button bg-black bg-opacity-60 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:shadow-lg">
                <i class="fas fa-headset text-3xl mb-3"></i>
                <span class="font-medium">Ouvidoria Geral</span>
            </button>

            <!-- Button 5: Notificações -->
            <button
                class="main-button bg-black bg-opacity-60 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:shadow-lg">
                <i class="fas fa-bell text-3xl mb-3"></i>
                <span class="font-medium">Notificações</span>
            </button>

            <!-- Button 6: Perfil -->
            <button
                class="main-button bg-black bg-opacity-60 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:shadow-lg">
                <i class="fas fa-user text-3xl mb-3"></i>
                <span class="font-medium">Perfil</span>
            </button>

            <!-- Button 6: Gestão de Marketplace -->
            <button
                class="main-button bg-black bg-opacity-60 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:shadow-lg">
                <i class="fas fa-store text-3xl mb-3"></i>
                <span class="font-medium">Gestão de Mercado</span>
            </button>
        </div>
    </div>
</template>

<script setup>
// import '@/assets/css/TelaHome.css';
</script>

<style scoped>
.main-button {
  transition: all 0.3s ease;
}

.main-button:hover {
  background-color: rgba(25, 50, 100, 0.8) !important;
  transform: scale(1.05);
}

.glass-effect {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>