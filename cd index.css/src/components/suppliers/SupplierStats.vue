<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    <StatCard 
      title="Total de Parceiros"
      :value="stats.total"
      icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      color="blue"
    />
    
    <StatCard 
      title="Parceiros Ativos"
      :value="stats.active"
      icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      color="green"
    />
    
    <StatCard 
      title="Parceiros Premium"
      :value="stats.premium"
      icon="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      color="yellow"
    />
    
    <StatCard 
      title="Novos Parceiros"
      :value="stats.new"
      icon="M12 4v16m8-8H4"
      color="purple"
    />
  </div>
</template>

<script setup>
import StatCard from '@/components/suppliers/StatCard.vue';

defineProps({
  stats: {
    type: Object,
    required: true
  }
});
</script>