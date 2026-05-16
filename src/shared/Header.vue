<script setup lang="ts">
import { ElHeader, ElLink } from 'element-plus'
import { useChatStore } from '@/features/chat/stores/chatStore'
import { useRouter } from 'vue-router'

const { clearActiveChat } = useChatStore()
const router = useRouter()
const navigateToHomePage = () => {
  clearActiveChat()
  router.push('/')
}
</script>

<template>
  <ElHeader>
    <ElLink class="el-header__link" @click="navigateToHomePage">
      <span class="el-header__logo"></span>
      <span class="el-header__text">Chat App</span>
    </ElLink>
  </ElHeader>
</template>

<style scoped lang="scss">
.el-header {
  display: flex;
  width: 100%;
  font-size: 14px;
  --el-header-bg-color: #8fb6f0fb;
  background-color: #8fb6f0fb;

  &__link {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
  }

  &__logo {
    background: url('@/assets/icons/chat-app-logo.svg') no-repeat center center;
    background-size: contain;
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  &__text {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
