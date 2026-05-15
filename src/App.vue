<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <el-header>
      <RouterLink to="/" class="header__link">
        <span class="header__logo"></span>
        <span class="header__text">Chat App</span>
      </RouterLink>
    </el-header>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
:deep(.el-header) {
  --el-header-bg-color: #8fb6f0fb;
  background-color: var(--el-header-bg-color);
  display: flex;
}

.header {
  width: 100%;
  font-size: 14px;
  padding: 5px 0;

  &__link {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    text-decoration: none;
  }

  &__logo {
    background: url('@/assets/icons/chat-app-logo.svg') no-repeat center center;
    width: 40px;
    height: 40px;
  }

  &__text {
    color: #fff;
    font-weight: bold;
  }
}
</style>
