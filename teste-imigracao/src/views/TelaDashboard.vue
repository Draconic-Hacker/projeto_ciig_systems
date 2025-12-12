<template>
  <div class="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Conteúdo Principal -->
    <div class="flex-1 flex flex-col">
      <TopNav />

      <main class="flex-1 overflow-y-auto p-6 space-y-6">
        <QuickStats />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InventoryChart />
          <SupplierChart />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentOrders />
          <Shipments />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InventoryStatus />
          <SupplierPerformance />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
import TopNav from '@/components/layout/TopNav.vue'
import QuickStats from '@/components/Dashboard/QuickStats.vue'
import InventoryChart from '@/components/Dashboard/InventoryChart.vue'
import SupplierChart from '@/components/Dashboard/SupplierChart.vue'
import RecentOrders from '@/components/Dashboard/RecentOrders.vue'
import Shipments from '@/components/Dashboard/Shipments.vue'
import InventoryStatus from '@/components/Dashboard/InventoryStatus.vue'
import SupplierPerformance from '@/components/Dashboard/SupplierPerformance.vue'
</script>

<style scoped>
</style>
