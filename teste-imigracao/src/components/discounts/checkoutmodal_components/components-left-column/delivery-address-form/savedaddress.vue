<template>
    <!-- Saved Addresses -->
    <div class="mt-4">
        <button type="button" onclick="toggleSavedAddresses()"
            class="text-ciig-blue hover:text-ciig-dark-blue text-sm flex items-center">
            📍 Usar endereço salvo
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div id="savedAddresses" class="hidden mt-2 space-y-2">
            <div class="p-3 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                onclick="fillAddress('home')">
                <div class="font-semibold text-sm">🏠 Casa</div>
                <div class="text-xs text-gray-500">Rua das Flores, 123 - Centro</div>
            </div>
            <div class="p-3 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                onclick="fillAddress('work')">
                <div class="font-semibold text-sm">🏢 Trabalho</div>
                <div class="text-xs text-gray-500">Av. Paulista, 1000 - Bela Vista</div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped></style>