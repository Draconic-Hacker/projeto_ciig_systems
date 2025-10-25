<template>
    <div id="cartSidebar"
        class="fixed inset-y-0 right-0 w-96 bg-white dark:bg-gray-800 shadow-2xl transform translate-x-full transition-transform duration-300 z-50">
        <div class="flex flex-col h-full">
            <!-- Cart Header -->
            <CartHeader />

            <!-- Cart Items -->
            <CartItems />

            <!-- Cart Footer -->
            <CartFooter />
        </div>
    </div>
</template>
<script setup>
import CartHeader from '../cart_sidebar_components/cartheader.vue';
import CartItems from '../cart_sidebar_components/cartitems.vue';
import CartFooter from '../cart_sidebar_components/cartfooter.vue';
</script>
<style scoped>
    
</style>