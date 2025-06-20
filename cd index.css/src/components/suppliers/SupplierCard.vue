<template>
  <div 
    class="partner-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
    @click="$emit('show-details', supplier)"
  >
    <div class="p-5">
      <div class="flex items-center mb-4">
        <div 
          class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
          :style="{ backgroundColor: supplier.logoColor }"
        >
          {{ supplier.logo }}
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ supplier.name }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ supplier.location }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between mb-3">
        <div class="flex flex-wrap gap-2">
          <span 
            v-if="supplier.status === 'active'"
            class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
          >
            Ativo
          </span>
          <span 
            v-else
            class="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
          >
            Inativo
          </span>
          
          <span 
            v-if="supplier.isPremium"
            class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300"
          >
            Premium
          </span>
          
          <span 
            v-if="supplier.isNew"
            class="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300"
          >
            Novo
          </span>
        </div>
      </div>
      <div class="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <span>Ingressou: {{ formatDate(supplier.joinDate) }}</span>
        <span>{{ supplier.deals }} negócios</span>
      </div>
      <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
        <button 
          class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm font-medium"
          @click.stop="$emit('show-details', supplier)"
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  supplier: {
    type: Object,
    required: true
  }
});

defineEmits(['show-details']);

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};
</script>

<style scoped>
.partner-card:hover {
  transform: translateY(-5px);
}
</style>