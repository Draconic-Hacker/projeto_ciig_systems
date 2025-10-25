<template>
    <!-- Order Summary -->
    <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span
                class="w-6 h-6 bg-ciig-blue text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
            Resumo do Pedido
        </h3>

        <div id="checkoutItems" class="space-y-4 mb-6">
            <!-- Items will be populated here -->
        </div>

        <!-- Coupon -->
        <coupon />

        <!-- Price Breakdown -->
        <pricebreakdown />
    </div>
</template>
<script setup>
import coupon from './components-orders-sumary/coupon.vue';
import pricebreakdown from './components-orders-sumary/pricebreakdown.vue';

</script>
<style scoped>

</style>