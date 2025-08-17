<template>
  <!-- Header -->
  <header class="glass-effect bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg relative z-20">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center">
        <div class="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold logo-text">
          CIIG Systems Supply Chain
        </h1>
      </div>
      <div class="flex items-center space-x-4">
        <button class="relative p-2 rounded-full hover:bg-blue-700 transition" @click="notify">
          <i class="fas fa-bell"></i>
          <span
            class="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
        </button>
        <div class="relative">
          <button ref="profileBtn" class="flex items-center space-x-2 p-2 rounded-full hover:bg-blue-700 transition"
            type="button" @click="toggleProfileMenu">
            <div class="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-blue-900 font-bold">
              US
            </div>
            <span class="hidden md:inline">Usuário</span>
            <i class="fas fa-chevron-down text-xs"></i>
          </button>
          <div ref="profileMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
            v-show="showProfileMenu">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              <i class="fas fa-user mr-2"></i> Perfil
            </a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100" @click="openChangePasswordModal">
              <i class="fas fa-key mr-2"></i> Trocar Senha
            </a>
            <hr class="my-1" />
            <a href="#" class="block px-4 py-2 text-red-600 hover:bg-gray-100" @click="openLogoutModal">
              <i class="fas fa-sign-out-alt mr-2"></i> Deslogar
            </a>
            
            <LogoutModal 
            :visible="showLogoutModal" 
            @cancel="showLogoutModal = false" 
            @confirm="handleLogoutConfirm" />

            <ChangePasswordModal 
            :visible="showChangePasswordModal" 
            @cancel="showChangePasswordModal = false"
            @save="handleChangePasswordModal" />

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// import '@/assets/css/TelaHome.css';
import { ref, onMounted, onBeforeUnmount, inject } from 'vue';
import { useRouter } from 'vue-router';
import LogoutModal from '@/components/Common/LogoutModal.vue';
import ChangePasswordModal from '@/components/Common/ChangePasswordModal.vue'
const showToast = inject('showToast')

// showLogoutModal
const showLogoutModal = ref(false);
// showChangePasswordModal
const showChangePasswordModal = ref(false);
const router = useRouter();

function openLogoutModal() {
  showLogoutModal.value = true;
}

function openChangePasswordModal() {
  showChangePasswordModal.value = true;
}

function handleChangePasswordModal() {
  showChangePasswordModal.value = false;
  // Colocar aqui a Toast
  showToast('SenhaAlterada com Sucesso!', 'success')
}

function handleLogoutConfirm() {
  showLogoutModal.value = false;
  // Colocar aqui a Toast
  showToast('Logout realizado com sucesso!', 'success')
  router.push('/login')
}

// Show the ProfileMenu when the profile button is clicked
const showProfileMenu = ref(false);
const profileBtn = ref(null);
const profileMenu = ref(null);

function toggleProfileMenu(event) {
  showProfileMenu.value = !showProfileMenu.value;
}

function handleClickOutside(event) {
  if (
    profileMenu.value &&
    !profileMenu.value.contains(event.target) &&
    profileBtn.value &&
    !profileBtn.value.contains(event.target)
  ) {
    showProfileMenu.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

function notify() {
  alert('Você tem 3 novas notificações!');
}
</script>

<style scoped>
.logo-text {
  background: linear-gradient(90deg, #ffffff, #a3c2ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
.glass-effect {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>