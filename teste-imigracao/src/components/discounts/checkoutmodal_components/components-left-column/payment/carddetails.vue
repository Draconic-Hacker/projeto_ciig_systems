<template>
    <!-- Card Details (shown when credit/debit is selected) -->
    <div id="cardDetails" class="hidden space-y-4">
        <input type="text" placeholder="Número do cartão"
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
        <input type="text" placeholder="Nome no cartão"
            class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
        <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="MM/AA"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
            <input type="text" placeholder="CVV"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
        </div>
        <!-- Installments for credit card -->
        <Installmentsforcreditcard />
        
    </div>
</template>
<script setup>
import Installmentsforcreditcard from './installmentsforcreditcard.vue';

</script>
<style scoped></style>