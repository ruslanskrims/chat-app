<script lang="ts" setup>
import type { Chat } from '@/types/chat'
import { getLastMessage } from '../utils/chatUtils'
import { useRouter } from 'vue-router'
import { useChatStore } from '../stores/chatStore'

const router = useRouter()
const { setActiveChat } = useChatStore()

const navigateToChat = (chatId: string) => {
  setActiveChat(chatId)
  router.push(`/chat/${chatId}`)
}
defineProps<{ chat: Chat; isActive: boolean }>()
</script>

<template>
  <div
    class="sidebar__chat-item"
    :key="chat.id"
    :class="{ 'sidebar__chat-item--active': isActive }"
    @click="navigateToChat(chat.id)"
  >
    <div class="sidebar__chat-item__content">
      <h3 class="sidebar__chat-item__name">{{ chat.title }}</h3>
      <p class="sidebar__chat-item__last-message">
        {{ getLastMessage(chat) }}
      </p>
    </div>
  </div>
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
    &--active {
      background-color: #409eff;
      color: #fff;
      .sidebar__chat-item__last-message {
        color: #fff;
      }
      &:hover {
        background-color: #409eff;
      }
    }
  }
}
</style>
