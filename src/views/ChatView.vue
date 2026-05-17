<script setup lang="ts">
import { ElEmpty } from 'element-plus'
import ChatSidebar from '@/features/chat/components/ChatSidebar.vue'
import ChatWindow from '@/features/chat/components/ChatWindow.vue'
import ChatInput from '@/features/chat/components/ChatInput.vue'
import { useChatStore } from '@/features/chat/stores/chatStore'
import { storeToRefs } from 'pinia'

const chatStore = useChatStore()
const { hasActiveChat, isChatCreateLoading } = storeToRefs(chatStore)
</script>

<template>
  <div class="layout">
    <ChatSidebar v-loading="isChatCreateLoading" element-loading-text="Loading..." />
    <div v-if="hasActiveChat" class="layout__chat-container" element-loading-text="Loading...">
      <ChatWindow />
      <ChatInput />
    </div>
    <ElEmpty
      v-else
      description="Greetings! Select a chat to start messaging"
      class="layout__empty-container"
    />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  overflow: hidden;

  &__chat-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
  }

  &__empty-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
}
</style>
