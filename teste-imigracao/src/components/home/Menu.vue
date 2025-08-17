<template>
  <!-- Main Content -->
  <main class="flex-grow container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Main Navigation Buttons -->
      <MainNavegationbuttons />

      <!-- Side Panel -->
      <div class="w-full md:w-1/3 flex flex-col gap-6">
        <!-- Quick Stats -->
        <QuickStats />

        <!-- Social Media Contact -->
        <SocialMediaContact />
      </div>
    </div>
  </main>
</template>

<script setup>
import MainNavegationbuttons from './MainNavegationbuttons.vue';
import QuickStats from './QuickStats.vue';
import SocialMediaContact from './SocialMediaContact.vue';
</script>

<style scoped>
.glass-effect {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>