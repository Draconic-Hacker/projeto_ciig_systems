<template>
  <div 
    :class="[
      'notification-item border-b border-gray-200 p-4 bg-white cursor-pointer',
      { 'notification-unread': !notification.read },
      { 'notification-urgent': notification.priority === 'high' }
    ]"
    @click="$emit('show-detail', notification)"
  >
    <div class="flex justify-between items-start">
      <div class="flex items-start space-x-3">
        <div class="flex-shrink-0 mt-1">
          <span 
            :class="[
              'status-dot',
              { 'status-unread': !notification.read },
              { 'status-read': notification.read },
              { 'status-urgent': notification.priority === 'high' },
              { 'status-pending': notification.status === 'pending' }
            ]"
          ></span>
        </div>
        <div>
          <div class="flex items-center mb-1">
            <span :class="['category-pill', `category-${notification.category}`]">
              {{ getCategoryName(notification.category) }}
            </span>
            <span :class="['category-pill', `priority-${notification.priority}`]">
              {{ getPriorityName(notification.priority) }}
            </span>
          </div>
          <h3 class="text-sm font-semibold text-gray-900">{{ notification.title }}</h3>
          <p class="text-sm text-gray-600 mt-1 line-clamp-2">{{ notification.description }}</p>
          <div class="flex items-center mt-2 text-xs text-gray-500">
            <span>{{ formatDate(notification.date) }}</span>
            <span class="mx-2">•</span>
            <span>{{ notification.entityType }}</span>
            <span class="mx-2">•</span>
            <span>{{ notification.responsible }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button 
          v-if="!notification.read"
          @click.stop="$emit('mark-read', notification.id)"
          class="text-gray-400 hover:text-gray-600 p-1"
          title="Marcar como lida"
        >
          <i class="fas fa-check"></i>
        </button>
        <button class="text-gray-400 hover:text-gray-600 p-1" title="Mais opções">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  notification: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['mark-read', 'show-detail']);

const categories = {
  operational: 'Operacional',
  stock: 'Estoque',
  financial: 'Financeira',
  logistics: 'Logística',
  compliance: 'Compliance',
  system: 'Sistema',
  collaboration: 'Colaboração'
};

const priorities = {
  high: 'Alta Prioridade',
  medium: 'Média Prioridade',
  low: 'Baixa Prioridade'
};

const getCategoryName = (category) => {
  return categories[category] || category;
};

const getPriorityName = (priority) => {
  return priorities[priority] || priority;
};

const formatDate = (date) => {
  // Implemente a formatação de data conforme necessário
  return date;
};
</script>

<style scoped>
.notification-item:hover {
  background-color: #f1f5f9;
}

.notification-unread {
  border-left: 4px solid #2563eb;
}

.notification-urgent {
  border-left: 4px solid #dc2626;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
}

.status-unread {
  background-color: #2563eb;
}

.status-read {
  background-color: #9ca3af;
}

.status-urgent {
  background-color: #dc2626;
}

.status-pending {
  background-color: #f59e0b;
}

.category-pill {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
}

.category-operational {
  background-color: #dbeafe;
  color: #1e40af;
}

.category-stock {
  background-color: #dcfce7;
  color: #166534;
}

.category-financial {
  background-color: #f3e8ff;
  color: #6b21a8;
}

.category-logistics {
  background-color: #fef3c7;
  color: #92400e;
}

.category-compliance {
  background-color: #fecaca;
  color: #991b1b;
}

.category-system {
  background-color: #e0e7ff;
  color: #3730a3;
}

.category-collaboration {
  background-color: #ffedd5;
  color: #9a3412;
}

.priority-high {
  background-color: #fee2e2;
  color: #b91c1c;
}

.priority-medium {
  background-color: #fef3c7;
  color: #92400e;
}

.priority-low {
  background-color: #e0f2fe;
  color: #0369a1;
}
</style>