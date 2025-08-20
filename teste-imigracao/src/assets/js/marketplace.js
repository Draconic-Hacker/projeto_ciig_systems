// Enhanced sample data
let inventoryData = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    sku: "IP15PM256",
    category: "Eletrônicos",
    seller: "TechWorld",
    quantity: 45,
    price: 7999.99,
    sales: 234,
    rating: 4.8,
    status: "Ativo",
    lastUpdate: "2024-01-15",
    description: "Smartphone Apple com câmera profissional",
  },
  {
    id: 2,
    name: "Notebook Dell XPS 13",
    sku: "DELLXPS13",
    category: "Eletrônicos",
    seller: "CIIG Store",
    quantity: 12,
    price: 4999.99,
    sales: 89,
    rating: 4.6,
    status: "Ativo",
    lastUpdate: "2024-01-14",
    description: "Ultrabook premium para profissionais",
  },
  {
    id: 3,
    name: "Tênis Nike Air Max",
    sku: "NIKEAM90",
    category: "Esportes",
    seller: "FashionHub",
    quantity: 89,
    price: 599.99,
    sales: 456,
    rating: 4.7,
    status: "Ativo",
    lastUpdate: "2024-01-15",
    description: "Tênis esportivo confortável",
  },
  {
    id: 4,
    name: 'Smart TV Samsung 55"',
    sku: "SAMTV55",
    category: "Eletrônicos",
    seller: "TechWorld",
    quantity: 0,
    price: 2799.99,
    sales: 123,
    rating: 4.5,
    status: "Esgotado",
    lastUpdate: "2024-01-13",
    description: "Smart TV 4K com HDR",
  },
  {
    id: 5,
    name: 'Livro "Clean Code"',
    sku: "BOOKCC01",
    category: "Livros",
    seller: "CIIG Store",
    quantity: 156,
    price: 89.99,
    sales: 789,
    rating: 4.9,
    status: "Ativo",
    lastUpdate: "2024-01-15",
    description: "Guia essencial para programadores",
  },
  {
    id: 6,
    name: "Cafeteira Nespresso",
    sku: "NESCAFE01",
    category: "Casa",
    seller: "FashionHub",
    quantity: 8,
    price: 899.99,
    sales: 67,
    rating: 4.4,
    status: "Ativo",
    lastUpdate: "2024-01-14",
    description: "Máquina de café expresso automática",
  },
];

let ordersData = [
  {
    id: 12345,
    customer: "João Silva",
    products: "iPhone 15 Pro, Capa",
    total: 8199.98,
    status: "Entregue",
    date: "2024-01-15",
  },
  {
    id: 12346,
    customer: "Maria Santos",
    products: "Notebook Dell XPS",
    total: 4999.99,
    status: "Em Trânsito",
    date: "2024-01-15",
  },
  {
    id: 12347,
    customer: "Pedro Costa",
    products: "Tênis Nike, Meia",
    total: 649.98,
    status: "Aguardando Envio",
    date: "2024-01-14",
  },
  {
    id: 12348,
    customer: "Ana Oliveira",
    products: "Smart TV Samsung",
    total: 2799.99,
    status: "Processando",
    date: "2024-01-14",
  },
];

let sellersData = [
  {
    id: 1,
    name: "TechWorld",
    products: 1247,
    sales: "R$ 2.4M",
    rating: 4.8,
    status: "Ativo",
    joined: "2023-03-15",
  },
  {
    id: 2,
    name: "FashionHub",
    products: 856,
    sales: "R$ 1.8M",
    rating: 4.6,
    status: "Ativo",
    joined: "2023-05-22",
  },
  {
    id: 3,
    name: "CIIG Store",
    products: 2341,
    sales: "R$ 5.2M",
    rating: 4.9,
    status: "Ativo",
    joined: "2022-01-10",
  },
  {
    id: 4,
    name: "HomeDecor",
    products: 432,
    sales: "R$ 890K",
    rating: 4.3,
    status: "Pendente",
    joined: "2024-01-10",
  },
];

let isDarkMode = false;
let selectedItems = new Set();
let charts = {};

// Enhanced application state
let currentPage = 1;
let itemsPerPage = 25;
let sortField = "";
let sortDirection = "asc";
let filteredData = [...inventoryData];

// Initialize the application
function init() {
  loadThemePreference();
  renderTable();
  renderOrdersTable();
  renderSellersGrid();
  initCharts();
  updateStats();
  startRealTimeUpdates();
  updateClock();
  setInterval(updateClock, 1000);
  updatePagination();
}

