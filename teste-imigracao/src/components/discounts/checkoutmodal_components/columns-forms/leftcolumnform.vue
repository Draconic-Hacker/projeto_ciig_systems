<template>
    <!-- Left Column - Forms -->
    <div class="space-y-6">
        <!-- Delivery Address Form -->
        <deliveryaddress />
        <!-- Payment Method-->
        <paymentmethod />
    </div>
</template>
<script setup>
import deliveryaddress from '../components-left-column/delivery-address-form/deliveryaddress.vue';
import paymentmethod from '../components-left-column/paymentmethod.vue';

</script>
<style scoped>

</style>