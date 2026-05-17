<script setup lang="ts">
import { ElButton, ElContainer, ElDialog, ElInput, ElAlert } from 'element-plus'
import { computed } from 'vue'

const createChatFormProps = defineProps<{
  isModalVisible: boolean
  newChatName: string
  error: boolean
  closeCreateChatModal: () => void
}>()

const emit = defineEmits<{ 'update:newChatName': [value: string]; createChat: [] }>()

const modalVisible = computed({
  get: () => createChatFormProps.isModalVisible,
  set: (value) => {
    if (!value) {
      createChatFormProps.closeCreateChatModal()
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
    @confirm="() => console.log('Chat created')"
    class="create-chat-modal"
  >
    <ElInput
      v-model="chatName"
      placeholder="Enter chat name"
      @keyup.enter="() => console.log('Chat created')"
      class="create-chat-modal__input"
    />
    <ElContainer class="create-chat-modal__actions">
      <ElButton type="danger" @click="closeCreateChatModal">Cancel</ElButton>
      <ElButton type="primary" @click="handleCreateChat">Create</ElButton>
    </ElContainer>
  </ElDialog>
</template>
