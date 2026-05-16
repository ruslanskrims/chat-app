import type { Chat } from '@/types/chat'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { SenderEnumTypes } from '../enums/chatEnums'

export const useChatStore = defineStore('chat', {
  state: (): { chats: Chat[]; activeChatId: string } => ({
    activeChatId: '',
    chats: [
      {
        id: uuidv4(),
        title: 'Bot Ashley',
        messages: [
          {
            id: uuidv4(),
            text: 'Hi there, dear candidate. How are you doing today?',
            sender: 'Bot Ashley',
            timestamp: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Good afternoon, Ashley. I am doing well, thank you. How about you?',
            sender: 'user',
            timestamp: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'I am doing great, thank you for asking! I wanted to discuss the next steps in the interview process with you.',
            sender: 'Bot Ashley',
            timestamp: new Date(),
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
            timestamp: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Thank you so much! I put a lot of work into the animations.',
            sender: 'user',
            timestamp: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'The Vue.js skills really show. Are you open to freelance work?',
            sender: 'Bot Sarah',
            timestamp: new Date(),
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
            timestamp: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Awesome! Any major issues I should address?',
            sender: 'user',
            timestamp: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'Just small optimizations. The UUID implementation was a smart move!',
            sender: 'Bot Michael',
            timestamp: new Date(),
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
            timestamp: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Love the new color scheme! The dark blue looks professional',
            sender: 'user',
            timestamp: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: 'Can we add micro-interactions to the chat bubbles?',
            sender: 'Bot UX',
            timestamp: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'Great idea! I can implement those this week',
            sender: 'user',
            timestamp: new Date(),
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
            timestamp: new Date(),
            senderType: SenderEnumTypes.Bot,
          },
          {
            id: uuidv4(),
            text: 'A bit nervous but prepared! Been practicing scaling chat apps',
            sender: 'user',
            timestamp: new Date(),
            senderType: SenderEnumTypes.User,
          },
          {
            id: uuidv4(),
            text: "That's perfect. Remember to mention UUIDs and real-time architecture!",
            sender: 'Bot Interview Coach',
            timestamp: new Date(),
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
  },
  actions: {
    addMessage(
      chatId: string,
      message: string,
      sender: string = 'user',
      senderType: SenderEnumTypes = SenderEnumTypes.User,
    ) {
      const chat = this.chats.find((c) => c.id === chatId)
      if (chat) {
        chat.messages.push({
          id: uuidv4(),
          text: message,
          sender,
          senderType,
          timestamp: new Date(),
        })
      }
    },

    setActiveChat(chatId: string) {
      this.activeChatId = chatId
    },

    clearActiveChat() {
      this.activeChatId = ''
    },
  },
})
