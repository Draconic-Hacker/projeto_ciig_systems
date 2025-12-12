<template>
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-ciig-blue rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">C</span>
                    </div>
                    <div class="flex-shrink-0">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">CIIG System</h1>
                        <p class="text-xs text-gray-500">Estratégia de Venda</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <!-- Cart Button -->
                    <button id="cartToggle"
                        class="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0h9"></path>
                        </svg>
                        <span id="cartCount"
                            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hidden">0</span>
                    </button>

                    <!-- Theme Toggle -->
                    <button id="themeToggle"
                        class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <svg id="sunIcon" class="w-5 h-5 text-gray-600 dark:text-gray-300 hidden dark:block"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg id="moonIcon" class="w-5 h-5 text-gray-600 dark:text-gray-300 block dark:hidden"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    </button>

                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-ciig-blue rounded-full flex items-center justify-center">
                            <span class="text-white text-sm font-semibold">U</span>
                        </div>
                        <span class="text-gray-700 dark:text-gray-300">Usuário</span>
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
import ThemeToggle from "@/components/Common/ThemeToggle.vue";

const showToast = inject('showToast')

// showLogoutModal
const showLogoutModal = ref(false);
// showChangePasswordModal
const showChangePasswordModal = ref(false);
const router = useRouter();

const emit = defineEmits(['toggle-theme']);

function openLogoutModal() {
    showLogoutModal.value = true;
}

function openChangePasswordModal() {
    showChangePasswordModal.value = true;
}

function handleThemeToggle(isDark) {
    // Emite para o pai (TelaHome.vue)
    emit('toggle-theme', isDark);
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

button.relative.p-2 {
    transition: transform 0.2s cubic-bezier(.4, 0, .2, 1), box-shadow 0.2s;
}

button.relative.p-2:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
</style>