<template>
    <!-- Quick Actions -->
    <div class="relative">
        <button onclick="toggleQuickActions()" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                </path>
            </svg>
        </button>
        <div id="quickActionsPanel" class="hidden absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 border">
            <div class="p-4">
                <h3 class="text-sm font-medium text-gray-900 mb-3">Ações Rápidas</h3>
                <div class="space-y-2">
                    <button onclick="addNewItem()"
                        class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">➕
                        Adicionar Produto</button>
                    <button onclick="exportData()"
                        class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">📊
                        Exportar Dados</button>
                    <button onclick="generateReport()"
                        class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">📋
                        Gerar Relatório</button>
                    <button onclick="backupData()"
                        class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">💾
                        Backup</button>
                    <button onclick="systemSettings()"
                        class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">⚙️
                        Configurações</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>