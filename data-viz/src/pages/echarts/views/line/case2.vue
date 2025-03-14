<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const option1: EChartsOption = {
  legend: {
    data: ['系列1', '系列2'],
  },
  dataset: {
    source: [
      ['月份', '系列1', '系列2'],
      ['1月', 50, 450],
      ['2月', 80, 420],
      ['3月', 120, 400],
      ['4月', 150, 380],
      ['5月', 200, 350],
      ['6月', 250, 320],
      ['7月', 300, 300],
      ['8月', 350, 280],
      ['9月', 400, 250],
      ['10月', 450, 200],
      ['11月', 480, 150],
      ['12月', 500, 100],
    ],
  },
  xAxis: {
    type: 'category',
    name: '月份',
  },
  yAxis: {
    type: 'value',
    name: '数值',
    min: 0,
    max: 500,
  },
  series: [
    {
      type: 'line',
      name: '系列1',
      encode: {
        x: '月份',
        y: '系列1',
      },
    },
    {
      type: 'line',
      name: '系列2',
      encode: {
        x: '月份',
        y: '系列2',
      },
    },
  ],
}

// const option2: EChartsOption = {
//   legend: {
//     data: ['系列1', '系列2'],
//   },
//   dataset: {
//     source: [
//       ['月份', '系列1', '系列2'],
//       ['1月', 150, 350],
//       ['2月', 80, 420],
//       ['3月', 120, 400],
//       ['4月', 150, 380],
//       ['5月', 200, 350],
//       ['6月', 250, 320],
//       ['7月', 300, 300],
//       ['8月', 350, 280],
//       ['9月', 400, 250],
//       ['10月', 450, 200],
//       ['11月', 480, 150],
//       ['12月', 500, 100],
//     ],
//   },
//   xAxis: {
//     type: 'value', // x 轴为数值轴
//     name: '数值',
//     min: 0,
//     max: 500,
//   },
//   yAxis: {
//     type: 'category', // y 轴为类目轴
//     name: '月份',
//   },
//   series: [
//     {
//       type: 'line',
//       name: '系列1',
//       encode: {
//         x: '系列1', // x 轴对应 '系列1' 数据
//         y: '月份', // y 轴对应 '月份' 数据
//       },
//     },
//     {
//       type: 'line',
//       name: '系列2',
//       encode: {
//         x: '系列2', // x 轴对应 '系列2' 数据
//         y: '月份', // y 轴对应 '月份' 数据
//       },
//     },
//   ],
// }
</script>

<template>
  <div>
    <h2>多系列 + 双坐标轴</h2>
    <VueECharts :option="option1" width="600px" height="400px" />

    <!-- <VueECharts :option="option2" width="600px" height="400px" /> -->
  </div>
</template>