// Load theme preference
function loadThemePreference() {
  const savedTheme = localStorage.getItem("darkMode");
  if (savedTheme === "true") {
    isDarkMode = false; // Will be toggled to true
    toggleTheme();
  }
}

// Update clock
function updateClock() {
  const now = new Date();
  const timeElement = document.getElementById("currentTime");
  const dateElement = document.getElementById("currentDate");

  if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  if (dateElement) {
    dateElement.textContent = now.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
}

// Global search functionality
function globalSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  if (event.key === "Enter" && searchTerm) {
    // Search across all data
    const results = [];

    // Search inventory
    inventoryData.forEach((item) => {
      if (
        item.name.toLowerCase().includes(searchTerm) ||
        item.sku.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      ) {
        results.push({ type: "Produto", name: item.name, data: item });
      }
    });

    // Search orders
    ordersData.forEach((order) => {
      if (
        order.customer.toLowerCase().includes(searchTerm) ||
        order.products.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          type: "Pedido",
          name: `#${order.id} - ${order.customer}`,
          data: order,
        });
      }
    });

    // Search sellers
    sellersData.forEach((seller) => {
      if (seller.name.toLowerCase().includes(searchTerm)) {
        results.push({ type: "Vendedor", name: seller.name, data: seller });
      }
    });

    showSearchResults(results);
  }
}

// Show search results
function showSearchResults(results) {
  if (results.length === 0) {
    showToast("Nenhum resultado encontrado", "error");
    return;
  }

  let message = `Encontrados ${results.length} resultados:\n`;
  results.slice(0, 5).forEach((result) => {
    message += `• ${result.type}: ${result.name}\n`;
  });

  if (results.length > 5) {
    message += `... e mais ${results.length - 5} resultados`;
  }

  alert(message);
}

// Toggle quick actions panel
function toggleQuickActions() {
  const panel = document.getElementById("quickActionsPanel");
  if (panel) {
    panel.classList.toggle("hidden");
  }
}

