<template>
  <Card class="cursor-pointer" @click="$emit('abrir')">
    <div class="flex justify-between items-start">
      <div class="flex items-start space-x-3">
        <div class="flex-shrink-0 mt-1">
          <span class="status-dot" :class="statusDotClass"></span>
        </div>
        <div>
          <div class="flex items-center mb-1">
            <span class="category-pill mr-2" :class="categoriaClass">{{ categoriaFormatada }}</span>
            <span class="category-pill" :class="prioridadeClass">{{ prioridadeFormatada }}</span>
          </div>
          <h3 class="text-sm font-semibold text-gray-400">{{ titulo }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ descricao }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <slot name="acoes" />
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/Common/Card.vue'
import { computed } from 'vue'

const props = defineProps({
  titulo: String,
  descricao: String,
  categoria: String,
  prioridade: String,
  status: String
})

const emit = defineEmits(['abrir'])

const statusDotClass = computed(() => {
  return {
    unread: 'status-unread',
    read: 'status-read',
    urgent: 'status-urgent',
    resolved: 'status-resolved',
    pending: 'status-pending'
  }[props.status] || ''
})

const categoriaClass = computed(() => `category-${props.categoria?.toLowerCase() || 'default'}`)
const prioridadeClass = computed(() => `priority-${props.prioridade?.toLowerCase() || 'default'}`)

const categoriaFormatada = computed(() => {
  return props.categoria?.charAt(0).toUpperCase() + props.categoria?.slice(1) || ''
})

const prioridadeFormatada = computed(() => {
  const map = {
    high: 'Alta Prioridade',
    medium: 'Média Prioridade',
    low: 'Baixa Prioridade'
  }
  return map[props.prioridade] || props.prioridade
})
</script>

<style scoped>
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
}
</style>
