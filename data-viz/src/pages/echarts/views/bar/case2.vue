<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const option: EChartsOption = {
  xAxis: { show: false, type: 'value', max: 120 + 220 + 60 },
  yAxis: { show: false, type: 'category' },
  grid: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  dataset: {
    source: [
      ['day', 's1', 's2', 's3'],
      ['Mon', 120, 220, 60],
    ],
  },
  series: [
    { type: 'bar', stack: 's', barWidth: '12' },
    { type: 'bar', stack: 's', barWidth: '12' },
    { type: 'bar', stack: 's', barWidth: '12' },
  ],
}
</script>

<template>
  <div>
    <h1>堆叠 + 多系列（仿进度条）</h1>
    <VueECharts :option="option" width="600px" height="12px" />
  </div>
</template>
