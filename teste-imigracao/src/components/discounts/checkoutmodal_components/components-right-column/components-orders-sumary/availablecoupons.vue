<template>
    <!-- Available Coupons -->
    <div class="mt-3">
        <button type="button" onclick="toggleAvailableCoupons()"
            class="text-ciig-blue hover:text-ciig-dark-blue text-sm flex items-center">
            🎫 Ver cupons disponíveis
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div id="availableCoupons" class="hidden mt-2 space-y-2">
            <div class="p-3 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-green-900/30"
                onclick="applyCouponCode('PRIMEIRA10')">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-semibold text-sm text-green-800 dark:text-green-400">PRIMEIRA10</div>
                        <div class="text-xs text-green-600 dark:text-green-500">10% de desconto na primeira compra</div>
                    </div>
                    <div class="text-green-600 font-bold">-10%</div>
                </div>
            </div>
            <div class="p-3 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30"
                onclick="applyCouponCode('FRETE20')">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-semibold text-sm text-blue-800 dark:text-blue-400">FRETE20</div>
                        <div class="text-xs text-blue-600 dark:text-blue-500">R$ 20 de desconto</div>
                    </div>
                    <div class="text-blue-600 font-bold">-R$20</div>
                </div>
            </div>
            <div class="p-3 border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 rounded-lg cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30"
                onclick="applyCouponCode('VIP15')">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-semibold text-sm text-purple-800 dark:text-purple-400">VIP15</div>
                        <div class="text-xs text-purple-600 dark:text-purple-500">15% para clientes VIP</div>
                    </div>
                    <div class="text-purple-600 font-bold">-15%</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>

</style>