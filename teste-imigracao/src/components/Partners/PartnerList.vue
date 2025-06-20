<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <PartnerCard
      v-for="(partner, index) in filteredPartners"
      :key="index"
      :partner="partner"
      @openDetails="openPartnerModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PartnerCard from '@/components/Partners/PartnerCard.vue'

const props = defineProps({
  filter: {
    type: String,
    default: 'Todos'
  }
})

const emit = defineEmits(['openPartner'])

const partners = ref([
  { name: 'Alpha Logistics', status: 'Ativo', type: 'Premium' },
  { name: 'Beta Transportes', status: 'Inativo', type: 'Standard' },
  { name: 'Gamma Supply', status: 'Ativo', type: 'Premium' },
  { name: 'Delta Freight', status: 'Ativo', type: 'Novo' },
  { name: 'Omega Distribuição', status: 'Inativo', type: 'Standard' }
])

const filteredPartners = computed(() => {
  if (props.filter === 'Todos') return partners.value
  return partners.value.filter(p => {
    if (props.filter === 'Ativos') return p.status === 'Ativo'
    if (props.filter === 'Inativos') return p.status === 'Inativo'
    if (props.filter === 'Premium') return p.type === 'Premium'
    if (props.filter === 'Novos') return p.type === 'Novo'
    return true
  })
})

const openPartnerModal = (partner) => {
  emit('openPartner', partner)
}
</script>

<style scoped>
</style>
