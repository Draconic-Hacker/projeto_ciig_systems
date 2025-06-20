<template>
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
    :class="{ 'opacity-0': !isOpen, 'opacity-100': isOpen }"
    v-show="isOpen"
    @click.self="$emit('close')"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transition-colors duration-300">
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <div class="flex items-center">
            <div 
              class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4"
              :style="{ backgroundColor: supplier.logoColor }"
            >
              {{ supplier.logo }}
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">{{ supplier.name }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ supplier.location }}</p>
            </div>
          </div>
          <button 
            @click="$emit('close')"
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <InfoBox title="Status">
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
              class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 ml-2"
            >
              Premium
            </span>
          </InfoBox>
          
          <InfoBox title="Data de Ingresso">
            {{ formatDate(supplier.joinDate) }}
          </InfoBox>
          
          <InfoBox title="Total de Negócios">
            {{ supplier.deals }}
          </InfoBox>
          
          <InfoBox title="Valor Total">
            {{ formatCurrency(supplier.totalValue) }}
          </InfoBox>
        </div>

        <div class="mb-6">
          <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">Histórico de Negócios</h4>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden transition-colors duration-300">
            <table class="min-w-full">
              <thead>
                <tr class="bg-gray-200 dark:bg-gray-600 text-left">
                  <th class="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Data</th>
                  <th class="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Descrição</th>
                  <th class="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Valor</th>
                  <th class="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(transaction, index) in supplier.transactions"
                  :key="index"
                  class="border-b border-gray-200 dark:border-gray-700"
                >
                  <td class="py-3 px-4 text-gray-800 dark:text-gray-200">{{ formatDate(transaction.date) }}</td>
                  <td class="py-3 px-4 text-gray-800 dark:text-gray-200">{{ transaction.description }}</td>
                  <td class="py-3 px-4 text-gray-800 dark:text-gray-200">{{ formatCurrency(transaction.value) }}</td>
                  <td 
                    :class="[
                      'py-3 px-4',
                      transaction.status === 'Concluído' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                    ]"
                  >
                    {{ transaction.status }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mb-6">
          <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">Informações de Contato</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactInfo icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
              {{ supplier.email }}
            </ContactInfo>
            
            <ContactInfo icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
              {{ supplier.phone }}
            </ContactInfo>
            
            <ContactInfo icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9">
              <a :href="`https://${supplier.website}`" target="_blank" class="text-primary-600 dark:text-primary-400 hover:underline">
                {{ supplier.website }}
              </a>
            </ContactInfo>
            
            <ContactInfo icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
              {{ supplier.contactPerson }}
            </ContactInfo>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            @click="$emit('close')"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Fechar
          </button>
          <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
            Editar Parceiro
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import InfoBox from '@/components/suppliers/InfoBox.vue';
import ContactInfo from '@/components/suppliers/ContactInfo.vue';

const props = defineProps({
  supplier: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};
</script>