// Quick action functions
function exportData() {
  const dataToExport = {
    inventory: inventoryData,
    orders: ordersData,
    sellers: sellersData,
    exportDate: new Date().toISOString(),
  };

  const dataStr = JSON.stringify(dataToExport, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `ciig-data-${new Date().toISOString().split("T")[0]}.json`;
  link.click();

  URL.revokeObjectURL(url);
  showToast("Dados exportados com sucesso!");
}

function generateReport() {
  const report = {
    totalProducts: inventoryData.length,
    totalOrders: ordersData.length,
    totalSellers: sellersData.length,
    totalRevenue: ordersData.reduce((sum, order) => sum + order.total, 0),
    averageRating:
      inventoryData.reduce((sum, item) => sum + item.rating, 0) /
      inventoryData.length,
    lowStockItems: inventoryData.filter((item) => item.quantity <= 10).length,
    generatedAt: new Date().toISOString(),
  };

  const reportStr = `RELATÓRIO CIIG SYSTEM
=====================================
Data: ${new Date().toLocaleDateString("pt-BR")}

RESUMO GERAL:
• Total de Produtos: ${report.totalProducts}
• Total de Pedidos: ${report.totalOrders}
• Total de Vendedores: ${report.totalSellers}
• Receita Total: R$ ${report.totalRevenue.toFixed(2)}
• Avaliação Média: ${report.averageRating.toFixed(1)}/5.0
• Itens com Estoque Baixo: ${report.lowStockItems}

PRODUTOS MAIS VENDIDOS:
${inventoryData
  .sort((a, b) => b.sales - a.sales)
  .slice(0, 5)
  .map((item, index) => `${index + 1}. ${item.name} - ${item.sales} vendas`)
  .join("\n")}

VENDEDORES TOP:
${sellersData
  .sort(
    (a, b) =>
      parseFloat(b.sales.replace(/[R$M.]/g, "")) -
      parseFloat(a.sales.replace(/[R$M.]/g, ""))
  )
  .slice(0, 3)
  .map((seller, index) => `${index + 1}. ${seller.name} - ${seller.sales}`)
  .join("\n")}
`;

  const reportBlob = new Blob([reportStr], { type: "text/plain" });
  const url = URL.createObjectURL(reportBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `relatorio-ciig-${
    new Date().toISOString().split("T")[0]
  }.txt`;
  link.click();

  URL.revokeObjectURL(url);
  showToast("Relatório gerado com sucesso!");
}

function backupData() {
  const backup = {
    version: "1.0",
    timestamp: new Date().toISOString(),
    data: {
      inventory: inventoryData,
      orders: ordersData,
      sellers: sellersData,
    },
    settings: {
      darkMode: isDarkMode,
      itemsPerPage: itemsPerPage,
    },
  };

  const backupStr = JSON.stringify(backup, null, 2);
  const backupBlob = new Blob([backupStr], { type: "application/json" });
  const url = URL.createObjectURL(backupBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `backup-ciig-${new Date().toISOString().split("T")[0]}.json`;
  link.click();

  URL.revokeObjectURL(url);
  showToast("Backup criado com sucesso!");
}

function systemSettings() {
  const settings = prompt(`Configurações do Sistema:
1. Tema escuro: ${isDarkMode ? "Ativado" : "Desativado"}
2. Itens por página: ${itemsPerPage}
3. Atualizações automáticas: Ativadas

Digite o número da configuração que deseja alterar (1-3):`);

  switch (settings) {
    case "1":
      toggleTheme();
      showToast("Tema alterado!");
      break;
    case "2":
      const newItemsPerPage = prompt("Quantos itens por página?", itemsPerPage);
      if (newItemsPerPage && !isNaN(newItemsPerPage)) {
        itemsPerPage = parseInt(newItemsPerPage);
        document.getElementById("itemsPerPage").value = itemsPerPage;
        renderTable();
        showToast("Itens por página atualizado!");
      }
      break;
    case "3":
      showToast("Configuração de atualizações em desenvolvimento...");
      break;
    default:
      if (settings !== null) {
        showToast("Opção inválida", "error");
      }
  }
}

// Refresh activity
function refreshActivity() {
  showToast("Atividade atualizada!");
  // Simulate new activity
  const activities = [
    "Novo pedido #" + (Math.floor(Math.random() * 10000) + 10000),
    "Produto atualizado: " +
      inventoryData[Math.floor(Math.random() * inventoryData.length)].name,
    "Vendedor aprovado: Store" + Math.floor(Math.random() * 100),
    "Estoque reabastecido: " +
      inventoryData[Math.floor(Math.random() * inventoryData.length)].name,
  ];

  console.log(
    "Nova atividade:",
    activities[Math.floor(Math.random() * activities.length)]
  );
}

// Table sorting
function sortTable(field) {
  if (sortField === field) {
    sortDirection = sortDirection === "asc" ? "desc" : "asc";
  } else {
    sortField = field;
    sortDirection = "asc";
  }

  // Update sort indicators
  document.querySelectorAll('[id^="sort-"]').forEach((el) => {
    el.textContent = "↕️";
  });

  const sortIndicator = document.getElementById(`sort-${field}`);
  if (sortIndicator) {
    sortIndicator.textContent = sortDirection === "asc" ? "↑" : "↓";
  }

  // Sort data
  filteredData.sort((a, b) => {
    let aVal = a[field];
    let bVal = b[field];

    if (typeof aVal === "string") {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }

    if (sortDirection === "asc") {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  renderTable();
  updatePagination();
}

// Pagination functions
function changeItemsPerPage() {
  const select = document.getElementById("itemsPerPage");
  itemsPerPage = parseInt(select.value);
  currentPage = 1;
  renderTable();
  updatePagination();
}

function updatePagination() {
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Update showing info
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  const showingStart = document.getElementById("showingStart");
  const showingEnd = document.getElementById("showingEnd");
  const totalItemsEl = document.getElementById("totalItems");

  if (showingStart) showingStart.textContent = start;
  if (showingEnd) showingEnd.textContent = end;
  if (totalItemsEl) totalItemsEl.textContent = totalItems;

  // Update buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.disabled = currentPage === 1;
    prevBtn.classList.toggle("opacity-50", currentPage === 1);
  }

  if (nextBtn) {
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.classList.toggle("opacity-50", currentPage === totalPages);
  }

  // Generate page numbers
  const pageNumbers = document.getElementById("pageNumbers");
  if (pageNumbers) {
    pageNumbers.innerHTML = "";

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      pageBtn.className = `px-3 py-2 border rounded-md text-sm ${
        i === currentPage
          ? "bg-blue-600 text-white border-blue-600"
          : "border-gray-300 hover:bg-gray-50"
      }`;
      pageBtn.onclick = () => goToPageNumber(i);
      pageNumbers.appendChild(pageBtn);
    }
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
    updatePagination();
  }
}

function nextPage() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
    updatePagination();
  }
}

function goToPageNumber(page) {
  currentPage = page;
  renderTable();
  updatePagination();
}

function goToPage() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const page = prompt(`Ir para página (1-${totalPages}):`);
  if (page && !isNaN(page)) {
    const pageNum = parseInt(page);
    if (pageNum >= 1 && pageNum <= totalPages) {
      goToPageNumber(pageNum);
    } else {
      showToast("Página inválida", "error");
    }
  }
}

// Additional table functions
function toggleColumnVisibility() {
  showToast("Funcionalidade de visibilidade de colunas em desenvolvimento...");
}

function saveTableView() {
  const view = {
    sortField,
    sortDirection,
    itemsPerPage,
    filters: {
      search: document.getElementById("searchInput")?.value || "",
      category: document.getElementById("categoryFilter")?.value || "",
      status: document.getElementById("statusFilter")?.value || "",
      seller: document.getElementById("sellerFilter")?.value || "",
    },
  };

  localStorage.setItem("tableView", JSON.stringify(view));
  showToast("Visualização da tabela salva!");
}

// Tab management - Fixed to properly handle tab switching
function showTab(tabName, element) {
  // Hide all tabs
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.add("hidden");
  });

  // Show selected tab
  const targetTab = document.getElementById(tabName + "Tab");
  if (targetTab) {
    targetTab.classList.remove("hidden");
  }

  // Update tab links
  document.querySelectorAll(".tab-link").forEach((link) => {
    link.classList.remove("tab-active");
    link.classList.add("text-gray-500", "hover:text-gray-900");
  });

  if (element) {
    element.classList.add("tab-active");
    element.classList.remove("text-gray-500", "hover:text-gray-900");
  }

  // Reinitialize charts if switching to analytics tab
  if (tabName === "analytics") {
    setTimeout(() => {
      initAnalyticsCharts();
    }, 100);
  }
}

