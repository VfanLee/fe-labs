<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 })
  tl.to('.to1', { x: 100, duration: 1 })
    .to('.to2', { x: 100, duration: 1 }, '+=0.25')
    .to('.to3', { x: 100, duration: 1 }, '-=0.25')
    .to('.to4', { x: 100, duration: 1 }, 0.25)
    .to('.to5', { x: 100, duration: 1 }, 'start')
    .to('.to6', { x: 100, duration: 1 }, 'end')
    .to('.to7', { x: 100, duration: 1 }, 'label')
})
</script>

<template>
  <div class="box to1">to1</div>
  <div class="box to2">to2</div>
  <div class="box to3">to3</div>
  <div class="box to4">to4</div>
  <div class="box to5">to5</div>
  <div class="box to6">to6</div>
  <div class="box to7">to7</div>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  text-align: center;
  line-height: 100px;
  user-select: none;
  background-image: linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%);
}
</style>
