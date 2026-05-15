<script setup lang="ts">
import { useChatStore, type Chat } from '@/features/chat/stores/chatStore'

const { chats } = useChatStore()

const getShortenedMessage = (message: string, maxLength: number = 60) => {
  if (message.length <= maxLength) {
    return message
  }
  return message.slice(0, maxLength) + '...'
}

const getLastMessage = (chat: Chat) => {
  const lastMessage = chat.messages[chat.messages.length - 1]
  return lastMessage ? getShortenedMessage(lastMessage.text) : 'No messages yet...'
}
</script>

<template>
  <el-container class="sidebar__container">
    <el-aside class="sidebar__aside">
      <div class="sidebar__header">
        <h2 class="sidebar__header-title">Chats</h2>
      </div>
      <el-scrollbar class="sidebar__chat-list">
        <div class="sidebar__chat-item" v-for="chat in chats" :key="chat.id">
          <div class="sidebar__chat-item__content">
            <h3 class="sidebar__chat-item__name">{{ chat.title }}</h3>
            <p class="sidebar__chat-item__last-message">
              {{ getLastMessage(chat) }}
            </p>
          </div>
        </div>
      </el-scrollbar>
    </el-aside>
  </el-container>
</template>

<style scoped lang="scss">
.sidebar {
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fafcff;
  }

  &__aside {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 500px;
  }

  &__header {
    flex-shrink: 0;
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__header-title {
    margin: 0;
  }

  &__chat-list {
    flex: 1;
  }

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
