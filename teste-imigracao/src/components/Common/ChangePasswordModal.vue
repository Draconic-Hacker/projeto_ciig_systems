<template>
  <Teleport to="body">
    <div v-if="visible" @click.self="$emit('cancel')" class="fixed inset-0 modal-overlay flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Trocar Senha</h3>
          <button class="text-gray-500 hover:text-gray-700" @click="$emit('cancel')">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form @submit.prevent="handleSave">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="currentPassword">
              Senha Atual
            </label>
            <input
              v-model="currentPassword"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentPassword" type="password" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="newPassword">
              Nova Senha
            </label>
            <input
              v-model="newPassword"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword" type="password" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">
              Confirmar Nova Senha
            </label>
            <input
              v-model="confirmPassword"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword" type="password" />
          </div>
          <div class="flex items-center justify-end">
            <button
              class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              type="button" @click="$emit('cancel')">
              Cancelar
            </button>
            <button
              class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, inject } from 'vue'

const showToast = inject('showToast')

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['cancel', 'save'])

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

function handleSave() {
  if (!currentPassword.value || !newPassword.value || !confirmPassword.value) {
      // Aqui você pode disparar uma toast de erro
    showToast('Preencha todos os campos!', 'error')
    return
  }
  if (newPassword.value !== confirmPassword.value) {
      // Aqui você pode disparar uma toast de erro
    showToast('As senhas não coincidem!', 'error')
    return
  }
  emit('save', {
    currentPassword: currentPassword.value,
    newPassword: newPassword.value
  })
}
</script>

<style scoped>
.modal-overlay {
  background: rgba(0, 0, 0, 0.539); /* cinza escuro com 20% de opacidade */
}
</style>