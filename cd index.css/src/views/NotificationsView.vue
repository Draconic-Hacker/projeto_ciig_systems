<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center">
          <div class="text-blue-700 font-bold text-2xl mr-2">CIIG</div>
          <div class="text-gray-700 font-semibold text-xl">Systems</div>
        </div>
        <div class="flex items-center space-x-4">
          <button class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-search text-lg"></i>
          </button>
          <button class="text-gray-500 hover:text-gray-700 relative">
            <i class="fas fa-bell text-lg"></i>
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ unreadCount }}
            </span>
          </button>
          <div class="flex items-center">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="User" class="w-8 h-8 rounded-full">
            <span class="ml-2 text-gray-700 font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="flex-1 flex">
      <!-- Sidebar Filter Panel -->
      <FilterSidebar 
        @apply-filters="applyFilters"
      />
      
      <!-- Notification List Area -->
      <div class="flex-1 flex flex-col">
        <NotificationHeader 
          @toggle-mobile-filters="toggleMobileFilters"
          @mark-all-read="markAllAsRead"
        />
        
        <NotificationList 
          :notifications="filteredNotifications"
          @mark-read="markAsRead"
          @show-detail="showNotificationDetail"
        />
      </div>
    </div>
    
    <!-- Notification Detail Modal -->
    <NotificationDetailModal 
      :is-open="isDetailModalOpen"
      :notification="selectedNotification"
      @close="closeDetailModal"
      @resolve="resolveNotification"
      @delegate="delegateNotification"
      @action="handleNotificationAction"
    />
    
    <!-- Mobile Filter Sidebar -->
    <MobileFilterSidebar 
      :is-open="isMobileFiltersOpen"
      @close="closeMobileFilters"
      @apply-filters="applyFilters"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import NotificationHeader from '@/components/notifications/NotificationHeader.vue';
import NotificationList from '@/components/notifications/NotificationList.vue';
import NotificationDetailModal from '@/components/notifications/NotificationDetailModal.vue';
import FilterSidebar from '@/components/notifications/FilterSidebar.vue';
import MobileFilterSidebar from '@/components/notifications/MobileFilterSidebar.vue';

// Estado
const notifications = ref([
  {
    id: 1,
    title: 'Pedido #12345 atrasado',
    description: 'O pedido #12345 para o cliente Empresa ABC está com 2 dias de atraso. É necessária ação imediata para resolução.',
    category: 'operational',
    priority: 'high',
    status: 'unread',
    date: 'Hoje, 10:45',
    entityType: 'Pedido',
    responsible: 'Equipe Logística',
    read: false,
    actions: [
      { label: 'Ver Pedido', icon: 'box', action: 'view_order' },
      { label: 'Contatar Cliente', icon: 'phone', action: 'contact_client' }
    ]
  },
  // Adicione mais notificações conforme necessário
]);

const filters = ref({
  searchTerm: '',
  categories: ['operational', 'stock', 'financial', 'logistics', 'compliance', 'system', 'collaboration'],
  statuses: ['unread', 'urgent', 'pending'],
  dateOption: 'today',
  priorities: ['high', 'medium', 'low']
});

const isDetailModalOpen = ref(false);
const selectedNotification = ref(null);
const isMobileFiltersOpen = ref(false);

// Computed
const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length;
});

const filteredNotifications = computed(() => {
  return notifications.value.filter(notification => {
    // Filtro por termo de busca
    const matchesSearch = filters.value.searchTerm === '' || 
      notification.title.toLowerCase().includes(filters.value.searchTerm.toLowerCase()) || 
      notification.description.toLowerCase().includes(filters.value.searchTerm.toLowerCase());
    
    // Filtro por categoria
    const matchesCategory = filters.value.categories.includes(notification.category);
    
    // Filtro por status
    const matchesStatus = 
      (filters.value.statuses.includes('unread') && !notification.read) ||
      (filters.value.statuses.includes('read') && notification.read) ||
      (filters.value.statuses.includes('urgent') && notification.priority === 'high') ||
      (filters.value.statuses.includes('pending') && notification.status === 'pending');
    
    // Filtro por prioridade
    const matchesPriority = filters.value.priorities.includes(notification.priority);
    
    return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
  });
});

// Métodos
const toggleMobileFilters = () => {
  isMobileFiltersOpen.value = !isMobileFiltersOpen.value;
};

const closeMobileFilters = () => {
  isMobileFiltersOpen.value = false;
};

const applyFilters = (newFilters) => {
  filters.value = { ...filters.value, ...newFilters };
  closeMobileFilters();
};

const markAsRead = (id) => {
  const notification = notifications.value.find(n => n.id === id);
  if (notification) {
    notification.read = true;
  }
};

const markAllAsRead = () => {
  notifications.value.forEach(notification => {
    notification.read = true;
  });
};

const showNotificationDetail = (notification) => {
  selectedNotification.value = notification;
  isDetailModalOpen.value = true;
  
  // Marcar como lida ao abrir
  if (!notification.read) {
    markAsRead(notification.id);
  }
};

const closeDetailModal = () => {
  isDetailModalOpen.value = false;
};

const resolveNotification = (id) => {
  const notification = notifications.value.find(n => n.id === id);
  if (notification) {
    notification.status = 'resolved';
  }
  closeDetailModal();
};

const delegateNotification = (id) => {
  // Implemente a lógica de delegação
  alert(`Notificação ${id} delegada para outro usuário`);
};

const handleNotificationAction = ({ notificationId, action }) => {
  // Implemente ações específicas
  alert(`Ação ${action.action} executada para notificação ${notificationId}`);
};

// Inicialização
onMounted(() => {
  // Carregar notificações da API se necessário
});
</script>

<style scoped>
/* Estilos globais podem ficar aqui */
</style>