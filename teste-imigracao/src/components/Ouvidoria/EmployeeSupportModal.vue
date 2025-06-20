<template>
  <div class="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex justify-between items-center">
        Apoio ao Servidor
        <button @click="$emit('close')">✖️</button>
      </h3>

      <form @submit.prevent="handleSubmit">
        <input v-model="id" type="text" placeholder="ID de Funcionário" class="w-full mb-3 rounded border px-3 py-2" />
        <select v-model="category" class="w-full mb-3 rounded border px-3 py-2">
          <option value="">Categoria</option>
          <option value="technical">Suporte Técnico</option>
          <option value="access">Problemas de Acesso</option>
          <option value="training">Treinamento</option>
          <option value="suggestion">Sugestão de Melhoria</option>
          <option value="other">Outro</option>
        </select>
        <textarea v-model="description" placeholder="Descreva o problema" rows="4"
                  class="w-full mb-3 rounded border px-3 py-2"></textarea>
        <button type="submit" class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'success'])

const id = ref('')
const category = ref('')
const description = ref('')

const handleSubmit = () => {
  if (id.value && category.value && description.value) {
    emit('success', 'Sua solicitação foi enviada com sucesso.')
    emit('close')
    id.value = ''
    category.value = ''
    description.value = ''
  } else {
    alert('Preencha todos os campos obrigatórios.')
  }
}
</script>

<style scoped>
</style>
