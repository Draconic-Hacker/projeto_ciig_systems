<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Editar Perfil</h3>
      <form @submit.prevent="saveChanges">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
          <input v-model="name" type="text" class="w-full px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cargo</label>
          <input v-model="position" type="text" class="w-full px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
        </div>
        <div class="flex justify-end space-x-2">
          <button type="button" @click="$emit('close')" class="px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 rounded">Cancelar</button>
          <button type="submit" class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const name = ref('João Silva')
const position = ref('Analista de Logística')

const saveChanges = () => {
  alert('Alterações salvas com sucesso!')
  emit('close')
}
</script>

<style scoped>
</style>
