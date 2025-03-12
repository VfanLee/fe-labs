<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const option: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}
</script>

<template>
  <div>
    <h2>示例</h2>
    <VueECharts :option="option" width="600px" height="400px" />
  </div>
</template>
