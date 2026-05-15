<script setup lang="ts">
import ChatSidebar from '@/features/chat/components/ChatSidebar.vue'
import ChatWindow from '@/features/chat/components/ChatWindow.vue'
</script>

<template>
  <div class="layout">
    <ChatSidebar />
    <ChatWindow />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  overflow: hidden;
}
</style>
