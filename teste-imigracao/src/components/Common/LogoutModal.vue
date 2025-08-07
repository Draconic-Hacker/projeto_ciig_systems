
<template>
  <Teleport to="body">
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-sm">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">
          Confirmar Saída
        </h3>
        <p class="text-gray-600 mb-6">
          Tem certeza que deseja sair do sistema?
        </p>
        <div class="flex items-center justify-end">
          <button
            class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            @click="$emit('cancel')"
          >
            Cancelar
          </button>
          <button
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="$emit('confirm')"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>


<script setup>
defineProps({
  visible: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped></style>