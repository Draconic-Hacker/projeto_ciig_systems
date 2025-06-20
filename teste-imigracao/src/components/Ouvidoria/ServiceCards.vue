<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
    <div
      v-for="card in cards"
      :key="card.id"
      @click="$emit('openModal', card.modalKey)"
      :class="['card-hover', card.bg, card.border, 'rounded-lg', 'shadow-md', 'p-6', 'cursor-pointer']"
    >
      <div class="flex items-center mb-4">
        <div :class="['p-2', card.iconBg, 'rounded-lg']">
          <component :is="card.icon" class="h-6 w-6" />
        </div>
        <h3 class="ml-3 text-lg font-semibold text-gray-800 dark:text-white">{{ card.title }}</h3>
      </div>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ card.description }}</p>
      <button class="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition">
        {{ card.buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

// Ícones como componentes inline
const ChatIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'text-blue-500 dark:text-blue-300' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' })
])

const UserIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'text-green-500 dark:text-green-300' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
])

const SupplierIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'text-purple-500 dark:text-purple-300' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
])

const SupportIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', class: 'text-amber-500 dark:text-amber-300' }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
])

const cards = [
  {
    id: 1,
    title: 'Chat Automático',
    description: 'Tire suas dúvidas rapidamente com nosso assistente virtual.',
    buttonText: 'Iniciar Chat',
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-l-4 border-blue-500',
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    icon: ChatIcon,
    modalKey: 'autoChat'
  },
  {
    id: 2,
    title: 'Chat com Funcionário',
    description: 'Fale diretamente com um de nossos atendentes especializados.',
    buttonText: 'Falar com Atendente',
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-l-4 border-green-500',
    iconBg: 'bg-green-100 dark:bg-green-900',
    icon: UserIcon,
    modalKey: 'humanChat'
  },
  {
    id: 3,
    title: 'Fornecedores',
    description: 'Acesse diretamente o suporte do fornecedor desejado.',
    buttonText: 'Selecionar Fornecedor',
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-l-4 border-purple-500',
    iconBg: 'bg-purple-100 dark:bg-purple-900',
    icon: SupplierIcon,
    modalKey: 'supplier'
  },
  {
    id: 4,
    title: 'Apoio ao Servidor',
    description: 'Suporte técnico para funcionários do sistema CIIG.',
    buttonText: 'Acessar Suporte',
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-l-4 border-amber-500',
    iconBg: 'bg-amber-100 dark:bg-amber-900',
    icon: SupportIcon,
    modalKey: 'employeeSupport'
  }
]
</script>

<style scoped>
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
.dark .card-hover:hover {
  box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.05);
}
</style>
