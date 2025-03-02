<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

const handlePlay = () => {
  tl.play()
}

const handlePause = () => {
  tl.pause()
}

const handleRestart = () => {
  tl.restart()
}

const handleSeek = () => {
  tl.seek(2)
}

const handleReverse = () => {
  tl.reverse()
}

const handleResume = () => {
  tl.resume()
}

onMounted(() => {
  tl.to('.to', { x: 100, duration: 1 })
    .to('.to', { y: 100, duration: 1 })
    .to('.to', { x: 200, duration: 1 })
    .to('.to', { y: 200, duration: 1 })
    .to('.to', { x: 300, duration: 1 })
    .to('.to', { y: 300, duration: 1 })
    .to('.to', { x: 400, duration: 1 })
    .to('.to', { y: 400, duration: 1 })
    .to('.to', { x: 500, duration: 1 })
    .to('.to', { y: 500, duration: 1 })
})
</script>

<template>
  <div>
    <button type="button" class="btn play" @click="handlePlay">play()</button>
    <button type="button" class="btn pause" @click="handlePause">pause()</button>
    <button type="button" class="btn restart" @click="handleRestart">restart()</button>
    <button type="button" class="btn seek" @click="handleSeek">seek()</button>
    <button type="button" class="btn reverse" @click="handleReverse">reverse()</button>
    <button type="button" class="btn resume" @click="handleResume">resume()</button>
  </div>

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
