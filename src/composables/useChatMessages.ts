import { ref, computed } from 'vue'
import { useChatStore } from '@/features/chat/stores/chatStore'
import { isTextEmpty } from '@/features/chat/utils/chatUtils'
import { useError } from './useError'

export function useChatMessages() {
  const chatStore = useChatStore()
  const messageText = ref('')
  const isSending = ref(false)
  const { errorMessage, setError, clearError } = useError()

  const activeChat = computed(() => chatStore.chats.find((c) => c.id === chatStore.activeChatId))
  const messageList = computed(() => activeChat.value?.messages || [])

  const canSendMessage = computed(
    () => isTextEmpty(messageText.value) && !isSending.value && !!chatStore.activeChatId,
  )

  const setActiveChat = (newChatId: string) => {
    chatStore.setActiveChat(newChatId)
  }

  const clearActiveChat = () => {
    chatStore.clearActiveChat()
  }

  const sendMessage = async () => {
    const text = messageText.value.trim()
    messageText.value = ''
    isSending.value = true
    clearError()

    try {
      await chatStore.addMessage(chatStore.activeChatId, text)
    } catch {
      setError('Failed to add a message. Try again')
      messageText.value = text
    } finally {
      isSending.value = false
    }
  }

  return {
    messageText,
    isSending,
    messageList,
    canSendMessage,
    sendMessage,
    errorMessage,
    clearError,
    setActiveChat,
    clearActiveChat,
  }
}
