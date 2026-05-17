<script setup lang="ts">
import { computed, ref } from 'vue'
import type { InputInstance } from 'element-plus'
import { ElForm, ElInput, ElButton, ElAlert, ElContainer } from 'element-plus'
import { useChatStore } from '../stores/chatStore'
import { useRoute } from 'vue-router'
import { useError } from '@/composables/useError'
import { isTextEmpty } from '../utils/chatUtils'

const chatStore = useChatStore()
const { addMessage, clearAddMessageError } = chatStore
const { errorMessage, setError } = useError()

const textarea = ref<InputInstance>()
const messageText = ref('')
const route = useRoute()
const sendMessage = async () => {
  if (isTextEmpty(messageText.value)) return

  try {
    await addMessage(route.params.chatId as string, messageText.value)
  } catch {
    setError('Faled to add a message. Try again')
  }
  messageText.value = ''
}

const isBtnDisabled = computed(() => isTextEmpty(messageText.value))
</script>

<template>
  <ElContainer style="display: flex; flex-direction: column">
    <ElAlert
      v-if="errorMessage"
      width="100%"
      :title="errorMessage"
      type="error"
      show-icon
      @close="clearAddMessageError"
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
        :disabled="isBtnDisabled"
        round
        >Send</ElButton
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
