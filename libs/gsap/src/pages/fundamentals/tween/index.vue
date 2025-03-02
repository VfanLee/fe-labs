<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.to', { x: 100, duration: 1 })
  gsap.from('.from', { x: 100, duration: 1 })
  gsap.fromTo('.fromTo', { x: 100 }, { x: 200, duration: 1 })
})
</script>

<template>
  <div class="box to">to()</div>
  <div class="box from">from()</div>
  <div class="box fromTo">fromTo()</div>
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
.from {
  background-image: linear-gradient(114.41deg, #ffa500 20.74%, #ffd07f 65.5%);
}
.fromTo {
  background-image: linear-gradient(114.41deg, #ff00ff 20.74%, #ffb3ff 65.5%);
}
</style>
