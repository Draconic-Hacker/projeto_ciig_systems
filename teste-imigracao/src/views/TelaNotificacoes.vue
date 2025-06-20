<template>
  <div class="flex flex-col min-h-screen">
    <!-- Top Navigation -->
    <TopNav />

    <div class="flex flex-1">
      <!-- Sidebar Layout -->
      <Sidebar />

      <!-- Conteúdo Principal -->
      <main class="flex-1 bg-white dark:bg-gray-700 p-4 overflow-y-auto">
        <!-- Barra Superior -->
        <Card class="mb-4">
          <BarraSuperior @marcarTodasComoLidas="marcarTodas" />
        </Card>

        <!-- Filtros + Lista -->
        <div class="md:flex gap-4">
          <FiltroLateral class="hidden md:block" />
          <ListaNotificacoes @abrirModal="abrirDetalhes" />
        </div>

        <!-- Modal de Detalhes -->
        <ModalDetalhe :visivel="modalAberto" @fechar="fecharDetalhes">
          <h2 class="text-xl font-semibold text-gray-900 mb-2">Pedido #12345 atrasado</h2>
          <p class="text-gray-700 mb-4">
            O pedido #12345 para o cliente Empresa ABC está com 2 dias de atraso. É necessária ação imediata para resolução.
          </p>
          <EditorMensagem />
        </ModalDetalhe>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Layouts e utilitários
import TopNav from '@/components/layout/TopNav.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Card from '@/components/Common/Card.vue'

// Componentes de notificações
import FiltroLateral from '@/components/notificacoes/FiltroLateral.vue'
import BarraSuperior from '@/components/notificacoes/BarraSuperior.vue'
import ListaNotificacoes from '@/components/notificacoes/ListaNotificacoes.vue'
import ModalDetalhe from '@/components/notificacoes/ModalDetalhe.vue'
import EditorMensagem from '@/components/notificacoes/EditorMensagem.vue'

// Controle de modal
const modalAberto = ref(false)
const abrirDetalhes = () => (modalAberto.value = true)
const fecharDetalhes = () => (modalAberto.value = false)

// Placeholder: lógica de marcação
const marcarTodas = () => {
  alert('Todas as notificações foram marcadas como lidas!')
}
</script>

<style scoped>
</style>
