<template>
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
    </svg>
    <span class="text-gray-800 dark:text-white">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
defineProps({
  icon: String
});
</script>