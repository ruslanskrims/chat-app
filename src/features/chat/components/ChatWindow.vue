<script lang="ts" setup>
import { useChatStore } from '@/features/chat/stores/chatStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { chats } = useChatStore()

const chatId = computed(() => route.params.chatId as string)

const messages = computed(() => {
  const chat = chats.find((c) => c.id === chatId.value)
  return chat ? chat.messages : []
})
</script>

<template>
  <el-container class="chatwindow__container">
    <div v-if="chatId" class="chatwindow__content">
      <el-scrollbar class="chatwindow__message-list">
        <div class="chatwindow__message-item" v-for="message in messages" :key="message.id">
          <div class="chatwindow__message-item__content">
            <h3 class="chatwindow__message-item__name">{{ message.text }}</h3>
          </div>
        </div>
      </el-scrollbar>
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
