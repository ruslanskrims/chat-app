<script setup lang="ts">
import { ElButton, ElContainer, ElDialog, ElInput } from 'element-plus'
import { computed } from 'vue'
import { isTextEmpty } from '../utils/chatUtils'

const createChatFormProps = defineProps<{
  isModalOpen: boolean
  newChatName: string
  closeModal: () => void
}>()

const emit = defineEmits<{ 'update:newChatName': [value: string]; createChat: [] }>()

const modalVisible = computed({
  get: () => createChatFormProps.isModalOpen,
  set: (value) => {
    if (!value) {
      createChatFormProps.closeModal()
    }
  },
})

const chatName = computed({
  get: () => createChatFormProps.newChatName,
  set: (value) => {
    emit('update:newChatName', value)
  },
})

const handleCreateChat = () => {
  emit('createChat')
}
</script>
<template>
  <ElDialog
    v-model="modalVisible"
    title="Create New Chat"
    :showCancelButton="true"
    width="500px"
    class="create-chat-modal"
    center
  >
    <ElInput v-model="chatName" placeholder="Enter chat name" class="create-chat-modal__input" />
    <ElContainer class="create-chat-modal__actions">
      <ElButton type="danger" @click="closeModal">Cancel</ElButton>
      <ElButton
        type="primary"
        @click="handleCreateChat"
        :disabled="isTextEmpty(createChatFormProps.newChatName)"
        >Create</ElButton
      >
    </ElContainer>
  </ElDialog>
</template>

<style scoped lang="scss">
.create-chat-modal__input {
  margin-bottom: 10px;
}
</style>
