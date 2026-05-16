<script lang="ts" setup>
import { SenderEnumTypes } from '../enums/chatEnums'
import type { Message } from '@/types/message'

defineProps<{ message: Message }>()
</script>

<template>
  <div
    class="chatwindow__message-item"
    :class="{
      'chatwindow__message-item--user': message.senderType === SenderEnumTypes.User,
      'chatwindow__message-item--bot': message.senderType === SenderEnumTypes.Bot,
    }"
    :key="message.id"
  >
    <h3 class="chatwindow__message-item__name">
      {{ message.senderType === SenderEnumTypes.User ? 'You' : message.sender }}
    </h3>
    <div class="chatwindow__message-item__content">
      <h3 class="chatwindow__message-item__text">{{ message.text }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chatwindow {
  &__message-item {
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
  }
}
</style>
