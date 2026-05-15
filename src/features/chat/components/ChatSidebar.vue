<script setup lang="ts">
import { useChatStore } from '@/features/chat/stores/chatStore'
import ChatList from './ChatList.vue'

const { chats } = useChatStore()
</script>

<template>
  <el-aside class="sidebar__aside">
    <div class="sidebar__header">
      <h2 class="sidebar__header-title">Chats</h2>
    </div>
    <ChatList :chats="chats" />
  </el-aside>
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
}
</style>
