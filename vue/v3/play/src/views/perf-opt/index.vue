a
<script setup lang="ts"></script>

<template>
  <div class="container">
    <ul class="menu">
      <li><RouterLink :to="{ name: 'v-lazy' }">v-lazy 指令实现图片懒加载</RouterLink></li>
    </ul>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  .menu {
    flex: 0 0 200px;
  }
  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>
