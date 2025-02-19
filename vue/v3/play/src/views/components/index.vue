a
<script setup lang="ts"></script>

<template>
  <div class="container">
    <ul class="menu">
      <li><RouterLink :to="{ name: 'secondary-packaging' }">二次封装</RouterLink></li>
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
  }
}
</style>
