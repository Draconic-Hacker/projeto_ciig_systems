<template>
  <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
    <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"><slot name="title">{{ title }}</slot></h4>
    <div class="font-semibold text-gray-800 dark:text-white">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>