<script setup lang="ts">
import { v4 as uuid } from 'uuid'
import defaultOption from './option'

import type { EChartsOption } from 'echarts'
import wonderland from './themes/wonderland'
import * as echarts from 'echarts'

defineOptions({ name: 'VueECharts' })

const id = ref('vue_echarts_' + uuid())
const {
  option = {},
  width = '100%',
  height = '100%',
} = defineProps<{
  option?: EChartsOption
  width?: string
  height?: string
}>()

const VueEChartsRef = shallowRef<HTMLElement | null>(null)
let chart: echarts.EChartsType | null = null

const initChart = () => {
  if (!VueEChartsRef.value) return
  if (!chart) {
    chart = echarts.init(VueEChartsRef.value, wonderland)
  }
  chart.setOption({
    ...defaultOption,
    ...option,
  })
}

watch(
  () => option,
  () => {
    if (chart) {
      chart.setOption(option)
    }
  },
)

onMounted(initChart)

onUnmounted(() => {
  if (chart) {
    chart.dispose()
    chart = null
  }
})
</script>

<template>
  <div class="vue-echarts" :id="id" ref="VueEChartsRef" :style="{ width, height }"></div>
</template>
