<template>
  <Card>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="(filter, index) in filters"
        :key="index"
        @click="selectFilter(filter)"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition',
          filter === selected ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white'
        ]"
      >
        {{ filter }}
      </button>
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Common/Card.vue'

const emit = defineEmits(['filterChanged'])

const filters = ['Todos', 'Ativos', 'Inativos', 'Premium', 'Novos']
const selected = ref('Todos')

const selectFilter = (filter) => {
  selected.value = filter
  emit('filterChanged', filter)
}
</script>

<style scoped>
</style>
