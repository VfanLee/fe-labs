<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 })
  tl.to('.red', { x: 500, duration: 1 }, 1)
  tl.to('.green', { x: 300, duration: 1 }, '<')
  tl.to('.blue', { y: 100, duration: 1 }, '>')
})
</script>

<template>
  <div class="box red"></div>
  <div class="box green"></div>
  <div class="box blue"></div>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  user-select: none;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
</style>
