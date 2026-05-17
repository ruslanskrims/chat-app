<script setup lang="ts">
import { ElAside, ElButton, ElAlert } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { useChatStore } from '@/features/chat/stores/chatStore'
import ChatList from './ChatList.vue'
import CreateChatForm from './CreateChatForm.vue'
import { useChatCreation } from '@/composables/useChatCreation'

const { chats } = useChatStore()
const {
  isModalOpen,
  newChatName,
  isCreatingChat,
  errorMessage,
  canCreateChat,
  openModal,
  closeModal,
  createChat,
  clearError,
} = useChatCreation()
</script>

<template>
  <ElAside class="sidebar__aside">
    <div class="sidebar__header">
      <h2 class="sidebar__header-title">Chats</h2>
      <ElButton
        type="primary"
        size="large"
        round
        class="new-chat-btn"
        :icon="Plus"
        @click="openModal"
        :disabled="canCreateChat"
        :loading="isCreatingChat"
        >New Chat</ElButton
      >
    </div>
    <ElAlert
      v-if="errorMessage"
      width="100%"
      :title="errorMessage"
      type="error"
      show-icon
      @close="clearError"
    />
    <CreateChatForm
      :isModalOpen="isModalOpen"
      :newChatName="newChatName"
      :closeModal="closeModal"
      @update:newChatName="newChatName = $event"
      @createChat="createChat"
    />
    <ChatList :chats="chats" />
  </ElAside>
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
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__header-title {
    margin: 0;
  }
}
</style>
