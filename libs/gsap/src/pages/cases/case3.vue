<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const tl = gsap.timeline()
  tl.to('.box1', { x: -(20 / 2 + 15 + 20 / 2 + 5 / 2) + 'vw', duration: 1 }, '<')
  tl.to('.box2', { x: -(20 / 2 + 15 + 20 / 2) + 'vw', duration: 1 }, '<')
  tl.to('.box3', { x: -(20 / 2 + 15 / 2) + 'vw', duration: 1 }, '<')

  tl.to('.box5', { x: 20 / 2 + 15 + 'vw', duration: 1 }, '<')
  tl.to('.box6', { x: 20 / 2 + 15 + 20 / 2 + 'vw', duration: 1 }, '<')
  tl.to('.box7', { x: 20 / 2 + 15 + 20 / 2 + 5 + 'vw', duration: 1 }, '<')
})
</script>

<template>
  <div class="case">
    <div class="container">
      <div class="box box1">box1</div>
      <div class="box box2">box2</div>
      <div class="box box3">box3</div>
      <div class="box box4">box4</div>
      <div class="box box5">box5</div>
      <div class="box box6">box6</div>
      <div class="box box7">box7</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: absolute;
  top: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  aspect-ratio: 9/16;
}
.box1,
.box2,
.box3 {
  left: 50%;
  transform: translate(-50%);
}
.box5,
.box6,
.box7 {
  right: 50%;
  transform: translate(50%);
}

.box1 {
  z-index: 700;
  width: 5vw;
  background-color: #d29f1f;
}
.box2 {
  z-index: 800;
  width: 10vw;
  background-color: #791a1a;
}
.box3 {
  z-index: 900;
  width: 15vw;
  background-color: #dd4747;
}
.box4 {
  left: 50%;
  z-index: 1000;
  width: 20vw;
  background-color: #18b718;
  transform: translateX(-50%);
}
.box5 {
  z-index: 900;
  width: 15vw;
  background-color: #2c43b5;
}
.box6 {
  z-index: 800;
  width: 10vw;
  background-color: #45571e;
}
.box7 {
  z-index: 700;
  width: 5vw;
  background-color: #22bdc6;
}
</style>
