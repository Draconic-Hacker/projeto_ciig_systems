<template>
  <div>
    <!-- Mobile Filter Sidebar -->
    <div
      id="mobile-filter-sidebar"
      :class="['fixed inset-0 bg-black bg-opacity-50 z-40', { hidden: !showMobileFilter }]"
    >
      <div
        class="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-lg transform transition-transform duration-300"
        :class="showMobileFilter ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="p-4">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-800">Filtros</h2>
            <button @click="closeMobileFilter" class="text-gray-400 hover:text-gray-600">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Search -->
          <div class="mb-6">
            <div class="relative">
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Buscar notificações..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <i class="fas fa-search text-gray-400"></i>
              </div>
            </div>
          </div>

          <!-- Filter by Category -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-700 mb-2">Categoria</h3>
            <div class="space-y-2">
              <label class="flex items-center" v-for="cat in categories" :key="cat.id">
                <input
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-blue-600"
                  v-model="cat.checked"
                />
                <span class="ml-2 text-sm text-gray-700">{{ cat.name }}</span>
              </label>
            </div>
          </div>

          <!-- Apply Filters Button -->
          <button
            @click="applyFilters"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>

    <!-- Notification List -->
    <div>
      <button
        id="filter-toggle-btn"
        @click="openMobileFilter"
        class="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Abrir filtros
      </button>

      <input
        id="search-input"
        v-model="searchTerm"
        placeholder="Buscar notificações..."
        class="border border-gray-300 rounded px-3 py-2 mb-4 w-full max-w-md"
      />

      <div>
        <div
          v-for="notification in filteredNotifications"
          :key="notification.id"
          class="notification-item border-b border-gray-200 p-4 bg-white cursor-pointer"
          :class="{
            'notification-unread': !notification.read
          }"
          @click="openNotification(notification)"
        >
          <div class="flex justify-between items-start">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1">
                <span
                  class="status-dot"
                  :class="notification.read ? 'status-read' : 'status-unread'"
                ></span>
              </div>
              <div>
                <div class="flex items-center mb-1">
                  <span
                    class="category-pill"
                    :class="categoryClasses[notification.category]"
                  >
                    {{ notification.category }}
                  </span>
                  <span
                    class="category-pill"
                    :class="priorityClasses[notification.priority]"
                  >
                    {{ notification.priority }}
                  </span>
                </div>
                <h3 class="text-sm font-semibold text-gray-900">
                  {{ notification.title }}
                </h3>
                <p class="text-sm text-gray-600 mt-1 line-clamp-2">
                  {{ notification.content }}
                </p>
                <div class="flex items-center mt-2 text-xs text-gray-500">
                  <span>{{ notification.date }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ notification.type }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ notification.team }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <button
                class="text-gray-400 hover:text-gray-600 p-1"
                title="Mais opções"
                @click.stop="showOptions(notification)"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notification Detail Modal -->
    <div
      v-if="selectedNotification"
      id="notification-detail-modal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
      >
        <!-- Modal Header -->
        <div
          class="flex items-center justify-between border-b border-gray-200 p-4"
        >
          <div class="flex items-center">
            <span
              class="category-pill category-operational mr-2"
              >Operacional</span
            >
            <span class="category-pill priority-high">Alta Prioridade</span>
          </div>
          <div class="flex items-center space-x-2">
            <button
              id="notification-resolve-btn"
              class="text-sm bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-lg flex items-center"
              @click="resolveNotification"
            >
              <i class="fas fa-check mr-2"></i> Resolver
            </button>
            <button
              id="notification-delegate-btn"
              class="text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-lg flex items-center"
              @click="delegateNotification"
            >
              <i class="fas fa-user-plus mr-2"></i> Delegar
            </button>
            <button
              id="notification-close-btn"
              class="text-gray-400 hover:text-gray-600"
              @click="closeNotification"
            >
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="flex-1 overflow-y-auto custom-scrollbar p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-2">
            {{ selectedNotification.title }}
          </h2>

          <div class="flex items-center text-sm text-gray-500 mb-6">
            <span>{{ selectedNotification.date }}</span>
            <span class="mx-2">•</span>
            <span>{{ selectedNotification.type }}</span>
            <span class="mx-2">•</span>
            <span>{{ selectedNotification.team }}</span>
          </div>

          <div class="prose max-w-none text-gray-700" v-html="selectedNotification.details"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showMobileFilter = ref(false)
const searchTerm = ref('')
const selectedNotification = ref(null)

const categories = ref([
  { id: 1, name: 'Operacional', checked: true },
  { id: 2, name: 'Estoque', checked: true },
  { id: 3, name: 'Financeira', checked: true },
  { id: 4, name: 'Logística', checked: true },
  { id: 5, name: 'Compliance', checked: true },
  { id: 6, name: 'Sistema', checked: true },
  { id: 7, name: 'Colaboração', checked: true },
])

