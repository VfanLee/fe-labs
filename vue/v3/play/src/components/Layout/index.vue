<script setup lang="ts">
defineOptions({
  name: 'Layout',
  inheritAttrs: false,
})

defineProps<{ sidebarWidth: number }>()
</script>

<template>
  <div class="container">
    <div class="sidebar" v-if="$slots.menu">
      <slot name="menu"></slot>
    </div>
    <div class="content">
      <slot><RouterView /></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
  .sidebar {
    flex: 0 0 v-bind(sidebarWidth);
  }
  .content {
    flex: 1;
    padding: 16px;
  }
}
</style>
