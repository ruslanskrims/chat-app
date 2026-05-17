import { useRouter } from 'vue-router'
import { useChatStore } from '@/features/chat/stores/chatStore'

export function useChatNavigation() {
  const router = useRouter()
  const chatStore = useChatStore()

  const navigateToChat = (chatId: string) => {
    chatStore.setActiveChat(chatId)
    router.push(`/chat/${chatId}`)
  }

  return {
    navigateToChat,
  }
}
