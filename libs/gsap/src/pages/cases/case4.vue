<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // 第一部分 - 卡片弹出
  gsap.to('.card', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3, // 依次动画
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.cards',
      start: 'top 80%',
      end: 'top 50%',
      scrub: true,
    },
  })

  // 第二部分 - 盒子从左到右并旋转
  gsap.to('.rotate-box', {
    x: '100vw',
    rotation: 0,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.rotate-box',
      start: 'top 90%',
      end: 'top 50%',
      scrub: true,
    },
  })

  // 第三部分 - 3D 视差滚动
  gsap.to('.parallax-bg', {
    y: '-20%',
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })

  gsap.to('.parallax-content', {
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.parallax-content',
      start: 'top 70%',
      end: 'top 40%',
      scrub: true,
    },
  })
})
</script>

<template>
  <!-- 第一部分 - 卡片展示 -->
  <section class="section">
    <h1>第一部分 - 卡片展示</h1>
    <div class="cards">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </section>

  <!-- 第二部分 - 左到右 & 旋转 -->
  <section class="section">
    <h1>第二部分 - 从左到右并旋转</h1>
    <div class="rotate-box"></div>
  </section>

  <!-- 第三部分 - 3D 视差滚动 -->
  <section class="section parallax">
    <div class="parallax-bg"></div>
    <h1 class="parallax-content">第三部分 - 3D 视差滚动</h1>
  </section>
</template>

<style lang="scss">

body {
  background: #111;
  color: white;
}

.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
}

/* 第一部分 - 卡片展示 */
.cards {
  display: flex;
  gap: 20px;
}

.card {
  width: 150px;
  height: 200px;
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  border-radius: 12px;
  opacity: 0;
  transform: translateY(50px);
}

/* 第二部分 - 从左到右并旋转 */
.rotate-box {
  width: 100px;
  height: 100px;
  background: #34d399;
  position: absolute;
  left: -200px;
  top: 50%;
  transform: rotate(-90deg);
}

/* 第三部分 - 3D 视差滚动 */
.parallax {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  width: 120%;
  height: 120%;
  background: url('https://fastly.picsum.photos/id/170/1920/1080.jpg?hmac=TC7JWErs_9TssLjuJiTW3RaEK_AOHBebE1a9SKA5gXc') center/cover;
  top: 0;
  left: 0;
}

.parallax-content {
  font-size: 2rem;
  font-weight: bold;
  transform: scale(0.8);
  opacity: 0;
  position: relative;
  z-index: 10;
}
</style>
