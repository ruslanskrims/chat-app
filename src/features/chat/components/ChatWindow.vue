<script lang="ts" setup>
import { useChatStore } from '@/features/chat/stores/chatStore'
import { computed } from 'vue'
import MessageList from './MessageList.vue'
import { storeToRefs } from 'pinia'

const chatStore = useChatStore()
const { chats, activeChatId } = storeToRefs(chatStore)

const messages = computed(() => {
  const chat = chats.value.find((c) => c.id === activeChatId.value)
  return chat ? chat.messages : []
})
</script>

<template>
  <el-container class="chatwindow__container">
    <div class="chatwindow__content">
      <MessageList :messages="messages" />
    </div>
  </el-container>
</template>

<style scoped lang="scss">
.chatwindow {
  &__container {
    background-color: #e4ebf7;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__content {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  &__message-list {
    flex: 1;
  }

  &__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #999;
    font-size: 16px;
  }
}
</style>
