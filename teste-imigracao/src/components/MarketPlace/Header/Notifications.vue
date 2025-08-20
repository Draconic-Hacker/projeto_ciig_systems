<template>
    <!-- Notifications -->
    <div class="relative">
        <button onclick="toggleNotifications()"
            class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors relative">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 19H6.5A2.5 2.5 0 0 1 4 16.5v-7A2.5 2.5 0 0 1 6.5 7h11A2.5 2.5 0 0 1 6.5 7h11A2.5 2.5 0 0 1 20 9.5v2">
                </path>
            </svg>
            <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse"
                id="notificationCount">3</span>
        </button>
        <div id="notificationPanel" class="hidden absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border">
            <div class="p-4">
                <h3 class="text-sm font-medium text-gray-900 mb-3">Notificações</h3>
                <div class="space-y-3">
                    <div class="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                        <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                            <p class="text-sm text-gray-900">Estoque baixo: Smartphone Samsung</p>
                            <p class="text-xs text-gray-500">Há 5 minutos</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                        <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                            <p class="text-sm text-gray-900">Novo pedido #12345</p>
                            <p class="text-xs text-gray-500">Há 10 minutos</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                        <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                            <p class="text-sm text-gray-900">Vendedor aprovado: TechStore</p>
                            <p class="text-xs text-gray-500">Há 1 hora</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<scritp setup>

</scritp>

<style scoped></style>