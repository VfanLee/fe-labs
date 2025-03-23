<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <h1>Logo</h1>
      <ul>
        <li><NuxtLink :to="{ path: '/' }">首页</NuxtLink></li>
        <li><NuxtLink :to="{ path: '/about' }">关于</NuxtLink></li>

        <li><NuxtLink :to="{ path: '/login' }">登录/注册</NuxtLink></li>
        <li><NuxtLink :to="{ path: '/profile' }">个人中心</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer>尾部</footer>
</template>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0 16px;
}

ul {
  display: flex;
  gap: 16px;
  margin-inline-start: auto;
}
</style>
