import type { Chat } from '@/types/chat'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { SenderEnumTypes } from '../enums/chatEnums'

export const useChatStore = defineStore('chat', {
  state: (): {
    chats: Chat[]
    activeChatId: string
    isSendingMessage: boolean
    isChatCreateLoading: boolean
    isCreateChatHasError: boolean
    isSendingMessageHasError: boolean
  } => ({
    activeChatId: '',
    isSendingMessage: false,
    isChatCreateLoading: false,
    isCreateChatHasError: false,
    isSendingMessageHasError: false,
    chats: [
      {
        id: uuidv4(),
        title: 'Bot Ashley',
        messages: [
          {
            id: uuidv4(),
            text: 'Hi there, dear candidate. How are you doing today?',
            sender: 'Bot Ashley',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Good afternoon, Ashley. I am doing well, thank you. How about you?',
            sender: 'user',
            created: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'I am doing great, thank you for asking! I wanted to discuss the next steps in the interview process with you.',
            sender: 'Bot Ashley',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Bot Sarah',
        messages: [
          {
            id: uuidv4(),
            text: 'Hey! Loved your portfolio website! 🚀',
            sender: 'Bot Sarah',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Thank you so much! I put a lot of work into the animations.',
            sender: 'user',
            created: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'The Vue.js skills really show. Are you open to freelance work?',
            sender: 'Bot Sarah',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Bot Michael',
        messages: [
          {
            id: uuidv4(),
            text: 'Code review for the chat app is ready! ✅',
            sender: 'Bot Michael',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Awesome! Any major issues I should address?',
            sender: 'user',
            created: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'Just small optimizations. The UUID implementation was a smart move!',
            sender: 'Bot Michael',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Bot UX',
        messages: [
          {
            id: uuidv4(),
            text: 'New design system mockups are ready for review 🎨',
            sender: 'Bot UX',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Love the new color scheme! The dark blue looks professional',
            sender: 'user',
            created: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'Can we add micro-interactions to the chat bubbles?',
            sender: 'Bot UX',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Great idea! I can implement those this week',
            sender: 'user',
            created: new Date(),
            senderType: SenderEnumTypes.User,
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Bot Interview Coach',
        messages: [
          {
            id: uuidv4(),
            text: "Ready for tomorrow's system design interview? 💪",
            sender: 'Bot Interview Coach',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'A bit nervous but prepared! Been practicing scaling chat apps',
            sender: 'user',
            created: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: "That's perfect. Remember to mention UUIDs and real-time architecture!",
            sender: 'Bot Interview Coach',
            created: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
        ],
      },
    ],
  }),
  getters: {
    hasActiveChat(state) {
      return !!state.activeChatId
    },
    isMessageToSendLoading: (state) => state.isSendingMessage,
    createChatHasError: (state) => state.isCreateChatHasError,
  },
  actions: {
    async addMessage(
      chatId: string,
      message: string,
      sender: string = 'user',
      senderType: SenderEnumTypes = SenderEnumTypes.User,
    ) {
      this.isSendingMessage = true
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const result = this.chats.find((c) => c.id === chatId)
        if (!result) {
          return
        }
        result.messages.push({
          id: uuidv4(),
          text: message,
          sender,
          senderType,
          created: new Date(),
        })
      } catch {
        throw new Error()
      } finally {
        this.isSendingMessage = false
      }
    },

    clearAddMessageError() {
      this.isSendingMessageHasError = false
    },

    async createChat(name: string) {
      this.clearCreateChatError()
      this.isChatCreateLoading = true
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const newChat: Chat = {
          id: uuidv4(),
          title: name,
          messages: [],
          createdAt: new Date(),
        }
        this.chats.push(newChat)
      } catch {
        this.isCreateChatHasError = true
        throw new Error('Failed to create chat')
      } finally {
        this.isChatCreateLoading = false
      }
    },

    setActiveChat(chatId: string) {
      this.activeChatId = chatId
    },

    clearActiveChat() {
      this.activeChatId = ''
    },

    clearCreateChatError() {
      this.isCreateChatHasError = false
    },
  },
})
