<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const option1: EChartsOption = {
  xAxis: { type: 'category' },
  yAxis: { type: 'value' },
  dataset: {
    source: [
      ['day', 'value'],
      ['Mon', 120],
      ['Tue', 200],
      ['Wed', 150],
      ['Thu', 80],
      ['Fri', 70],
      ['Sat', 110],
      ['Sun', 130],
    ],
  },
  series: [{ type: 'bar' }],
}

const option2: EChartsOption = {
  xAxis: { type: 'value' },
  yAxis: { type: 'category' },
  dataset: {
    source: [
      ['day', 'value'],
      ['Mon', 120],
      ['Tue', 200],
      ['Wed', 150],
      ['Thu', 80],
      ['Fri', 70],
      ['Sat', 110],
      ['Sun', 130],
    ],
  },
  series: [{ type: 'bar' }],
}

const option3: EChartsOption = {
  xAxis: { type: 'category' },
  yAxis: { type: 'value' },
  dataset: {
    source: [
      ['day', 's1', 's2'],
      ['Mon', 120, 220],
      ['Tue', 200, 300],
      ['Wed', 150, 250],
      ['Thu', 80, 180],
      ['Fri', 70, 170],
      ['Sat', 110, 210],
      ['Sun', 130, 230],
    ],
  },
  series: [{ type: 'bar' }, { type: 'bar' }],
}

const option4: EChartsOption = {
  xAxis: { type: 'category' },
  yAxis: { type: 'value' },
  dataset: {
    source: [
      ['day', 's1', 's2'],
      ['Mon', 120, 220],
      ['Tue', 200, 300],
      ['Wed', 150, 250],
      ['Thu', 80, 180],
      ['Fri', 70, 170],
      ['Sat', 110, 210],
      ['Sun', 130, 230],
    ],
  },
  series: [
    {
      type: 'bar',
      stack: 's', // 名称随意，需要堆叠的柱状图需要相同
    },
    { type: 'bar', stack: 's' },
  ],
}
</script>

<template>
  <div>
    <h2>基础柱状图</h2>
    <VueECharts :option="option1" width="600px" height="400px" />

    <h2>水平柱状图</h2>
    <VueECharts :option="option2" width="600px" height="400px" />

    <h2>多系列柱状图</h2>
    <VueECharts :option="option3" width="600px" height="400px" />

    <h2>堆叠柱状图 stack</h2>
    <VueECharts :option="option4" width="600px" height="400px" />
  </div>
</template>
