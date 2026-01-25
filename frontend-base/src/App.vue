<template>
  <ToastModal
    :message="toastMessage"
    :type="toastType"
    @clear="toastMessage = ''"
    @click="toastMessage = ''"
  />
  <router-view />
   <!-- <TelaLogin /> -->
  <!-- <div class="bg-red-500 text-white p-4">
    ZeroDay Teste: Div Vermelha funcionando 🔥
  </div> -->
</template>

<script setup>
import ToastModal from '@/components/Common/ToastModal.vue'
import { ref, provide } from 'vue'

const toastMessage = ref('')
const toastType = ref('info')

// Função global para mostrar toast
function showToast(msg, type = 'info') {
  toastMessage.value = msg
  toastType.value = type
}

// Disponibiliza a função para todos os componentes
provide('showToast', showToast)

// import TelaLogin from '@/views/TelaLogin.vue'

// export default {
//   components: {
//     TelaLogin
//   }
// }
</script>
