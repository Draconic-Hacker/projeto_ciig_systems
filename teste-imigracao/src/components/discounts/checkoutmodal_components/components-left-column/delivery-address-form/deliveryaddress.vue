<template>
    <!-- Delivery Address -->
    <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span
                class="w-6 h-6 bg-ciig-blue text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
            Endereço de Entrega
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative">
                <input type="text" placeholder="Nome completo *"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
                <span class="absolute right-3 top-3 text-red-500">*</span>
            </div>
            <div class="relative">
                <input type="text" placeholder="CEP *" id="cepInput"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
                <span class="absolute right-3 top-3 text-red-500">*</span>
                <button type="button" onclick="searchCEP()"
                    class="absolute right-8 top-3 text-ciig-blue hover:text-ciig-dark-blue text-sm">🔍</button>
            </div>
            <div class="relative md:col-span-2">
                <input type="text" placeholder="Rua *" id="streetInput"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
                <span class="absolute right-3 top-3 text-red-500">*</span>
            </div>
            <div class="relative">
                <input type="text" placeholder="Número *"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
                <span class="absolute right-3 top-3 text-red-500">*</span>
            </div>
            <input type="text" placeholder="Complemento (opcional)"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
            <input type="text" placeholder="Bairro (opcional)" id="neighborhoodInput"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
            <div class="relative">
                <input type="text" placeholder="Cidade *" id="cityInput"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
                <span class="absolute right-3 top-3 text-red-500">*</span>
            </div>
        </div>

        <!-- Saved Addresses -->
        <savedaddress />
    </div>
</template>
<script setup>
import savedaddress from './savedaddress.vue';

</script>
<style scoped></style>