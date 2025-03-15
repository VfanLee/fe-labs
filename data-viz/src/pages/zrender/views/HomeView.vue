<script setup lang="ts">
import * as zrender from 'zrender'

const containerRef = ref()

function init() {
  const zr = zrender.init(containerRef.value)

  // 圆
  const circle = new zrender.Circle({
    shape: {
      cx: 200,
      cy: 100,
      r: 50,
    },
    style: {
      fill: 'none',
      stroke: '#f00',
    },
  })
  zr.add(circle)

  // 矩形
  const rect = new zrender.Rect({
    shape: {
      x: 400,
      y: 50,
      width: 100,
      height: 100,
    },
    style: {
      fill: 'none',
      stroke: '#f00',
    },
  })
  zr.add(rect)

  // 直线
  const line = new zrender.Line({
    shape: {
      x1: 600,
      y1: 50,
      x2: 700,
      y2: 150,
    },
    style: {
      stroke: '#f00',
    },
  })
  zr.add(line)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="container" ref="containerRef"></div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
