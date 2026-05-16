import type { SenderEnumTypes } from '@/features/chat/enums/chatEnums'

export interface Message {
  id: string
  text: string
  sender: string
  senderType: SenderEnumTypes
  timestamp: Date
}
