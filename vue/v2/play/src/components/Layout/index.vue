<template>
  <div class="container">
    <div
      class="sidebar"
      v-if="$slots.menu"
      :style="{ flexBasis: sidebarWidth }"
    >
      <slot name="menu"></slot>
    </div>
    <div class="content">
      <slot><RouterView /></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    sidebarWidth: {
      type: String,
      default: "200px",
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
  .sidebar {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .content {
    flex: 1;
    padding: 16px;
  }
}
</style>
