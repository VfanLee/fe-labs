<script setup lang="ts">
defineOptions({
  name: 'Hello',
})

defineProps<{ text: string }>()
</script>

<template>
  <div>Hello {{ text }}</div>
</template>
