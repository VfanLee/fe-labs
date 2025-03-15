<script setup lang="ts">
import * as THREE from 'three'

const containerRef = ref()

function init() {
  // 创建一个场景
  const scene = new THREE.Scene()
  /**
   * 创建一个 PerspectiveCamera（透视摄像机）。参数说明：
   * 1. 视野角度（FOV）
   * 2. 长宽比（aspect ratio）
   * 3. 近截面（near）
   * 4. 远截面（far）
   */
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // 创建一个 WebGLRenderer 渲染器
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 将 renderer（渲染器）的 dom 元素（renderer.domElement）添加到 HTML 文档中
  containerRef.value.appendChild(renderer.domElement)

  // 创建一个立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建一个材质
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // 创建一个网格
  const cube = new THREE.Mesh(geometry, material)
  // 将 cube 添加到 (0,0,0) 坐标
  scene.add(cube)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)

    // 让 cube 动起来
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }
  animate()
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
