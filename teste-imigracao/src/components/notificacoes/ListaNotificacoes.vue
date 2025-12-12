<template>
  <div class="flex-1 overflow-y-auto space-y-4">
    <ItemNotificacao
     class='text-gray-400'
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
      v-bind="notificacao"
    >
      <template #acoes>
        <button class="text-gray-400 hover:text-gray-600 p-1" title="Mais opções">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </template>
    </ItemNotificacao>
  </div>
</template>

<script setup>
import ItemNotificacao from './ItemNotificacao.vue'

const notificacoes = [
  {
    id: 1,
    titulo: 'Pedido #12345 atrasado',
    descricao: 'O pedido #12345 para o cliente Empresa ABC está com 2 dias de atraso.',
    categoria: 'operational',
    prioridade: 'high',
    status: 'unread'
  },
  {
    id: 2,
    titulo: 'Produto esgotado: Componente XYZ',
    descricao: 'Componente XYZ está zerado no estoque. Há 5 pedidos pendentes.',
    categoria: 'stock',
    prioridade: 'high',
    status: 'urgent'
  },
  {
    id: 3,
    titulo: 'Novo comentário no pedido #12345',
    descricao: 'O cliente deixou um comentário no pedido #12345.',
    categoria: 'customer',
    prioridade: 'medium',
    status: 'read'
  },
  {
    id: 4,
    titulo: 'Atualização de sistema agendada',
    descricao: 'A atualização do sistema ocorrerá no dia 15/10 às 22h.',
    categoria: 'system',
    prioridade: 'low',
    status: 'unread'
  }
]
</script>

<style scoped>
</style>
