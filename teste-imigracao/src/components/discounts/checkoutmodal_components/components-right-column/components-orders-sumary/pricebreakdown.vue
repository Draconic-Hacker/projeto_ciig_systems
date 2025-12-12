<template>
    <!-- Price Breakdown -->
    <div class="space-y-2 border-t border-gray-200 dark:border-gray-600 pt-4">
        <div class="flex justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">Subtotal:</span>
            <span id="checkoutSubtotal" class="text-gray-900 dark:text-white">R$ 0,00</span>
        </div>
        <div class="flex justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">Frete:</span>
            <span class="text-green-600 font-semibold">GRÁTIS</span>
        </div>
        <div class="flex justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">Desconto:</span>
            <span id="checkoutDiscount" class="text-green-600">-R$ 0,00</span>
        </div>
        <div id="pixDiscountLine" class="flex justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">Desconto PIX (5%):</span>
            <span id="pixDiscountAmount" class="text-green-600">-R$ 0,00</span>
        </div>
        <hr class="border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center">
            <span class="text-xl font-bold text-gray-900 dark:text-white">Total:</span>
            <span id="checkoutTotal" class="text-2xl font-bold text-ciig-blue">R$ 0,00</span>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>

</style>