<template>
  <div class="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4 flex justify-between items-center">
        Chat com Atendente
        <button @click="$emit('close')">✖️</button>
      </h3>

      <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-64 overflow-y-auto mb-4">
        <div v-for="(msg, index) in messages" :key="index" :class="msg.type === 'user' ? 'text-right' : 'text-left'">
          <p class="text-sm mb-2" :class="msg.type === 'user' ? 'text-green-400' : 'text-gray-300'">{{ msg.text }}</p>
        </div>
      </div>

      <div class="flex">
        <input v-model="input" @keyup.enter="sendMessage" type="text" placeholder="Digite sua mensagem..."
               class="flex-grow rounded-l-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2" />
        <button @click="sendMessage" class="bg-primary-500 hover:bg-primary-600 text-white px-4 rounded-r-md">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const messages = ref([
  { text: 'Olá! Sou a Ana, atendente do CIIG System. Como posso ajudar?', type: 'human' }
])

const input = ref('')

const sendMessage = () => {
  if (input.value.trim()) {
    messages.value.push({ text: input.value, type: 'user' })

    setTimeout(() => {
      messages.value.push({
        text: 'Estamos analisando sua solicitação. Por favor, aguarde um momento.',
        type: 'human'
      })
    }, 1500)

    input.value = ''
  }
}
</script>

<style scoped>
</style>
