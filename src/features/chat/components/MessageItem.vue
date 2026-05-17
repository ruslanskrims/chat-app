<script lang="ts" setup>
import { format } from 'date-fns-tz'
import { SenderEnumTypes } from '../enums/chatEnums'
import type { Message } from '@/types/message'

defineProps<{ message: Message }>()
</script>

<template>
  <div
    class="message-item"
    :class="{
      'message-item--user': message.senderType === SenderEnumTypes.User,
      'message-item--bot': message.senderType === SenderEnumTypes.Bot,
    }"
    :key="message.id"
  >
    <h3 class="message-item__name">
      {{ message.senderType === SenderEnumTypes.User ? 'You' : message.sender }}
    </h3>
    <div class="message-item__content">
      <h3 class="message-item__text">{{ message.text }}</h3>
      <span class="message-item__createdAt">{{ format(message.created, 'dd.MM hh:mm') }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-item {
  max-width: 50%;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  position: relative;

  &__name {
    font-size: 16px;
  }

  &--user {
    margin-left: auto;
    margin-right: 30px;
    background-color: #409eff;
    color: white;
    z-index: 10;
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 15px;
      bottom: 0;
      right: 0px;
      background-color: inherit;
      z-index: 1;
    }
  }

  &--bot {
    margin-right: auto;
    margin-left: 30px;
    background-color: #f5f5f5;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 15px;
      bottom: 0;
      left: 0px;
      background-color: inherit;
    }
  }

  &__text {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__createdAt {
    align-self: end;
    font-size: 12px;
  }
}
</style>
