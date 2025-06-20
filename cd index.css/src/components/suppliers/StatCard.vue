<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
    <div class="flex items-center">
      <div :class="['p-3 rounded-full', iconBgColor, iconTextColor]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-gray-500 dark:text-gray-400 text-sm">{{ title }}</h3>
        <p class="text-2xl font-semibold text-gray-800 dark:text-white">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  value: [String, Number],
  icon: String,
  color: {
    type: String,
    default: 'blue'
  }
});

const iconBgColor = computed(() => {
  return {
    blue: 'bg-blue-100 dark:bg-blue-900',
    green: 'bg-green-100 dark:bg-green-900',
    yellow: 'bg-yellow-100 dark:bg-yellow-900',
    purple: 'bg-purple-100 dark:bg-purple-900'
  }[props.color];
});

const iconTextColor = computed(() => {
  return {
    blue: 'text-blue-500 dark:text-blue-300',
    green: 'text-green-500 dark:text-green-300',
    yellow: 'text-yellow-500 dark:text-yellow-300',
    purple: 'text-purple-500 dark:text-purple-300'
  }[props.color];
});
</script>