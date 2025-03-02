<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.to('.r', {
    scale: 0.1,
    y: -50,
    duration: 1,
    repeat: -1,
    yoyo: true,
    stagger: {
      amount: 0.5,
      grid: 'auto',
      from: 'center',
    },
  })
})
</script>

<template>
  <div class="case">
    <div class="inner">
      <div class="box box1">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
      </div>
      <div class="box box2">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
      </div>
      <div class="box box3">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
        <div class="r r5"></div>
      </div>
      <div class="box box4">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
        <div class="r r5"></div>
        <div class="r r6"></div>
      </div>
      <div class="box box5">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
        <div class="r r5"></div>
        <div class="r r6"></div>
        <div class="r r7"></div>
      </div>
      <div class="box box6">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
        <div class="r r5"></div>
        <div class="r r6"></div>
        <div class="r r7"></div>
        <div class="r r8"></div>
      </div>
      <div class="box box7">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
        <div class="r r5"></div>
        <div class="r r6"></div>
        <div class="r r7"></div>
      </div>
      <div class="box box8">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
        <div class="r r5"></div>
        <div class="r r6"></div>
      </div>
      <div class="box box9">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
        <div class="r r5"></div>
      </div>
      <div class="box box10">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
        <div class="r r4"></div>
      </div>
      <div class="box box11">
        <div class="r r1"></div>
        <div class="r r2"></div>
        <div class="r r3"></div>
      </div>
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
  display: flex;
  gap: 16px;
}

.box {
  display: flex;
  gap: 16px;
  flex-direction: column;
  &.box1,
  &.box11 {
    .r1,
    .r2 {
      visibility: hidden;
    }
  }
  &.box2,
  &.box10 {
    .r1 {
      visibility: hidden;
    }
  }
  &.box5,
  &.box7 {
    .r1 {
      visibility: hidden;
    }
  }
  &.box6 {
    .r1,
    .r2 {
      visibility: hidden;
    }
  }
}

.r {
  width: 50px;
  height: 50px;
  background-color: rgb(254, 130, 130);
}
</style>
