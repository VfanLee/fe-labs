<script setup lang="ts">
import LocaleSwitcher from '@/pages/i18n/components/LocaleSwitcher.vue'

defineOptions({
  name: 'App',
})
</script>

<template>
  <nav>
    <RouterLink to="/">{{ $t('home') }}</RouterLink>
    <RouterLink to="/about">{{ $t('about') }}</RouterLink>
  </nav>

  <LocaleSwitcher />

  <RouterView />
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  gap: 16px;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: hsla(160, 100%, 37%, 1);
    }
  }
}
</style>