const notifications = ref([
  {
    id: 8,
    read: true,
    category: 'Estoque',
    priority: 'Baixa Prioridade',
    title: 'Novo lote de produto disponível: Produto ABC',
    content: 'Um novo lote do Produto ABC (SKU: 123456) foi recebido e está disponível no estoque. Quantidade: 500 unidades.',
    date: '12/07/2023, 11:15',
    type: 'Produto',
    team: 'Equipe de Estoque',
    details: `
      <p>Detalhes completos do produto ABC...</p>
    `,
  },
  {
    id: 12345,
    read: false,
    category: 'Operacional',
    priority: 'Alta Prioridade',
    title: 'Pedido #12345 atrasado',
    content: 'O pedido está atrasado, ação imediata necessária.',
    date: 'Hoje, 10:45',
    type: 'Pedido',
    team: 'Equipe Logística',
    details: `
      <p>O pedido #12345 para o cliente Empresa ABC está com 2 dias de atraso. É necessária ação imediata para resolução.</p>
      <h3 class="text-lg font-medium mt-6 mb-2">Detalhes do Pedido</h3>
      <ul>
        <li><strong>Cliente:</strong> Empresa ABC Ltda.</li>
        <li><strong>Data do Pedido:</strong> 10/07/2023</li>
        <li><strong>Data Prevista de Entrega:</strong> 13/07/2023</li>
        <li><strong>Status Atual:</strong> Em separação</li>
        <li><strong>Motivo do Atraso:</strong> Falta de estoque do item XYZ-789</li>
      </ul>
      <h3 class="text-lg font-medium mt-6 mb-2">Ações Recomendadas</h3>
      <ol>
        <li>Verificar disponibilidade do item XYZ-789 em outros armazéns</li>
        <li>Contatar o cliente para informar sobre o atraso</li>
        <li>Avaliar possibilidade de entrega parcial dos itens disponíveis</li>
        <li>Priorizar a expedição assim que o item estiver disponível</li>
      </ol>
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <div class="flex">
          <div class="flex-shrink-0">
            <i class="fas fa-exclamation-triangle text-yellow-400"></i>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              Este cliente é classificado como VIP e possui SLA de entrega contratual. O não cumprimento pode gerar penalidades financeiras.
            </p>
          </div>
        </div>
      </div>
    `,
  },
])

const categoryClasses = {
  Operacional: 'category-operational',
  Estoque: 'category-stock',
  Financeira: 'category-financial',
  Logística: 'category-logistics',
  Compliance: 'category-compliance',
  Sistema: 'category-system',
  Colaboração: 'category-collaboration',
}

const priorityClasses = {
  'Alta Prioridade': 'priority-high',
  'Baixa Prioridade': 'priority-low',
  'Prioridade Média': 'priority-medium',
}

function openMobileFilter() {
  showMobileFilter.value = true
  document.body.style.overflow = 'hidden'
}

function closeMobileFilter() {
  showMobileFilter.value = false
  document.body.style.overflow = 'auto'
}

function applyFilters() {
  // Aqui você pode implementar a lógica para aplicar os filtros baseados em categorias checked
  alert('Filtros aplicados! (implemente a lógica)')
}

const filteredNotifications = computed(() => {
  let filtered = notifications.value

  // Filtrar pela busca
  if (searchTerm.value.trim()) {
    filtered = filtered.filter((n) => {
      const search = searchTerm.value.toLowerCase()
      return (
        n.title.toLowerCase().includes(search) ||
        n.content.toLowerCase().includes(search)
      )
    })
  }

  // Filtrar pelas categorias marcadas
  const checkedCategories = categories.value
    .filter((c) => c.checked)
    .map((c) => c.name)

  filtered = filtered.filter((n) => checkedCategories.includes(n.category))

  return filtered
})

function openNotification(notification) {
  selectedNotification.value = notification
  document.body.style.overflow = 'hidden'
}

function closeNotification() {
  selectedNotification.value = null
  document.body.style.overflow = 'auto'
}

function resolveNotification() {
  alert('Notificação marcada como resolvida!')
}

function delegateNotification() {
  alert('Abrir modal de delegação para outro usuário ou equipe')
}

function showOptions(notification) {
  alert('Mostrar opções adicionais para a notificação: ' + notification.title)
}
</script>

<style scoped>
.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
}
.status-read {
  background-color: #9ca3af; /* gray-400 */
}
.status-unread {
  background-color: #3b82f6; /* blue-500 */
}
.category-pill {
  display: inline-block;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}
.category-operational {
  background-color: #6366f1; /* indigo-500 */
}
.category-stock {
  background-color: #10b981; /* emerald-500 */
}
.category-financial {
  background-color: #f59e0b; /* amber-500 */
}
.category-logistics {
  background-color: #3b82f6; /* blue-500 */
}
.category-compliance {
  background-color: #ef4444; /* red-500 */
}
.category-system {
  background-color: #8b5cf6; /* violet-500 */
}
.category-collaboration {
  background-color: #ec4899; /* pink-500 */
}
.priority-high {
  background-color: #dc2626; /* red-600 */
}
.priority-medium {
  background-color: #f59e0b; /* amber-500 */
}
.priority-low {
  background-color: #10b981; /* emerald-500 */
}

/* Exemplo para scrollbar customizada */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #a1a1aa; /* gray-400 */
  border-radius: 3px;
}

/* Scrollbar para Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #a1a1aa transparent;
}
</style>