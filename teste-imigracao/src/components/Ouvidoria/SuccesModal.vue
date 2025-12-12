<template>
  <div class="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 text-center">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">{{ message }}</p>
      <button @click="$emit('close')"
              class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">Ok</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Sucesso'
  },
  message: {
    type: String,
    default: 'Operação realizada com sucesso!'
  }
})

defineEmits(['close'])
</script>

<style scoped>
</style>