// Toggle theme - Fixed to properly handle all elements
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const body = document.getElementById("body");
  const header = document.getElementById("header");
  const cards = document.querySelectorAll(".bg-white");
  const tableHead = document.getElementById("tableHead");

  if (isDarkMode) {
    body.className = "bg-gray-900 text-white transition-all duration-300";
    header.className =
      "bg-gray-800 shadow-sm border-b border-gray-700 transition-all duration-300";
    cards.forEach((card) => {
      card.classList.remove("bg-white");
      card.classList.add("bg-gray-800");
    });
    if (tableHead) {
      tableHead.classList.remove("bg-gray-50");
      tableHead.classList.add("bg-gray-700");
    }
    document.getElementById("userName").className =
      "text-sm font-medium text-gray-300";
  } else {
    body.className = "bg-gray-50 transition-all duration-300";
    header.className =
      "bg-white shadow-sm border-b border-gray-200 transition-all duration-300";
    cards.forEach((card) => {
      card.classList.remove("bg-gray-800");
      card.classList.add("bg-white");
    });
    if (tableHead) {
      tableHead.classList.remove("bg-gray-700");
      tableHead.classList.add("bg-gray-50");
    }
    document.getElementById("userName").className =
      "text-sm font-medium text-gray-700";
  }
}

// Toggle notifications - Fixed to prevent event bubbling
function toggleNotifications() {
  const panel = document.getElementById("notificationPanel");
  if (panel) {
    panel.classList.toggle("hidden");
  }
}

// Render inventory table with pagination
function renderTable(data = null) {
  const tbody = document.getElementById("tableBody");
  if (!tbody) return;

  // Use filtered data if no specific data provided
  if (!data) {
    data = filteredData;
  } else {
    filteredData = [...data];
  }

  tbody.innerHTML = "";

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach((item) => {
    const row = document.createElement("tr");
    row.className = isDarkMode
      ? "bg-gray-800 hover:bg-gray-700"
      : "bg-white hover:bg-gray-50";

    const statusColor = getStatusColor(item.status);
    const ratingStars = generateStars(item.rating);

    row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" class="item-checkbox rounded border-gray-300 text-blue-600 focus:ring-blue-500" value="${
                          item.id
                        }" onchange="updateSelection()">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <div class="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                                    <span class="text-xs font-medium text-gray-600">${item.name.substring(
                                      0,
                                      2
                                    )}</span>
                                </div>
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium ${
                                  isDarkMode ? "text-white" : "text-gray-900"
                                }">${item.name}</div>
                                <div class="text-sm ${
                                  isDarkMode ? "text-gray-300" : "text-gray-500"
                                }">${item.sku}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }">${item.seller}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-900"
                    }">R$ ${item.price.toFixed(2)}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }">${item.quantity}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }">${item.sales}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            ${ratingStars}
                            <span class="ml-1 text-sm ${
                              isDarkMode ? "text-gray-300" : "text-gray-500"
                            }">${item.rating}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor}">
                            ${item.status}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div class="flex space-x-2">
                            <button onclick="editItem(${
                              item.id
                            })" class="text-blue-600 hover:text-blue-900 transition-colors">Editar</button>
                            <button onclick="viewAnalytics(${
                              item.id
                            })" class="text-green-600 hover:text-green-900 transition-colors">Analytics</button>
                            <button onclick="deleteItem(${
                              item.id
                            })" class="text-red-600 hover:text-red-900 transition-colors">Excluir</button>
                        </div>
                    </td>
                `;
    tbody.appendChild(row);
  });
}

// Render orders table - Fixed to handle missing elements
function renderOrdersTable() {
  const tbody = document.getElementById("ordersTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  ordersData.forEach((order) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50";

    const statusColor = getOrderStatusColor(order.status);

    row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#${
                      order.id
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                      order.customer
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                      order.products
                    }</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R$ ${order.total.toFixed(
                      2
                    )}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor}">
                            ${order.status}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(
                      order.date
                    )}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button onclick="viewOrder(${
                          order.id
                        })" class="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                        <button onclick="trackOrder(${
                          order.id
                        })" class="text-green-600 hover:text-green-900">Rastrear</button>
                    </td>
                `;
    tbody.appendChild(row);
  });
}

