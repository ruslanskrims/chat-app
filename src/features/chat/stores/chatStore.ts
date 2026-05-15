import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export interface Chat {
  id: string
  title: string
  messages: Message[]
}

export interface Message {
  id: string
  text: string
  sender: string
  timestamp: Date
}

export const useChatStore = defineStore('chat', {
  state: (): { chats: Chat[] } => ({
    chats: [
      {
        id: uuidv4(),
        title: 'Ashley Mock',
        messages: [
          {
            id: uuidv4(),
            text: 'Hi there, dear candidate. How are you doing today?',
            sender: 'Ashley Mock',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'Good afternoon, Ashley. I am doing well, thank you. How about you?',
            sender: 'Ashley',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'I am doing great, thank you for asking! I wanted to discuss the next steps in the interview process with you.',
            sender: 'Ashley',
            timestamp: new Date(),
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Sarah Chen',
        messages: [
          {
            id: uuidv4(),
            text: 'Hey! Loved your portfolio website! 🚀',
            sender: 'Sarah Chen',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'Thank you so much! I put a lot of work into the animations.',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'The Vue.js skills really show. Are you open to freelance work?',
            sender: 'Sarah Chen',
            timestamp: new Date(),
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Michael Rodriguez',
        messages: [
          {
            id: uuidv4(),
            text: 'Code review for the chat app is ready! ✅',
            sender: 'Michael Rodriguez',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'Awesome! Any major issues I should address?',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'Just small optimizations. The UUID implementation was a smart move!',
            sender: 'Michael Rodriguez',
            timestamp: new Date(),
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'UX Design Team',
        messages: [
          {
            id: uuidv4(),
            text: 'New design system mockups are ready for review 🎨',
            sender: 'Emma (Designer)',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'Love the new color scheme! The dark blue looks professional',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'Can we add micro-interactions to the chat bubbles?',
            sender: 'David (PM)',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'Great idea! I can implement those this week',
            sender: 'user',
            timestamp: new Date(),
          },
        ],
      },
      {
        id: uuidv4(),
        title: 'Technical Interview Prep',
        messages: [
          {
            id: uuidv4(),
            text: "Ready for tomorrow's system design interview? 💪",
            sender: 'Interview Coach',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: 'A bit nervous but prepared! Been practicing scaling chat apps',
            sender: 'user',
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            text: "That's perfect. Remember to mention UUIDs and real-time architecture!",
            sender: 'Interview Coach',
            timestamp: new Date(),
          },
        ],
      },
    ],
  }),
})
