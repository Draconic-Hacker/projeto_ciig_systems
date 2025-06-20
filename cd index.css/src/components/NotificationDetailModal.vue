<template>
  <div 
    v-show="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-gray-200 p-4">
        <div class="flex items-center">
          <span :class="['category-pill', `category-${notification.category}`]">
            {{ getCategoryName(notification.category) }}
          </span>
          <span :class="['category-pill', `priority-${notification.priority}`]">
            {{ getPriorityName(notification.priority) }}
          </span>
        </div>
        <div class="flex items-center space-x-2">
          <button 
            @click="resolveNotification"
            class="text-sm bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded-lg flex items-center"
          >
            <i class="fas fa-check mr-2"></i> Resolver
          </button>
          <button 
            @click="delegateNotification"
            class="text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-lg flex items-center"
          >
            <i class="fas fa-user-plus mr-2"></i> Delegar
          </button>
          <button 
            @click="close"
            class="text-gray-400 hover:text-gray-600"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
      
      <!-- Modal Content -->
      <div class="flex-1 overflow-y-auto custom-scrollbar p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ notification.title }}</h2>
        
        <div class="flex items-center text-sm text-gray-500 mb-6">
          <span>{{ formatDate(notification.date) }}</span>
          <span class="mx-2">•</span>
          <span>{{ notification.entityType }}</span>
          <span class="mx-2">•</span>
          <span>{{ notification.responsible }}</span>
        </div>
        
        <div class="prose max-w-none text-gray-700">
          <p>{{ notification.description }}</p>
          
          <!-- Conteúdo detalhado da notificação -->
          <!-- Pode ser personalizado conforme o tipo de notificação -->
          
          <!-- Exemplo de mensagem de aviso -->
          <div v-if="notification.priority === 'high'" class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="fas fa-exclamation-triangle text-yellow-400"></i>
              </div>
              <div class="ml-3">
                <p class="text-sm text-yellow-700">
                  Esta notificação é de alta prioridade e requer atenção imediata.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Botões de ação -->
        <div class="mt-6 flex space-x-2">
          <button 
            v-for="action in notification.actions"
            :key="action.label"
            @click="handleAction(action)"
            class="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center"
          >
            <i :class="`fas fa-${action.icon} mr-2`"></i> {{ action.label }}
          </button>
        </div>
      </div>
      
      <!-- Rodapé do modal -->
      <div class="border-t border-gray-200 p-4 flex justify-end">
        <button 
          @click="close"
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  notification: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['close', 'resolve', 'delegate', 'action']);

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

const close = () => {
  emit('close');
};

const resolveNotification = () => {
  emit('resolve', props.notification.id);
};

const delegateNotification = () => {
  emit('delegate', props.notification.id);
};

const handleAction = (action) => {
  emit('action', { notificationId: props.notification.id, action });
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
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