// Render sellers grid - Fixed to handle missing elements
function renderSellersGrid() {
  const grid = document.getElementById("sellersGrid");
  if (!grid) return;

  grid.innerHTML = "";

  sellersData.forEach((seller) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow";

    const statusColor =
      seller.status === "Ativo"
        ? "bg-green-100 text-green-800"
        : "bg-yellow-100 text-yellow-800";
    const ratingStars = generateStars(seller.rating);

    card.innerHTML = `
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-medium">${seller.name.substring(
                                  0,
                                  2
                                )}</span>
                            </div>
                            <div class="ml-3">
                                <h3 class="text-lg font-medium text-gray-900">${
                                  seller.name
                                }</h3>
                                <p class="text-sm text-gray-500">Desde ${formatDate(
                                  seller.joined
                                )}</p>
                            </div>
                        </div>
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor}">
                            ${seller.status}
                        </span>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <div class="text-2xl font-bold text-gray-900">${
                              seller.products
                            }</div>
                            <div class="text-sm text-gray-500">Produtos</div>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-green-600">${
                              seller.sales
                            }</div>
                            <div class="text-sm text-gray-500">Vendas</div>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            ${ratingStars}
                            <span class="ml-1 text-sm text-gray-500">${
                              seller.rating
                            }</span>
                        </div>
                        <div class="flex space-x-2">
                            <button onclick="viewSeller(${
                              seller.id
                            })" class="text-blue-600 hover:text-blue-900 text-sm">Ver</button>
                            <button onclick="contactSeller(${
                              seller.id
                            })" class="text-green-600 hover:text-green-900 text-sm">Contato</button>
                        </div>
                    </div>
                `;
    grid.appendChild(card);
  });
}

// Generate star rating - Fixed to handle edge cases
function generateStars(rating) {
  if (!rating || rating < 0) rating = 0;
  if (rating > 5) rating = 5;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars +=
      '<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
  }

  if (hasHalfStar) {
    stars +=
      '<svg class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#D1D5DB"/></linearGradient></defs><path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars +=
      '<svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
  }

  return stars;
}

// Get status colors - Fixed to handle all cases
function getStatusColor(status) {
  switch (status) {
    case "Ativo":
      return "bg-green-100 text-green-800";
    case "Pausado":
      return "bg-yellow-100 text-yellow-800";
    case "Esgotado":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getOrderStatusColor(status) {
  switch (status) {
    case "Entregue":
      return "bg-green-100 text-green-800";
    case "Em Trânsito":
      return "bg-blue-100 text-blue-800";
    case "Aguardando Envio":
      return "bg-yellow-100 text-yellow-800";
    case "Processando":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

// Format date - Fixed to handle invalid dates
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Data inválida";
    }
    return date.toLocaleDateString("pt-BR");
  } catch (error) {
    return "Data inválida";
  }
}

// Filter table with pagination support
function filterTable() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const statusFilter = document.getElementById("statusFilter");
  const sellerFilter = document.getElementById("sellerFilter");

  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
  const categoryValue = categoryFilter ? categoryFilter.value : "";
  const statusValue = statusFilter ? statusFilter.value : "";
  const sellerValue = sellerFilter ? sellerFilter.value : "";

  filteredData = inventoryData.filter((item) => {
    const matchesSearch =
      !searchTerm ||
      item.name.toLowerCase().includes(searchTerm) ||
      item.sku.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm);
    const matchesCategory = !categoryValue || item.category === categoryValue;
    const matchesStatus = !statusValue || item.status === statusValue;
    const matchesSeller = !sellerValue || item.seller === sellerValue;

    return matchesSearch && matchesCategory && matchesStatus && matchesSeller;
  });

  currentPage = 1; // Reset to first page when filtering
  renderTable();
  updatePagination();
}

