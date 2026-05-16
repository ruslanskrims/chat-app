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
