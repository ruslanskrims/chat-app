<script setup lang="ts">
import { computed, ref } from 'vue'
import type { InputInstance } from 'element-plus'
import { useChatStore } from '../stores/chatStore'
import { useRoute } from 'vue-router'

const chatStore = useChatStore()
const { addMessage } = chatStore
const textarea = ref<InputInstance>()
const messageText = ref('')
const route = useRoute()
const sendMessage = () => {
  addMessage(route.params.chatId as string, messageText.value)
  messageText.value = ''
}

const isBtnDisabled = computed(() => messageText.value.trim() === '')
</script>

<template>
  <el-form @submit.prevent="sendMessage" style="display: flex; align-items: center; padding: 10px">
    <el-input
      ref="textarea"
      v-model="messageText"
      type="textarea"
      placeholder="Message"
      resize="none"
      class="chat-input__textarea"
    />
    <el-button
      type="primary"
      @click="sendMessage"
      size="large"
      class="chat-input__send-btn"
      :disabled="isBtnDisabled"
      round="true"
      >Send</el-button
    >
  </el-form>
</template>

<style scoped lang="scss">
.chat-input {
  &__textarea {
    padding: 10px 20px;
    position: relative;

    textarea {
      width: 100%;
      font-size: 14px;
      border-radius: 20px;
    }
  }
}
</style>
