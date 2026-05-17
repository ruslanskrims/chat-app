import type { Chat } from '@/types/chat'
import { SenderEnumTypes } from '../enums/chatEnums'

const getShortenedMessage = (message: string, maxLength: number = 60) => {
  if (message.length <= maxLength) {
    return message
  }
  return message.slice(0, maxLength) + '...'
}

export const getLastMessage = (chat: Chat) => {
  const lastMessage = chat.messages[chat.messages.length - 1]
  const lastMessageWithSender = lastMessage
    ? `${lastMessage.senderType === SenderEnumTypes.User ? 'You' : lastMessage.sender}: ${lastMessage.text}`
    : ''
  return lastMessage ? getShortenedMessage(lastMessageWithSender) : 'No messages yet...'
}

export const isTextEmpty = (text: string) => {
  return text.trim() === ''
}

export const createBotResponse = (userMessage: string) => {
  const message = userMessage.trim().toLowerCase()

  const greetings = [
    'Hello. How can I help you?',
    'Hi there. Thanks for creating a chat with me',
    'Hello. What can I do for you?',
    'Howdy? I am here to help you',
  ]

  const defaultResponses = [
    'I am doing great. Ready to help you anytime!',
    'I am fine. How are you?',
  ]

  const helpResponses = [
    'Here is a clean description of the topic you have asked',
    'For your current descripton size and style, keep it as is. But let me give you more structured text:',
    'Key takeaway: Try to access the statistics website. Unfortunately, I cant read such page',
  ]

  if (message.includes('hello') || message.includes('hi')) {
    return greetings[Math.floor(Math.random() * greetings.length)]
  }

  if (message.includes('how are you') || message.includes('howdy')) {
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  if (message.includes('give me') || message.includes('help me')) {
    return helpResponses[Math.floor(Math.random() * helpResponses.length)]
  }

  return greetings[Math.floor(Math.random() * greetings.length)]
}
