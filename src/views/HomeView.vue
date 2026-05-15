<script setup lang="ts">
import Sidebar from '@/features/chat/components/Sidebar.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px);
  overflow: hidden;
}
</style>
