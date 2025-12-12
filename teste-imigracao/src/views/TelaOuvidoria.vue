<template>
  <div class="font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow container mx-auto px-4 py-8">
      <ServiceCards @openModal="openModal" />
      <FaqSection />
    </main>

    <Footer />

    <AutoChatModal v-if="activeModal === 'autoChat'" @close="closeModal" />
    <HumanChatModal v-if="activeModal === 'humanChat'" @close="closeModal" />
    <SupplierModal v-if="activeModal === 'supplier'" @close="closeModal" @success="showSuccess" />
    <EmployeeSupportModal v-if="activeModal === 'employeeSupport'" @close="closeModal" @success="showSuccess" />
    <SuccessModal v-if="activeModal === 'success'" :title="successTitle" :message="successMessage" @close="closeModal" />
  </div>
</template>

<script setup>
import AutoChatModal from '@/components/Ouvidoria/AutoChatModal.vue'
import EmployeeSupportModal from '@/components/Ouvidoria/EmployeeSupportModal.vue'
import FaqSection from '@/components/Ouvidoria/FaqSection.vue'
import Footer from '@/components/Ouvidoria/Footer.vue'
import Header from '@/components/Ouvidoria/Header.vue'
import HumanChatModal from '@/components/Ouvidoria/HumanChatModal.vue'
import ServiceCards from '@/components/Ouvidoria/ServiceCards.vue'
import SuccessModal from '@/components/Ouvidoria/SuccesModal.vue'
import SupplierModal from '@/components/Ouvidoria/SupplierModal.vue'

import { ref } from 'vue'

const activeModal = ref(null)
const successTitle = ref('')
const successMessage = ref('')

const openModal = (modalKey) => {
  activeModal.value = modalKey
}

const closeModal = () => {
  activeModal.value = null
}

const showSuccess = (message = 'Solicitação realizada com sucesso!') => {
  successTitle.value = 'Sucesso'
  successMessage.value = message
  activeModal.value = 'success'
}
</script>

<style scoped>
</style>
