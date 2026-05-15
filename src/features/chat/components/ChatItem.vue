<script lang="ts" setup>
import type { Chat } from '../stores/chatStore'
import { getLastMessage } from '../utils/chatUtils'

defineProps<{ chat: Chat }>()
</script>

<template>
  <RouterLink :to="`/chat/${chat.id}`">
    <div class="sidebar__chat-item" :key="chat.id">
      <div class="sidebar__chat-item__content">
        <h3 class="sidebar__chat-item__name">{{ chat.title }}</h3>
        <p class="sidebar__chat-item__last-message">
          {{ getLastMessage(chat) }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

.sidebar {
  &__chat-item {
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    margin: 0 5px;
    &:hover {
      background-color: #fafafa;
    }

    &__name {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
    }

    &__last-message {
      margin: 5px 0 0;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
