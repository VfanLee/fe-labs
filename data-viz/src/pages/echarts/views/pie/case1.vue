<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const option1: EChartsOption = {
  dataset: {
    source: [
      ['name', 's1'],
      ['Search Engine', 1048],
      ['Direct', 735],
      ['Email', 580],
      ['Union Ads', 484],
      ['Video Ads', 300],
    ],
  },
  series: [{ type: 'pie' }],
}

const option2: EChartsOption = {
  dataset: {
    source: [
      ['name', 's1'],
      ['Search Engine', 1048],
      ['Direct', 735],
      ['Email', 580],
      ['Union Ads', 484],
      ['Video Ads', 300],
    ],
  },
  series: [
    {
      type: 'pie',

      radius: ['50%', '70%'], // 内半径，外半径
    },
  ],
}

const option3: EChartsOption = {
  dataset: {
    source: [
      ['name', 's1'],
      ['Search Engine', 1048],
      ['Direct', 735],
      ['Email', 580],
      ['Union Ads', 484],
      ['Video Ads', 300],
    ],
  },
  series: [
    {
      type: 'pie',

      radius: ['20%', '80%'],

      roseType: 'radius', // radius | area
    },
  ],
}
</script>

<template>
  <div>
    <h2>基础饼图</h2>
    <p>饼图不需要配置坐标轴</p>
    <VueECharts :option="option1" width="600px" height="400px" />

    <h2>环形图</h2>
    <VueECharts :option="option2" width="600px" height="400px" />

    <h2>南丁格尔图（玫瑰图）</h2>
    <VueECharts :option="option3" width="600px" height="400px" />
  </div>
</template>
