<script setup lang="ts">
import ChatSidebar from '@/features/chat/components/ChatSidebar.vue'
import ChatWindow from '@/features/chat/components/ChatWindow.vue'
import ChatInput from '@/features/chat/components/ChatInput.vue'
import { useChatStore } from '@/features/chat/stores/chatStore'

const chatStore = useChatStore()
</script>

<template>
  <div class="layout">
    <ChatSidebar />
    <div
      v-if="chatStore.hasActiveChat"
      class="layout__chat-container"
      v-loading="chatStore.isMessageToSendLoading"
      element-loading-text="Loading..."
    >
      <ChatWindow />
      <ChatInput />
    </div>
    <el-empty
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
