<script lang="ts" setup>
import type { Chat } from '@/types/chat'
import ChatItem from './ChatItem.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

defineProps<{ chats: Chat[] }>()
const route = useRoute()
const activeChatId = computed(() => route.params.chatId as string)
</script>

<template>
  <el-scrollbar class="sidebar__chat-list">
    <ChatItem
      v-for="chat in chats"
      :key="chat.id"
      :chat="chat"
      :is-active="activeChatId === chat.id"
    />
  </el-scrollbar>
</template>

<style scoped lang="scss">
.sidebar {
  &__chat-list {
    flex: 1;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
