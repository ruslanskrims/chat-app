import type { Message } from './message.ts'

export interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt?: Date
}
