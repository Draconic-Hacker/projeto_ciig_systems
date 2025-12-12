<template>
  <Card @click="openDetails" class="cursor-pointer hover:ring-2 hover:ring-primary-500 transition">
    <h4 class="text-lg font-bold text-gray-800 dark:text-white mb-1">{{ partner.name }}</h4>
    <p :class="['text-xs font-medium inline-block px-2 py-1 rounded', statusClass]">
      {{ partner.status }}
    </p>
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">{{ partner.type }}</p>
  </Card>
</template>

<script setup>
import { computed } from 'vue'
import Card from '@/components/Common/Card.vue'

const props = defineProps({
  partner: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['openDetails'])

const openDetails = () => {
  emit('openDetails', props.partner)
}

const statusClass = computed(() => {
  switch (props.partner.status) {
    case 'Ativo':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
    case 'Inativo':
      return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    default:
      return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
  }
})
</script>

<style scoped>
</style>
