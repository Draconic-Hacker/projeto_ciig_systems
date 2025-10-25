<template>
    <!-- Cart Footer -->
    <div id="cartFooter" class="border-t border-gray-200 dark:border-gray-700 p-6 hidden">
        <div class="space-y-2 mb-4">
            <div class="flex justify-between text-sm">
                <span class="text-gray-600 dark:text-gray-400">Subtotal:</span>
                <span id="cartSubtotal" class="text-gray-900 dark:text-white">R$ 0,00</span>
            </div>
            <div class="flex justify-between text-sm">
                <span class="text-gray-600 dark:text-gray-400">Frete:</span>
                <span class="text-green-600 font-semibold">GRÁTIS</span>
            </div>
            <div class="flex justify-between text-sm">
                <span class="text-gray-600 dark:text-gray-400">Desconto:</span>
                <span id="cartDiscount" class="text-green-600">-R$ 0,00</span>
            </div>
            <hr class="border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center">
                <span class="text-lg font-semibold text-gray-900 dark:text-white">Total:</span>
                <span id="cartTotal" class="text-2xl font-bold text-ciig-blue">R$ 0,00</span>
            </div>
        </div>
        <button id="checkoutBtn"
            class="w-full bg-ciig-blue hover:bg-ciig-dark-blue text-white py-3 rounded-lg font-semibold transition-colors">
            Finalizar Compra
        </button>
        <button id="clearCart" class="w-full mt-2 text-red-500 hover:text-red-700 py-2 text-sm transition-colors">
            Limpar Carrinho
        </button>
    </div>
</template>
<script setup>

</script>
<style scoped>
    
</style>