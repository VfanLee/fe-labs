<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>()
let ctx: CanvasRenderingContext2D | null = null
const isDraw = ref(false)

const renderCanvas = () => {
  if (!canvasRef.value) return

  const canvas = canvasRef.value
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  // ctx.strokeStyle = '#f00' // 设置画笔颜色
  ctx.lineWidth = 3 // 设置画笔宽度
  ctx.lineCap = 'round' // 设置画笔端点样式为圆形
  ctx.lineJoin = 'round' // 设置画笔连接处样式为圆角
}

const handleMousedown = (e: MouseEvent) => {
  if (!ctx) return

  isDraw.value = true
  const { offsetX, offsetY } = e
  ctx.beginPath()
  ctx.moveTo(offsetX, offsetY)
}
const handleMouseup = () => {
  isDraw.value = false
}
const handleMousemove = (e: MouseEvent) => {
  if (!ctx || !isDraw.value) return

  const { offsetX, offsetY } = e
  ctx.lineTo(offsetX, offsetY)
  ctx.stroke()
}

const handleSubmit = () => {
  if (!canvasRef.value || !ctx) return

  let aEl = document.createElement('a')
  aEl.href = canvasRef.value.toDataURL('image/png', 1)
  aEl.download = 'signature.png'
  aEl.click()
  aEl.remove()
}
const handleClean = () => {
  if (!canvasRef.value || !ctx) return

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
}

onMounted(() => {
  renderCanvas()
})
</script>

<template>
  <div class="electronic-signature">
    <h1>电子签名</h1>
    <div class="canvas-container">
      <canvas
        width="600"
        height="400"
        class="canvas"
        ref="canvasRef"
        @mousedown="handleMousedown"
        @mouseup="handleMouseup"
        @mousemove="handleMousemove"
      ></canvas>
    </div>
    <div class="btn-container">
      <button type="button" @click="handleSubmit">提交签名</button>
      <button type="button" @click="handleClean">清空签名</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.canvas {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: url(@/assets/pen.svg) 0 16, auto;
}

.btn-container {
  display: flex;
  gap: 8px;
  margin-block-start: 24px;
}
</style>
