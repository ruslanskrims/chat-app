import type { Chat } from '../stores/chatStore'

const getShortenedMessage = (message: string, maxLength: number = 60) => {
  if (message.length <= maxLength) {
    return message
  }
  return message.slice(0, maxLength) + '...'
}

export const getLastMessage = (chat: Chat) => {
  const lastMessage = chat.messages[chat.messages.length - 1]
  return lastMessage ? getShortenedMessage(lastMessage.text) : 'No messages yet...'
}