// Selection management - Fixed to handle missing elements
function updateSelection() {
  const checkboxes = document.querySelectorAll(".item-checkbox:checked");
  selectedItems.clear();
  checkboxes.forEach((cb) => selectedItems.add(parseInt(cb.value)));

  const bulkActions = document.getElementById("bulkActions");
  const selectedCount = document.getElementById("selectedCount");

  if (selectedItems.size > 0) {
    if (bulkActions) bulkActions.classList.remove("hidden");
    if (selectedCount) selectedCount.textContent = selectedItems.size;
  } else {
    if (bulkActions) bulkActions.classList.add("hidden");
  }
}

function toggleSelectAll() {
  const selectAll = document.getElementById("selectAll");
  const checkboxes = document.querySelectorAll(".item-checkbox");

  if (selectAll && checkboxes.length > 0) {
    checkboxes.forEach((cb) => {
      cb.checked = selectAll.checked;
    });
    updateSelection();
  }
}

// Initialize charts - Fixed to handle missing canvas elements
function initCharts() {
  // Sales Chart
  const salesCtx = document.getElementById("salesChart");
  if (salesCtx) {
    try {
      charts.sales = new Chart(salesCtx.getContext("2d"), {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              label: "Vendas (R$ mil)",
              data: [1200, 1900, 3000, 5000, 2000, 3000],
              borderColor: "rgb(59, 130, 246)",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error creating sales chart:", error);
    }
  }

  // Category Chart
  const categoryCtx = document.getElementById("categoryChart");
  if (categoryCtx) {
    try {
      charts.category = new Chart(categoryCtx.getContext("2d"), {
        type: "doughnut",
        data: {
          labels: ["Eletrônicos", "Roupas", "Casa", "Esportes", "Livros"],
          datasets: [
            {
              data: [35, 25, 20, 15, 5],
              backgroundColor: [
                "rgb(59, 130, 246)",
                "rgb(16, 185, 129)",
                "rgb(245, 158, 11)",
                "rgb(139, 92, 246)",
                "rgb(236, 72, 153)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    } catch (error) {
      console.error("Error creating category chart:", error);
    }
  }
}

// Initialize analytics charts - Fixed to handle missing elements
function initAnalyticsCharts() {
  // Conversion Chart
  const conversionCtx = document.getElementById("conversionChart");
  if (conversionCtx && !charts.conversion) {
    try {
      charts.conversion = new Chart(conversionCtx.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Eletrônicos", "Roupas", "Casa", "Esportes", "Livros"],
          datasets: [
            {
              label: "Taxa de Conversão (%)",
              data: [12.5, 8.3, 15.7, 9.2, 22.1],
              backgroundColor: "rgba(59, 130, 246, 0.8)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 25,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error creating conversion chart:", error);
    }
  }

  // Ticket Chart
  const ticketCtx = document.getElementById("ticketChart");
  if (ticketCtx && !charts.ticket) {
    try {
      charts.ticket = new Chart(ticketCtx.getContext("2d"), {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              label: "Ticket Médio (R$)",
              data: [245, 289, 356, 423, 387, 445],
              borderColor: "rgb(16, 185, 129)",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error creating ticket chart:", error);
    }
  }
}

// Update statistics - Fixed to handle missing elements
function updateStats() {
  // This would typically fetch real-time data from an API
  // For demo purposes, we'll simulate some updates
  const totalRevenue = document.getElementById("totalRevenue");
  const todayOrders = document.getElementById("todayOrders");
  const activeSellers = document.getElementById("activeSellers");
  const avgRating = document.getElementById("avgRating");

  if (totalRevenue) totalRevenue.textContent = "R$ 2.847.392";
  if (todayOrders) todayOrders.textContent = "1,247";
  if (activeSellers) activeSellers.textContent = "2,847";
  if (avgRating) avgRating.textContent = "4.7/5.0";
}

// Start real-time updates - Fixed to handle errors gracefully
function startRealTimeUpdates() {
  setInterval(() => {
    try {
      // Simulate random updates
      if (inventoryData.length > 0) {
        const randomIndex = Math.floor(Math.random() * inventoryData.length);
        const randomChange = Math.floor(Math.random() * 10) - 5;

        inventoryData[randomIndex].quantity = Math.max(
          0,
          inventoryData[randomIndex].quantity + randomChange
        );
        inventoryData[randomIndex].lastUpdate = new Date()
          .toISOString()
          .split("T")[0];

        // Update status based on quantity
        if (inventoryData[randomIndex].quantity === 0) {
          inventoryData[randomIndex].status = "Esgotado";
        } else if (inventoryData[randomIndex].quantity <= 10) {
          inventoryData[randomIndex].status = "Pausado";
        } else {
          inventoryData[randomIndex].status = "Ativo";
        }

        // Only re-render if inventory tab is visible
        const inventoryTab = document.getElementById("inventoryTab");
        if (inventoryTab && !inventoryTab.classList.contains("hidden")) {
          renderTable();
        }
      }
    } catch (error) {
      console.error("Error in real-time update:", error);
    }
  }, 10000); // Update every 10 seconds
}

// Modal functions - Fixed to handle missing elements
function addNewItem() {
  const modal = document.getElementById("addItemModal");
  if (modal) {
    modal.classList.remove("hidden");
  }
}

function closeModal() {
  const modal = document.getElementById("addItemModal");
  const form = document.getElementById("addItemForm");
  if (modal) modal.classList.add("hidden");
  if (form) form.reset();
}

// Utility functions - Fixed to handle missing elements
function showToast(message, type = "success") {
  const toast = document.getElementById("notificationToast");
  const toastMessage = document.getElementById("toastMessage");

  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg notification z-50 ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    } text-white`;

    toast.classList.remove("hidden");

    setTimeout(() => {
      toast.classList.add("hidden");
    }, 3000);
  }
}

// Action functions - All fixed to handle errors gracefully
function editItem(id) {
  try {
    const item = inventoryData.find((item) => item.id === id);
    if (item) {
      const newPrice = prompt(`Editar preço para ${item.name}:`, item.price);
      if (newPrice !== null && !isNaN(newPrice) && parseFloat(newPrice) >= 0) {
        item.price = parseFloat(newPrice);
        item.lastUpdate = new Date().toISOString().split("T")[0];
        renderTable();
        showToast("Preço atualizado com sucesso!");
      }
    }
  } catch (error) {
    showToast("Erro ao editar item", "error");
  }
}

function viewAnalytics(id) {
  showToast("Abrindo analytics do produto...", "success");
}

function deleteItem(id) {
  try {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      inventoryData = inventoryData.filter((item) => item.id !== id);
      renderTable();
      showToast("Produto excluído com sucesso!");
    }
  } catch (error) {
    showToast("Erro ao excluir item", "error");
  }
}

function viewOrder(id) {
  showToast(`Visualizando pedido #${id}...`);
}

function trackOrder(id) {
  showToast(`Rastreando pedido #${id}...`);
}

function viewSeller(id) {
  showToast("Abrindo perfil do vendedor...");
}

function contactSeller(id) {
  showToast("Abrindo chat com vendedor...");
}

function addNewSeller() {
  showToast("Funcionalidade de aprovação de vendedor em desenvolvimento...");
}

// Bulk actions - All fixed to handle errors and missing elements
function bulkImport() {
  showToast("Funcionalidade de importação CSV em desenvolvimento...");
}

function bulkUpdatePrice() {
  try {
    if (selectedItems.size === 0) return;
    const newPrice = prompt("Digite o novo preço para os itens selecionados:");
    if (newPrice && !isNaN(newPrice) && parseFloat(newPrice) >= 0) {
      selectedItems.forEach((id) => {
        const item = inventoryData.find((item) => item.id === id);
        if (item) {
          item.price = parseFloat(newPrice);
          item.lastUpdate = new Date().toISOString().split("T")[0];
        }
      });
      renderTable();
      showToast(`Preços atualizados para ${selectedItems.size} itens!`);
      selectedItems.clear();
      const bulkActions = document.getElementById("bulkActions");
      if (bulkActions) bulkActions.classList.add("hidden");
    }
  } catch (error) {
    showToast("Erro ao atualizar preços", "error");
  }
}

function bulkUpdateStock() {
  try {
    if (selectedItems.size === 0) return;
    const newStock = prompt(
      "Digite a nova quantidade para os itens selecionados:"
    );
    if (newStock && !isNaN(newStock) && parseInt(newStock) >= 0) {
      selectedItems.forEach((id) => {
        const item = inventoryData.find((item) => item.id === id);
        if (item) {
          item.quantity = parseInt(newStock);
          item.lastUpdate = new Date().toISOString().split("T")[0];
          item.status =
            item.quantity === 0
              ? "Esgotado"
              : item.quantity <= 10
              ? "Pausado"
              : "Ativo";
        }
      });
      renderTable();
      showToast(`Estoque atualizado para ${selectedItems.size} itens!`);
      selectedItems.clear();
      const bulkActions = document.getElementById("bulkActions");
      if (bulkActions) bulkActions.classList.add("hidden");
    }
  } catch (error) {
    showToast("Erro ao atualizar estoque", "error");
  }
}

function bulkPause() {
  try {
    if (selectedItems.size === 0) return;
    selectedItems.forEach((id) => {
      const item = inventoryData.find((item) => item.id === id);
      if (item) {
        item.status = "Pausado";
        item.lastUpdate = new Date().toISOString().split("T")[0];
      }
    });
    renderTable();
    showToast(`${selectedItems.size} itens pausados!`);
    selectedItems.clear();
    const bulkActions = document.getElementById("bulkActions");
    if (bulkActions) bulkActions.classList.add("hidden");
  } catch (error) {
    showToast("Erro ao pausar itens", "error");
  }
}

function bulkDelete() {
  try {
    if (selectedItems.size === 0) return;
    if (
      confirm(`Tem certeza que deseja excluir ${selectedItems.size} itens?`)
    ) {
      inventoryData = inventoryData.filter(
        (item) => !selectedItems.has(item.id)
      );
      renderTable();
      showToast(`${selectedItems.size} itens excluídos!`);
      selectedItems.clear();
      const bulkActions = document.getElementById("bulkActions");
      if (bulkActions) bulkActions.classList.add("hidden");
    }
  } catch (error) {
    showToast("Erro ao excluir itens", "error");
  }
}

// Form submission - Fixed to handle missing elements and validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addItemForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      try {
        const productName = document.getElementById("productName");
        const productSKU = document.getElementById("productSKU");
        const productCategory = document.getElementById("productCategory");
        const productSeller = document.getElementById("productSeller");
        const productPrice = document.getElementById("productPrice");
        const productQuantity = document.getElementById("productQuantity");
        const productDescription =
          document.getElementById("productDescription");

        if (
          !productName ||
          !productSKU ||
          !productCategory ||
          !productSeller ||
          !productPrice ||
          !productQuantity
        ) {
          showToast("Erro: campos obrigatórios não encontrados", "error");
          return;
        }

        const newItem = {
          id: Math.max(...inventoryData.map((item) => item.id), 0) + 1,
          name: productName.value,
          sku: productSKU.value,
          category: productCategory.value,
          seller: productSeller.value,
          quantity: parseInt(productQuantity.value),
          price: parseFloat(productPrice.value),
          sales: 0,
          rating: 0,
          status:
            parseInt(productQuantity.value) === 0
              ? "Esgotado"
              : parseInt(productQuantity.value) <= 10
              ? "Pausado"
              : "Ativo",
          lastUpdate: new Date().toISOString().split("T")[0],
          description: productDescription ? productDescription.value : "",
        };

        inventoryData.push(newItem);
        renderTable();
        closeModal();
        showToast("Produto adicionado com sucesso!");
      } catch (error) {
        showToast("Erro ao adicionar produto", "error");
      }
    });
  }
});

// Initialize when page loads - Fixed to handle errors
window.addEventListener("load", function () {
  try {
    init();
  } catch (error) {
    console.error("Error initializing application:", error);
  }
});

// Close notifications when clicking outside - Fixed to handle missing elements
document.addEventListener("click", function (event) {
  const notificationPanel = document.getElementById("notificationPanel");
  if (notificationPanel && !notificationPanel.contains(event.target)) {
    const isNotificationButton = event.target.closest(
      'button[onclick*="toggleNotifications"]'
    );
    if (!isNotificationButton) {
      notificationPanel.classList.add("hidden");
    }
  }
});

// Close modal when clicking outside - Added for better UX
document.addEventListener("click", function (event) {
  const modal = document.getElementById("addItemModal");
  if (modal && event.target === modal) {
    closeModal();
  }
});

// Keyboard shortcuts - Added for better UX
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("addItemModal");
    const notificationPanel = document.getElementById("notificationPanel");

    if (modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
    if (notificationPanel && !notificationPanel.classList.contains("hidden")) {
      notificationPanel.classList.add("hidden");
    }
  }
});