<template>
  <div class="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Conteúdo Principal -->
    <div class="flex-1 flex flex-col">
      <TopNav />

      <main class="flex-1 overflow-y-auto p-6 space-y-6">
        <ProfileHeader @editProfile="openEditModal" />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PersonalInfo />
          <ProfessionalInfo />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <AccountSettings />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SupportSection />
          <SystemInfo />
        </div>
      </main>
    </div>

    <!-- Modal de Editar Perfil -->
    <EditProfileModal v-if="showEditModal" @close="closeEditModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Sidebar from '@/components/Layout/Sidebar.vue'
import TopNav from '@/components/Layout/TopNav.vue'

import ProfileHeader from '@/components/Profile/ProfileHeader.vue'
import PersonalInfo from '@/components/Profile/PersonalInfo.vue'
import ProfessionalInfo from '@/components/Profile/ProfessionalInfo.vue'
import RecentActivity from '@/components/Profile/RecentActivity.vue'
import AccountSettings from '@/components/Profile/AccountSettings.vue'
import SupportSection from '@/components/Profile/SupportSection.vue'
import SystemInfo from '@/components/Profile/SystemInfo.vue'
import EditProfileModal from '@/components/Profile/EditProfileModal.vue'

const showEditModal = ref(false)

const openEditModal = () => {
  showEditModal.value = true
}

const closeEditModal = () => {
  showEditModal.value = false
}
</script>

<style scoped>
</style>
