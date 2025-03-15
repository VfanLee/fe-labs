<script setup lang="ts">
import { Rectangle } from './Shape'

const drawcvsRef = shallowRef<HTMLCanvasElement>()
const shapes = reactive<Rectangle[]>([])
let currentRect: Rectangle | null = null
let isDrawing = false
let isDragging = false
let dragTarget: Rectangle | null = null
let dragStartX = 0
let dragStartY = 0

let cvs: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
let dpr = 1

function initCanvas() {
  if (!drawcvsRef.value) return

  cvs = drawcvsRef.value
  dpr = window.devicePixelRatio || 1
  const rect = cvs.getBoundingClientRect()
  const width = rect.width
  const height = rect.height

  cvs.width = width * dpr
  cvs.height = height * dpr
  cvs.style.width = `${width}px`
  cvs.style.height = `${height}px`

  ctx = cvs.getContext('2d')!
  ctx.scale(dpr, dpr)
  render()
}

function render() {
  if (!ctx) return
  ctx.clearRect(0, 0, cvs.width, cvs.height)
  shapes.forEach((shape) => shape.draw(ctx))
  currentRect?.draw(ctx)
}

function getCanvasPosition(e: MouseEvent) {
  const rect = cvs.getBoundingClientRect()
  return {
    x: (e.clientX - rect.left) * (cvs.width / rect.width / dpr),
    y: (e.clientY - rect.top) * (cvs.height / rect.height / dpr),
  }
}

function handleMouseDown(e: MouseEvent) {
  const pos = getCanvasPosition(e)

  // 从最上层开始检测
  const target = shapes
    .slice()
    .reverse()
    .find((shape) => shape.isInside(pos.x, pos.y))

  if (target) {
    isDragging = true
    dragTarget = target
    dragStartX = pos.x
    dragStartY = pos.y
  } else {
    isDrawing = true
    currentRect = new Rectangle(pos.x, pos.y)
  }
}

function handleMouseMove(e: MouseEvent) {
  const pos = getCanvasPosition(e)

  if (isDragging && dragTarget) {
    const dx = pos.x - dragStartX
    const dy = pos.y - dragStartY
    dragTarget.move(dx, dy)
    dragStartX = pos.x
    dragStartY = pos.y
    requestAnimationFrame(render)
  } else if (isDrawing && currentRect) {
    currentRect.endX = pos.x
    currentRect.endY = pos.y
    requestAnimationFrame(render)
  }
}

function handleMouseUp() {
  if (isDragging) {
    isDragging = false
    dragTarget = null
  } else if (isDrawing && currentRect) {
    shapes.push(currentRect)
    currentRect = null
    isDrawing = false
  }
  render()
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', initCanvas)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  cvs.addEventListener('mousedown', handleMouseDown)
})

onUnmounted(() => {
  window.removeEventListener('resize', initCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
  cvs.removeEventListener('mousedown', handleMouseDown)
})
</script>

<template>
  <div class="canvas-container">
    <canvas ref="drawcvsRef"></canvas>
  </div>
</template>

<style scoped>
.canvas-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
}

canvas {
  background: #aaa;
  touch-action: none;
  width: 80vw !important;
  height: 80vh !important;
}
</style>
