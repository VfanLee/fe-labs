<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

const handleClick = (e: Event) => {
  gsap.to('.box', {
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    y: -50,
  })
}

onMounted(() => {
  gsap.from('.box', { y: 50, scale: 0.5, stagger: 0.25, duration: 1, opacity: 0, ease: 'power2.out' })
})
</script>

<template>
  <div class="case">
    <div class="inner" @click="handleClick">
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
      <div class="box box4"></div>
      <div class="box box5"></div>
      <div class="box box6"></div>
      <div class="box box7"></div>
      <div class="box box8"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.inner {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.box {
  aspect-ratio: 1;
  border-radius: 8px;
}

.box1 {
  background-color: #42b883;
}
.box2 {
  background-color: #35495e;
}
.box3 {
  background-color: #ffd04b;
}
.box4 {
  background-color: #ff9c6e;
}
.box5 {
  background-color: #ff6e7f;
}
.box6 {
  background-color: #796735;
}
.box7 {
  background-color: #ad5d37;
}
.box8 {
  background-color: #ce6c78;
}
</style>
