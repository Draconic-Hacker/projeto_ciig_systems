<template>
    <!-- Payment Method -->
    <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span
                class="w-6 h-6 bg-ciig-blue text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
            Forma de Pagamento
        </h3>

        <!-- Payment Options -->
        <paymentoptions />

        <!-- Card Details (shown when credit/debit is selected) -->
        <carddetails />

        <!-- PIX Details -->
        <pixdetails />

        <!-- Boleto Details -->
        <boletodetails />
    </div>
</template>
<script setup>
import paymentoptions from '../payment/paymentoptions.vue';
import carddetails from '../payment/carddetails.vue';
import pixdetails from '../payment/pixdetails.vue';
import pixdetails from '../payment/pixdetails.vue';
import boletodetails from '../payment/boletodetails.vue';

</script>
<style scoped></style>