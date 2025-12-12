<template>
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- Dashboard Tab -->
        <div id="dashboardTab" class="tab-content">
            <!-- KPI Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow p-6 transition-all duration-300" id="statsCard1">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dl>
                                <dt class="text-sm font-medium text-gray-500 truncate">Receita Total</dt>
                                <dd class="text-lg font-medium text-gray-900" id="totalRevenue">R$ 2.847.392</dd>
                                <dd class="text-sm text-green-600">+12.5% vs mês anterior</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow p-6 transition-all duration-300" id="statsCard2">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dl>
                                <dt class="text-sm font-medium text-gray-500 truncate">Pedidos Hoje</dt>
                                <dd class="text-lg font-medium text-gray-900" id="todayOrders">1,247</dd>
                                <dd class="text-sm text-green-600">+8.2% vs ontem</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow p-6 transition-all duration-300" id="statsCard3">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dl>
                                <dt class="text-sm font-medium text-gray-500 truncate">Vendedores Ativos</dt>
                                <dd class="text-lg font-medium text-gray-900" id="activeSellers">2,847</dd>
                                <dd class="text-sm text-blue-600">+156 novos este mês</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow p-6 transition-all duration-300" id="statsCard4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dl>
                                <dt class="text-sm font-medium text-gray-500 truncate">Avaliação Média</dt>
                                <dd class="text-lg font-medium text-gray-900" id="avgRating">4.7/5.0</dd>
                                <dd class="text-sm text-green-600">+0.2 vs mês anterior</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow p-6 transition-all duration-300" id="chartCard1">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">Vendas por Período</h3>
                    <div style="height: 300px;">
                        <canvas id="salesChart"></canvas>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow p-6 transition-all duration-300" id="chartCard2">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">Top Categorias</h3>
                    <div style="height: 300px;">
                        <canvas id="categoryChart"></canvas>
                    </div>
                </div>
            </div>

            <!-- Advanced Widgets -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Performance Widget -->
                <div class="bg-white shadow rounded-lg p-6 transition-all duration-300">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">Performance do Sistema</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-600">CPU</span>
                            <div class="flex items-center space-x-2">
                                <div class="w-24 bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 45%"></div>
                                </div>
                                <span class="text-sm font-medium">45%</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-600">Memória</span>
                            <div class="flex items-center space-x-2">
                                <div class="w-24 bg-gray-200 rounded-full h-2">
                                    <div class="bg-green-600 h-2 rounded-full" style="width: 67%"></div>
                                </div>
                                <span class="text-sm font-medium">67%</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-600">Armazenamento</span>
                            <div class="flex items-center space-x-2">
                                <div class="w-24 bg-gray-200 rounded-full h-2">
                                    <div class="bg-yellow-600 h-2 rounded-full" style="width: 82%"></div>
                                </div>
                                <span class="text-sm font-medium">82%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Top Products Widget -->
                <div class="bg-white shadow rounded-lg p-6 transition-all duration-300">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">Top Produtos</h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span class="text-xs font-medium text-blue-600">1</span>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-900">iPhone 15 Pro</p>
                                    <p class="text-xs text-gray-500">234 vendas</p>
                                </div>
                            </div>
                            <span class="text-sm font-medium text-green-600">+12%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                    <span class="text-xs font-medium text-green-600">2</span>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-900">Notebook Dell</p>
                                    <p class="text-xs text-gray-500">189 vendas</p>
                                </div>
                            </div>
                            <span class="text-sm font-medium text-green-600">+8%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <span class="text-xs font-medium text-yellow-600">3</span>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-900">Tênis Nike</p>
                                    <p class="text-xs text-gray-500">156 vendas</p>
                                </div>
                            </div>
                            <span class="text-sm font-medium text-red-600">-3%</span>
                        </div>
                    </div>
                </div>

                <!-- Weather & Time Widget -->
                <div class="bg-white shadow rounded-lg p-6 transition-all duration-300">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">Informações</h3>
                    <div class="space-y-4">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-gray-900" id="currentTime">--:--</div>
                            <div class="text-sm text-gray-500" id="currentDate">-- de ---- de ----</div>
                        </div>
                        <div class="border-t pt-4">
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-600">Usuários Online</span>
                                <div class="flex items-center space-x-1">
                                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span class="text-sm font-medium">1,247</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <span class="text-sm text-gray-600">Servidor</span>
                                <span class="text-sm font-medium text-green-600">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white shadow rounded-lg transition-all duration-300 mb-8" id="activityCard">
                <div class="px-4 py-5 sm:p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-medium text-gray-900">Atividade Recente</h3>
                        <button onclick="refreshActivity()"
                            class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            🔄 Atualizar
                        </button>
                    </div>
                    <div class="flow-root">
                        <ul class="-mb-8">
                            <li>
                                <div class="relative pb-8">
                                    <div class="relative flex space-x-3">
                                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div class="min-w-0 flex-1 pt-1.5">
                                            <p class="text-sm text-gray-500">Pedido <span
                                                    class="font-medium text-gray-900">#12345</span> foi entregue</p>
                                            <p class="text-xs text-gray-400">Há 2 minutos</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="relative pb-8">
                                    <div class="relative flex space-x-3">
                                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                                            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="min-w-0 flex-1 pt-1.5">
                                            <p class="text-sm text-gray-500">Novo vendedor <span
                                                    class="font-medium text-gray-900">TechStore</span> se cadastrou</p>
                                            <p class="text-xs text-gray-400">Há 15 minutos</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="relative">
                                    <div class="relative flex space-x-3">
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
                                            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div class="min-w-0 flex-1 pt-1.5">
                                            <p class="text-sm text-gray-500">Alerta de estoque baixo para <span
                                                    class="font-medium text-gray-900">iPhone 15</span></p>
                                            <p class="text-xs text-gray-400">Há 1 hora</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Inventory Tab -->
        <div id="inventoryTab" class="tab-content hidden">
            <!-- Inventory Management -->
            <div class="bg-white shadow rounded-lg transition-all duration-300" id="inventoryTable">
                <div class="px-4 py-5 sm:p-6">
                    <div class="sm:flex sm:items-center sm:justify-between mb-6">
                        <div class="sm:flex-auto">
                            <h1 class="text-xl font-semibold text-gray-900">Gestão de Inventário</h1>
                            <p class="mt-2 text-sm text-gray-700">Controle completo de produtos, preços e estoque em
                                tempo real.</p>
                        </div>
                        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-3">
                            <button onclick="bulkImport()"
                                class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                                Importar CSV
                            </button>
                            <button onclick="addNewItem()"
                                class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
                                Adicionar Produto
                            </button>
                        </div>
                    </div>

                    <!-- Advanced Filters -->
                    <div class="mb-6 bg-gray-50 p-4 rounded-lg">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Buscar</label>
                                <input type="text" id="searchInput" placeholder="Nome, SKU, descrição..."
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    onkeyup="filterTable()">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                                <select id="categoryFilter"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    onchange="filterTable()">
                                    <option value="">Todas as Categorias</option>
                                    <option value="Eletrônicos">Eletrônicos</option>
                                    <option value="Roupas">Roupas & Acessórios</option>
                                    <option value="Casa">Casa & Jardim</option>
                                    <option value="Esportes">Esportes & Fitness</option>
                                    <option value="Livros">Livros & Mídia</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select id="statusFilter"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    onchange="filterTable()">
                                    <option value="">Todos Status</option>
                                    <option value="Ativo">Ativo</option>
                                    <option value="Pausado">Pausado</option>
                                    <option value="Esgotado">Esgotado</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Vendedor</label>
                                <select id="sellerFilter"
                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                                    onchange="filterTable()">
                                    <option value="">Todos Vendedores</option>
                                    <option value="CIIG Store">CIIG Store</option>
                                    <option value="TechWorld">TechWorld</option>
                                    <option value="FashionHub">FashionHub</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Advanced Table Controls -->
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex items-center space-x-4">
                            <select id="itemsPerPage" onchange="changeItemsPerPage()"
                                class="border border-gray-300 rounded-md px-3 py-2 text-sm">
                                <option value="10">10 por página</option>
                                <option value="25" selected>25 por página</option>
                                <option value="50">50 por página</option>
                                <option value="100">100 por página</option>
                            </select>
                            <button onclick="toggleColumnVisibility()"
                                class="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                                👁️ Colunas
                            </button>
                            <button onclick="saveTableView()"
                                class="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                                💾 Salvar Visualização
                            </button>
                        </div>
                        <div class="text-sm text-gray-500">
                            Mostrando <span id="showingStart">1</span>-<span id="showingEnd">25</span> de <span
                                id="totalItems">0</span> itens
                        </div>
                    </div>

                    <!-- Products Table -->
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50" id="tableHead">
                                <tr>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <input type="checkbox" id="selectAll" onchange="toggleSelectAll()"
                                            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onclick="sortTable('name')">
                                        Produto <span id="sort-name">↕️</span>
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onclick="sortTable('seller')">
                                        Vendedor <span id="sort-seller">↕️</span>
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onclick="sortTable('price')">
                                        Preço <span id="sort-price">↕️</span>
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onclick="sortTable('quantity')">
                                        Estoque <span id="sort-quantity">↕️</span>
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onclick="sortTable('sales')">
                                        Vendas <span id="sort-sales">↕️</span>
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        onclick="sortTable('rating')">
                                        Avaliação <span id="sort-rating">↕️</span>
                                    </th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status</th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ações</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200" id="tableBody">
                                <!-- Table rows will be populated by JavaScript -->
                            </tbody>
                        </table>
                    </div>

                    <!-- Pagination -->
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center space-x-2">
                            <button onclick="previousPage()" id="prevBtn"
                                class="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50"
                                disabled>
                                ← Anterior
                            </button>
                            <div class="flex space-x-1" id="pageNumbers">
                                <!-- Page numbers will be generated by JavaScript -->
                            </div>
                            <button onclick="nextPage()" id="nextBtn"
                                class="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                                Próximo →
                            </button>
                        </div>
                        <button onclick="goToPage()"
                            class="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                            Ir para página...
                        </button>
                    </div>

                    <!-- Bulk Actions -->
                    <div id="bulkActions" class="hidden mt-4 p-4 bg-blue-50 rounded-lg">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-blue-700"><span id="selectedCount">0</span> itens
                                selecionados</span>
                            <div class="space-x-2">
                                <button onclick="bulkUpdatePrice()"
                                    class="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">Atualizar
                                    Preços</button>
                                <button onclick="bulkUpdateStock()"
                                    class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">Atualizar
                                    Estoque</button>
                                <button onclick="bulkPause()"
                                    class="px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors">Pausar</button>
                                <button onclick="bulkDelete()"
                                    class="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Orders Tab -->
        <div id="ordersTab" class="tab-content hidden">
            <div class="bg-white shadow rounded-lg transition-all duration-300">
                <div class="px-4 py-5 sm:p-6">
                    <h1 class="text-xl font-semibold text-gray-900 mb-6">Gestão de Pedidos</h1>

                    <!-- Order Stats -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">1,247</div>
                            <div class="text-sm text-blue-600">Pedidos Hoje</div>
                        </div>
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-yellow-600">89</div>
                            <div class="text-sm text-yellow-600">Aguardando Envio</div>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">2,156</div>
                            <div class="text-sm text-green-600">Em Trânsito</div>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">R$ 89,432</div>
                            <div class="text-sm text-purple-600">Receita Hoje</div>
                        </div>
                    </div>

                    <!-- Orders Table -->
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pedido
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produtos
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200" id="ordersTableBody">
                                <!-- Orders will be populated by JavaScript -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sellers Tab -->
        <div id="sellersTab" class="tab-content hidden">
            <div class="bg-white shadow rounded-lg transition-all duration-300">
                <div class="px-4 py-5 sm:p-6">
                    <div class="sm:flex sm:items-center sm:justify-between mb-6">
                        <div>
                            <h1 class="text-xl font-semibold text-gray-900">Gestão de Vendedores</h1>
                            <p class="mt-2 text-sm text-gray-700">Controle e monitore todos os vendedores da plataforma.
                            </p>
                        </div>
                        <button onclick="addNewSeller()"
                            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Aprovar Vendedor
                        </button>
                    </div>

                    <!-- Sellers Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="sellersGrid">
                        <!-- Sellers will be populated by JavaScript -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Analytics Tab -->
        <div id="analyticsTab" class="tab-content hidden">
            <div class="space-y-6">
                <div class="bg-white shadow rounded-lg p-6">
                    <h1 class="text-xl font-semibold text-gray-900 mb-6">Analytics Avançado</h1>

                    <!-- Analytics Charts -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-lg font-medium text-gray-900 mb-4">Conversão por Categoria</h3>
                            <div style="height: 300px;">
                                <canvas id="conversionChart"></canvas>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium text-gray-900 mb-4">Ticket Médio</h3>
                            <div style="height: 300px;">
                                <canvas id="ticketChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Performance Metrics -->
                <div class="bg-white shadow rounded-lg p-6">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">Métricas de Performance</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600">2.4s</div>
                            <div class="text-sm text-gray-500">Tempo Médio de Carregamento</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-600">94.2%</div>
                            <div class="text-sm text-gray-500">Taxa de Satisfação</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-600">67%</div>
                            <div class="text-sm text-gray-500">Taxa de Conversão</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Logistics Tab -->
        <div id="logisticsTab" class="tab-content hidden">
            <div class="bg-white shadow rounded-lg transition-all duration-300">
                <div class="px-4 py-5 sm:p-6">
                    <h1 class="text-xl font-semibold text-gray-900 mb-6">Centro Logístico</h1>

                    <!-- Logistics Stats -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">156</div>
                            <div class="text-sm text-blue-600">Entregas Hoje</div>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">98.5%</div>
                            <div class="text-sm text-green-600">Taxa de Entrega</div>
                        </div>
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-yellow-600">2.3 dias</div>
                            <div class="text-sm text-yellow-600">Tempo Médio</div>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <div class="text-2xl font-bold text-purple-600">23</div>
                            <div class="text-sm text-purple-600">Centros de Distribuição</div>
                        </div>
                    </div>

                    <!-- Shipping Map -->
                    <div class="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-6">
                        <div class="text-center">
                            <svg class="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <p class="text-gray-500">Mapa de Entregas em Tempo Real</p>
                            <p class="text-sm text-gray-400">Visualização interativa das rotas de entrega</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>
    
</style>