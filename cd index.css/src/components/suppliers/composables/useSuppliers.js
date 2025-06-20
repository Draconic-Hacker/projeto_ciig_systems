import { ref, computed } from 'vue';

export function useSuppliers() {
  const suppliers = ref([
    {
      id: 1,
      name: "Magazine Luiza",
      logo: "ML",
      logoColor: "#0086FF",
      status: "active",
      isPremium: true,
      isNew: false,
      joinDate: "2022-05-15",
      location: "São Paulo, Brasil",
      deals: 87,
      totalValue: 1250000,
      email: "parcerias@magazineluiza.com.br",
      phone: "(11) 3504-2500",
      website: "www.magazineluiza.com.br",
      contactPerson: "Ana Silva - Gerente de Parcerias",
      transactions: [
        { date: "2023-10-15", description: "Campanha Q4", value: 120000, status: "Concluído" },
        { date: "2023-07-22", description: "Promoção Inverno", value: 85000, status: "Concluído" },
        { date: "2023-04-10", description: "Lançamento Produto", value: 150000, status: "Concluído" }
      ]
    },
    // ... outros fornecedores (mesmos dados do HTML original)
  ]);

  // Verificar se é novo (últimos 3 meses)
  suppliers.value.forEach(supplier => {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    supplier.isNew = new Date(supplier.joinDate) >= threeMonthsAgo;
  });

  const stats = computed(() => {
    return {
      total: suppliers.value.length,
      active: suppliers.value.filter(s => s.status === 'active').length,
      premium: suppliers.value.filter(s => s.isPremium).length,
      new: suppliers.value.filter(s => s.isNew).length
    };
  });

  return { suppliers, stats };
}