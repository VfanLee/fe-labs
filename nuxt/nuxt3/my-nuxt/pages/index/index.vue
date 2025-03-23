<script setup lang="ts">
const handleClick = () => {
  navigateTo('/about')
}
</script>

<template>
  <h1>home</h1>

  <button type="button" @click="handleClick">btn</button>
</template>
