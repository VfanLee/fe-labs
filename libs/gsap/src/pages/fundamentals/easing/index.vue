<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.to', { x: 100, duration: 3, ease: 'elastic.out' })
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
