<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 })
  tl.to('.to', { x: 100, duration: 1 })
})
</script>

<template>
  <div class="box to">to()</div>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  text-align: center;
  line-height: 100px;
  user-select: none;
}
.to {
  background-image: linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%);
}
</style>
