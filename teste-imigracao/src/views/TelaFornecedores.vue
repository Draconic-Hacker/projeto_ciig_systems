<template>
  <div class="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Conteúdo Principal -->
    <div class="flex-1 flex flex-col">
      <TopNav />

      <main class="flex-1 overflow-y-auto p-6 space-y-6">
        <PartnerFilters @filterChanged="setFilter" />
        <PartnerStats />
        <PartnerList :filter="activeFilter" @openPartner="openPartnerDetails" />
      </main>
    </div>

    <!-- Modal de Detalhes do Parceiro -->
    <PartnerModal
      v-if="selectedPartner"
      :partner="selectedPartner"
      @close="closePartnerModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Sidebar from '@/components/Layout/Sidebar.vue'
import TopNav from '@/components/Layout/TopNav.vue'

import PartnerFilters from '@/components/Partners/PartnerFilters.vue'
import PartnerStats from '@/components/Partners/PartnerStats.vue'
import PartnerList from '@/components/Partners/PartnerList.vue'
import PartnerModal from '@/components/Partners/PartnerModal.vue'

const activeFilter = ref('Todos')
const selectedPartner = ref(null)

const setFilter = (filter) => {
  activeFilter.value = filter
}

const openPartnerDetails = (partner) => {
  selectedPartner.value = partner
}

const closePartnerModal = () => {
  selectedPartner.value = null
}
</script>

<style scoped>
</style>
