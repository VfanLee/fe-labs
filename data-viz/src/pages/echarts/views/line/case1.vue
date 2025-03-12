<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const option1: EChartsOption = {
  dataset: {
    source: [
      ['周', '值'],
      ['Mon', 150],
      ['Tue', 230],
      ['Wed', 224],
      ['Thu', 218],
      ['Fri', 135],
      ['Sat', 147],
      ['Sun', 260],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: { type: 'value' },
  series: [{ type: 'line' }],
}

const option2: EChartsOption = {
  dataset: {
    source: [
      ['周', '值'],
      ['Mon', 150],
      ['Tue', 230],
      ['Wed', 224],
      ['Thu', 218],
      ['Fri', 135],
      ['Sat', 147],
      ['Sun', 260],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: { type: 'value' },
  series: [
    {
      type: 'line',

      symbol: 'pin', // symbol 形状
      symbolSize: 32, // symbol 大小

      label: { show: true },

      smooth: true, // 平滑
      areaStyle: {}, // 面积图
    },
  ],
}

const option3: EChartsOption = {
  dataset: {
    source: [
      ['周', 's1', 's2'],
      ['Mon', 150, 250],
      ['Tue', 230, 330],
      ['Wed', 224, 324],
      ['Thu', 218, 318],
      ['Fri', 135, 235],
      ['Sat', 147, 247],
      ['Sun', 260, 360],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: { type: 'value' },
  series: [{ type: 'line' }, { type: 'line' }],
}
</script>

<template>
  <div>
    <h2>基础折线图</h2>
    <VueECharts :option="option1" width="600px" height="400px" />

    <h2>样式改造</h2>
    <VueECharts :option="option2" width="600px" height="400px" />

    <h2>多系列</h2>
    <VueECharts :option="option3" width="600px" height="400px" />
  </div>
</template>
