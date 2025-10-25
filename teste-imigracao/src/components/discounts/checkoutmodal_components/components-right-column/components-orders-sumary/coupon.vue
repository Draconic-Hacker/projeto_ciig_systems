<template>
    
  components: { availablecoupons },<!-- Coupon -->
    <div class="border-t border-gray-200 dark:border-gray-600 pt-4 mb-4">
        <div class="flex space-x-2">
            <input type="text" id="couponInput" placeholder="Código de desconto"
                class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-ciig-blue">
            <button onclick="applyCoupon()"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                Aplicar
            </button>
        </div>
        <div id="couponStatus" class="mt-2 text-sm hidden"></div>

        <!-- Available Coupons -->
        <availablecoupons />
    </div>
</template>
<script setup>
import availablecoupons from './availablecoupons.vue';

</script>
<style scoped></style>