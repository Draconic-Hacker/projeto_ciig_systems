<template>
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200 transition-all duration-300" id="header">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">

                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <h1 class="text-2xl font-bold text-blue-600">CIIG System</h1>
                        <p class="text-xs text-gray-500">Marketplace Management</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <!-- Search Global -->
                    <div class="relative hidden md:block">
                        <input type="text" placeholder="Busca global..."
                            class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            id="globalSearch" onkeyup="globalSearch(event)">
                        <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>

                    <!-- Quick Actions -->
                    <QuickActions />

                    <!-- Notifications -->
                    <Notifications />  

                    <!-- colocar o theme toggle aqui -->

                    
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span class="text-white text-sm font-medium">A</span>
                        </div>
                        <span class="text-sm font-medium text-gray-700" id="userName">Admin CIIG</span>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import QuickActions from './Header/QuickActions.vue';
import Notifications from './Header/Notifications.vue';

</script>

<style scoped>
.glass-effect {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-text {
    background: linear-gradient(90deg, #ffffff, #a3c2ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>