<script lang="ts" setup>
import type { Chat } from '@/types/chat'
import ChatItem from './ChatItem.vue'

defineProps<{ chats: Chat[] }>()
</script>

<template>
  <el-scrollbar class="sidebar__chat-list">
    <ChatItem v-for="chat in chats" :key="chat.id" :chat="chat" />
  </el-scrollbar>
</template>

<style scoped lang="scss">
.sidebar {
  &__chat-list {
    flex: 1;
  }
}
</style>
