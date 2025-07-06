<script setup lang="ts">
defineOptions({
  name: 'Rect',
});
</script>

<template>
  <div>
    <svg width="200" height="100" viewBox="0 0 200 100" preserveAspectRatio="none">
      <line x1="0" y1="0" x2="200" y2="100" stroke="black" stroke-width="1" />
      <text x="150" y="30" font-size="16" text-anchor="end">成绩</text>
      <text x="50" y="80" font-size="16" text-anchor="start">名称</text>
    </svg>
  </div>
</template>

<style lang="scss" scoped></style>
