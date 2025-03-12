<script setup lang="ts">
onMounted(() => {
  const svgEl = document.querySelector('.logo') as SVGPathElement
  console.dir(svgEl.getTotalLength())
})
</script>

<template>
  <div class="container">
    <svg width="500" height="200" viewBox=" 0 0 500 200">
      <rect x="0" y="0" width="100" height="50" fill="tomato" transform="translate(10, 10) rotate(30) skewX(30)"></rect>
    </svg>
  </div>

  <div class="container">
    <svg width="400" height="400">
      <circle cx="200" cy="200" r="180" stroke-width="20" stroke="#cccccc" fill="transparent"></circle>
      <circle
        class="circle"
        cx="200"
        cy="200"
        r="180"
        stroke-width="20"
        stroke="#216d31"
        fill="transparent"
        transform="matrix()"
      ></circle>
    </svg>
  </div>

  <div class="container">
    <svg t="1741769242517" viewBox="0 0 1024 1024" p-id="3566" width="200" height="200">
      <path
        class="logo"
        d="M512 1008C238.72 1008 16 785.28 16 512S238.72 16 512 16 1008 238.72 1008 512 785.28 1008 512 1008z m0-896c-220.8 0-400 179.2-400 400s179.2 400 400 400 400-179.2 400-400S732.8 112 512 112z"
        p-id="3567"
      ></path>
      <path
        class="logo"
        d="M352 480c-8.32 0-16.64-1.92-24.32-5.12-8.32-3.2-14.72-7.68-21.12-13.44-5.76-6.4-10.24-13.44-13.44-21.12s-5.12-16-5.12-24.32c0-3.84 0-8.32 1.28-12.8 0.64-3.84 1.92-7.68 3.84-11.52 1.28-3.84 3.2-7.68 5.76-11.52 1.92-3.2 5.12-6.4 7.68-9.6 6.4-5.76 12.8-10.24 21.12-13.44 11.52-5.12 24.32-6.4 36.48-3.84 4.48 0 8.32 1.92 12.16 3.84 3.84 1.28 7.68 3.2 10.88 5.76 3.84 2.56 7.04 5.12 10.24 7.68l7.68 9.6c2.56 3.84 4.48 7.68 5.76 11.52 1.92 3.84 3.2 7.68 3.84 11.52 0.64 4.48 1.28 8.96 1.28 12.8 0 16.64-7.04 33.28-18.56 45.44-3.2 2.56-6.4 5.12-10.24 7.68-3.2 2.56-7.04 4.48-10.88 5.76-3.84 1.92-7.68 3.2-12.16 3.84-3.84 0-8.32 1.28-12.16 1.28zM672 480c-8.32 0-16.64-1.28-24.32-5.12-8.32-3.2-14.72-7.68-21.12-13.44-11.52-12.16-18.56-28.8-18.56-45.44s7.04-33.28 18.56-45.44c6.4-5.76 12.8-10.24 21.12-13.44 11.52-5.12 24.32-6.4 37.12-3.84 3.84 0 7.68 1.92 11.52 3.84 3.84 1.28 7.68 3.2 10.88 5.76 3.84 2.56 7.04 5.12 10.24 7.68 11.52 12.16 18.56 28.8 18.56 45.44s-7.04 33.28-18.56 45.44c-3.2 2.56-6.4 5.12-10.24 7.68-3.2 2.56-7.04 4.48-10.88 5.76-3.84 1.92-7.68 3.2-11.52 3.84-4.48 0-8.32 1.28-12.8 1.28zM672 732.8a48.64 48.64 0 0 1-42.24-24.96c-26.88-48-65.28-71.04-118.4-71.04s-91.52 22.4-117.76 69.76c-12.8 23.04-42.24 31.36-65.28 18.56a48.192 48.192 0 0 1-18.56-65.28c42.88-78.08 112.64-119.68 201.6-119.68s158.72 41.6 202.24 120.96c12.8 23.04 4.48 52.48-18.56 65.28-7.68 3.84-15.36 5.76-23.04 5.76z"
        p-id="3568"
      ></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #aaa;
  }

  .circle {
    animation: circle 10s linear infinite;
  }

  .logo {
    fill: none;
    stroke: #333;
    stroke-width: 1;
    animation: taobao 5s linear forwards;
  }
}

@keyframes taobao {
  0% {
    fill: #fff;
    stroke-dasharray: 6885;
    stroke-dashoffset: 6885;
  }
  100% {
    fill: blue;
    stroke-dasharray: 6885;
    stroke-dashoffset: 0;
  }
}
@keyframes circle {
  0% {
    stroke-dasharray: 10 1131;
  }
  100% {
    stroke-dasharray: 1131 0;
  }
}
</style>
