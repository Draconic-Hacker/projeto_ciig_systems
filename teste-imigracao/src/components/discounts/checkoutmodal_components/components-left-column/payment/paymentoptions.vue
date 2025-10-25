<template>
    <!-- Payment Options -->
    <div class="space-y-3 mb-6">
        <label
            class="flex items-center p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:border-ciig-blue transition-colors">
            <input type="radio" name="payment" value="credit" class="text-ciig-blue focus:ring-ciig-blue">
            <div class="ml-3 flex items-center">
                <span class="text-2xl mr-3">💳</span>
                <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Cartão de Crédito</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Visa, Mastercard, Elo</div>
                </div>
            </div>
        </label>

        <label
            class="flex items-center p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:border-ciig-blue transition-colors">
            <input type="radio" name="payment" value="debit" class="text-ciig-blue focus:ring-ciig-blue">
            <div class="ml-3 flex items-center">
                <span class="text-2xl mr-3">💳</span>
                <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Cartão de Débito</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Débito à vista</div>
                </div>
            </div>
        </label>

        <label
            class="flex items-center p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:border-ciig-blue transition-colors">
            <input type="radio" name="payment" value="pix" class="text-ciig-blue focus:ring-ciig-blue">
            <div class="ml-3 flex items-center">
                <span class="text-2xl mr-3">📱</span>
                <div>
                    <div class="font-semibold text-gray-900 dark:text-white">PIX</div>
                    <div class="text-sm text-green-600">5% de desconto adicional</div>
                </div>
            </div>
        </label>

        <label
            class="flex items-center p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:border-ciig-blue transition-colors">
            <input type="radio" name="payment" value="boleto" class="text-ciig-blue focus:ring-ciig-blue">
            <div class="ml-3 flex items-center">
                <span class="text-2xl mr-3">🧾</span>
                <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Boleto Bancário</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Vencimento em 3 dias úteis</div>
                </div>
            </div>
        </label>

        <label
            class="flex items-center p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:border-ciig-blue transition-colors">
            <input type="radio" name="payment" value="paypal" class="text-ciig-blue focus:ring-ciig-blue">
            <div class="ml-3 flex items-center">
                <span class="text-2xl mr-3">🅿️</span>
                <div>
                    <div class="font-semibold text-gray-900 dark:text-white">PayPal</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Pagamento seguro</div>
                </div>
            </div>
        </label>
    </div>
</template>
<script setup>

</script>
<style scoped>

</style>