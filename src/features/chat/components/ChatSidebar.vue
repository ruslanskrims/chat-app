<script setup lang="ts">
import { ElMessageBox, ElAside, ElButton } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { useChatStore } from '@/features/chat/stores/chatStore'
import ChatList from './ChatList.vue'

const { chats } = useChatStore()
</script>

<template>
  <ElAside class="sidebar__aside">
    <div class="sidebar__header">
      <h2 class="sidebar__header-title">Chats</h2>
      <ElButton type="primary" size="large" round class="new-chat-btn" :icon="Plus"
        >New Chat</ElButton
      >
    </div>
    <!--TODO - add functionality to create new chat and show the message box(form)-->
    <!-- <ElMessageBox
      title="Create New Chat"
      :showCancelButton="true"
      @confirm="() => console.log('Chat created')"
    /> -->
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
