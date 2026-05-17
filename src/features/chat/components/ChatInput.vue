<script setup lang="ts">
import { ElForm, ElInput, ElButton, ElAlert, ElContainer, type InputInstance } from 'element-plus'
import { useChatMessages } from '@/composables/useChatMessages'
import { ref } from 'vue'

const { sendMessage, errorMessage, clearError, canSendMessage, messageText, isSending } =
  useChatMessages()

const textarea = ref<InputInstance>()
</script>

<template>
  <ElContainer style="display: flex; flex-direction: column">
    <ElAlert
      v-if="errorMessage"
      width="100%"
      :title="errorMessage"
      type="error"
      show-icon
      @close="clearError"
    />
    <ElForm @submit.prevent="sendMessage" style="display: flex; align-items: center; padding: 10px">
      <ElInput
        ref="textarea"
        v-model="messageText"
        type="textarea"
        placeholder="Message"
        resize="none"
        class="chat-input__textarea"
      />
      <ElButton
        type="primary"
        @click="sendMessage"
        size="large"
        class="chat-input__send-btn"
        :disabled="canSendMessage"
        :loading="isSending"
        round
        >{{ isSending ? 'Sending' : 'Send' }}</ElButton
      >
    </ElForm>
  </ElContainer>
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
