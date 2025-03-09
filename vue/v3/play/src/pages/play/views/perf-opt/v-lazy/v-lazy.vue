<script setup lang="ts">
import type { Directive } from 'vue'

const images: Record<string, { default: string }> = import.meta.glob('@/assets/images/*.jpg', {
  eager: true,
})
const items = Object.values(images).map((item) => item.default)

const vLazy: Directive = {
  async mounted(el, binding) {
    const url = await import('@/assets/logo.svg')
    el.src = url.default
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry)
          el.src = binding.value
          observer.unobserve(el)
        }
      })
    })
    observer.observe(el)
  },
}
</script>

<template>
  <div class="demo-container">
    <img v-for="item of items" :key="item" alt="" v-lazy="item" />
  </div>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  div {
    height: 500px;
  }

  img {
    width: 500px;
    height: 500px;
  }
}
</style>
