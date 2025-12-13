
<template>
  <Teleport to="body">
    <div v-if="visible" @click.self="$emit('cancel')" class="fixed inset-0 modal-overlay flex items-center justify-center z-50">
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

const emit = defineEmits(['cancel', 'confirm']);
</script>

<style scoped>
.modal-overlay {
  background: rgba(0, 0, 0, 0.539); /* cinza escuro com 20% de opacidade */
}
</style>