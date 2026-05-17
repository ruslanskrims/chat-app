<script setup lang="ts">
import { ElAside, ElButton, ElAlert } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { useChatStore } from '@/features/chat/stores/chatStore'
import ChatList from './ChatList.vue'
import { ref } from 'vue'
import CreateChatForm from './CreateChatForm.vue'
import { useError } from '@/composables/useError'
import { isTextEmpty } from '../utils/chatUtils'

const { chats, createChat, clearCreateChatError } = useChatStore()
const { errorMessage, setError, clearError } = useError()

const isModalVisible = ref(false)
const newChatName = ref('')
const openCreateChatModal = () => {
  newChatName.value = ''
  isModalVisible.value = true
  clearCreateChatError()
  clearError()
}

const closeCreateChatModal = () => {
  isModalVisible.value = false
}

const handleCreateChat = async () => {
  if (!isTextEmpty(newChatName.value)) {
    try {
      closeCreateChatModal()
      await createChat(newChatName.value)
    } catch {
      setError('Could not create a chat. Try again')
    } finally {
      closeCreateChatModal()
    }
  }
}
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
        @click="openCreateChatModal"
        >New Chat</ElButton
      >
    </div>
    <ElAlert
      v-if="errorMessage"
      width="100%"
      :title="errorMessage"
      type="error"
      show-icon
      @close="clearCreateChatError"
    />
    <CreateChatForm
      :isModalVisible="isModalVisible"
      :newChatName="newChatName"
      :closeCreateChatModal="closeCreateChatModal"
      @update:newChatName="newChatName = $event"
      @createChat="handleCreateChat"
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
