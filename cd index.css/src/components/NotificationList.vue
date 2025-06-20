<template>
  <div class="flex-1 overflow-y-auto custom-scrollbar bg-gray-50">
    <NotificationItem
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
      @mark-read="markAsRead"
      @show-detail="showDetail"
    />
  </div>
</template>

<script setup>
import NotificationItem from './NotificationItem.vue';

const props = defineProps({
  notifications: {
    type: Array,
    required: true,
    default: () => []
  }
});

const emit = defineEmits(['mark-read', 'show-detail']);

const markAsRead = (id) => {
  emit('mark-read', id);
};

const showDetail = (notification) => {
  emit('show-detail', notification);
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>    