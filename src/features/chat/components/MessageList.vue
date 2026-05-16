<script lang="ts" setup>
import MessageItem from './MessageItem.vue'
import type { Message } from '@/types/message'

defineProps<{ messages: Message[] }>()
</script>

<template>
  <el-scrollbar class="chatwindow__message-list">
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
      class="chatwindow__message-item"
    />
  </el-scrollbar>
</template>

<style scoped lang="scss">
.chatwindow__message-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

:deep(.el-scrollbar__wrap) {
  display: flex;
  flex-direction: column;
  width: 100%;
}

:deep(.el-scrollbar__view) {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
