import { ref, computed } from 'vue'
import { useChatStore } from '@/features/chat/stores/chatStore'
import { isTextEmpty } from '@/features/chat/utils/chatUtils'
import { useError } from './useError'

export function useChatCreation() {
  const chatStore = useChatStore()
  const { errorMessage, setError, clearError } = useError()
  const isModalOpen = ref(false)
  const newChatName = ref('')
  const isCreatingChat = ref(false)
  const canCreateChat = computed(() => !isTextEmpty(newChatName.value) && !isCreatingChat.value)

  const openModal = () => {
    newChatName.value = ''
    isModalOpen.value = true
    clearError()
    chatStore.clearCreateChatError()
  }

  const closeModal = () => {
    isModalOpen.value = false
    newChatName.value = ''
    clearError()
  }

  const createChat = async () => {
    const name = newChatName.value.trim()
    isCreatingChat.value = true
    clearError()

    try {
      await chatStore.createChat(name)
      closeModal()
    } catch {
      setError('Could not create a chat. Try again')
    } finally {
      isCreatingChat.value = false
    }
  }

  return {
    isModalOpen,
    newChatName,
    isCreatingChat,
    errorMessage,
    canCreateChat,
    openModal,
    closeModal,
    createChat,
    clearError,
  }
}
