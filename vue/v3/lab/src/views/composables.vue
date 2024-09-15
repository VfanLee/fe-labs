<script setup>
import { useMouse } from '@/use/mouse'

// 每一个调用 useMouse() 的组件实例会创建其独有的 x、y 状态拷贝，因此他们不会互相影响。
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
