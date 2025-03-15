<script setup lang="ts">
import request from '@/utils/request'
import * as echarts from 'echarts'

const mapRef = ref()

// 散点图数据
const points = [
  { name: '新疆', value: [87.628579, 43.793301], itemStyle: { color: '#00EEFF' } }, // 新疆
  { name: '四川', value: [104.076452, 30.651696], itemStyle: { color: '#00EEFF' } }, // 四川
  { name: '甘肃', value: [103.826777, 36.060634], itemStyle: { color: '#00EEFF' } }, // 甘肃
  { name: '云南', value: [102.709372, 25.046432], itemStyle: { color: '#00EEFF' } }, // 云南
  { name: '广西', value: [108.327537, 22.816659], itemStyle: { color: '#00EEFF' } }, // 广西
  { name: '湖南', value: [112.982951, 28.116007], itemStyle: { color: '#00EEFF' } }, // 湖南
  { name: '山东', value: [117.020725, 36.670201], itemStyle: { color: '#00EEFF' } }, // 山东
  { name: '河南', value: [113.753094, 34.767052], itemStyle: { color: '#00EEFF' } }, // 河南
  { name: '山西', value: [112.578781, 37.813948], itemStyle: { color: '#00EEFF' } }, // 山西
  { name: '福建', value: [119.296194, 26.101082], itemStyle: { color: '#00EEFF' } }, // 福建
  { name: '浙江', value: [120.152575, 30.266619], itemStyle: { color: '#00EEFF' } }, // 浙江
  { name: '江苏', value: [118.763563, 32.061377], itemStyle: { color: '#00EEFF' } }, // 江苏
  { name: '北京', value: [116.407387, 39.904179], itemStyle: { color: '#A6283F' } }, // 北京
  { name: '陕西', value: [108.953939, 34.266611], itemStyle: { color: '#00EEFF' } }, // 陕西
  { name: '广东', value: [113.266887, 23.133306], itemStyle: { color: '#00EEFF' } }, // 广东
]

// 线条数据
const linesData = [
  {
    coords: [
      [116.407387, 39.904179],
      [87.628579, 43.793301],
    ],
  }, // 北京->新疆
  {
    coords: [
      [116.407387, 39.904179],
      [104.076452, 30.651696],
    ],
  }, // 北京->四川
  {
    coords: [
      [116.407387, 39.904179],
      [103.826777, 36.060634],
    ],
  }, // 北京->甘肃
  {
    coords: [
      [116.407387, 39.904179],
      [102.709372, 25.046432],
    ],
  }, // 北京->云南
  {
    coords: [
      [116.407387, 39.904179],
      [108.327537, 22.816659],
    ],
  }, // 北京->广西
  {
    coords: [
      [116.407387, 39.904179],
      [112.982951, 28.116007],
    ],
  }, // 北京->湖南
  {
    coords: [
      [116.407387, 39.904179],
      [117.020725, 36.670201],
    ],
  }, // 北京->山东
  {
    coords: [
      [116.407387, 39.904179],
      [113.753094, 34.767052],
    ],
  }, // 北京->河南
  {
    coords: [
      [116.407387, 39.904179],
      [112.578781, 37.813948],
    ],
  }, // 北京->山西
  {
    coords: [
      [116.407387, 39.904179],
      [119.296194, 26.101082],
    ],
  }, // 北京->福建
  {
    coords: [
      [116.407387, 39.904179],
      [120.152575, 30.266619],
    ],
  }, // 北京->浙江
  {
    coords: [
      [116.407387, 39.904179],
      [118.763563, 32.061377],
    ],
  }, // 北京->安徽
  {
    coords: [
      [116.407387, 39.904179],
      [113.266887, 23.133306],
    ],
  }, // 北京->广东
  {
    coords: [
      [116.407387, 39.904179],
      [108.953939, 34.266611],
    ],
  }, // 北京->陕西
]

// 飞机svg
const planePath =
  'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

onMounted(() => {
  request({
    url: '/data/china.json',
    method: 'GET',
  }).then((res) => {
    console.log(res)

    const option: echarts.EChartsOption = {
      backgroundColor: '#0E2152', // 背景颜色
      geo: {
        map: 'china', // 地图配置
        label: {
          show: true, // 图形上的文本标签
          color: '#fff', // 通常状态下的文本颜色
        },
        emphasis: {
          label: {
            show: true,
            color: '#fff', // 高亮状态下的文本颜色
          },
          itemStyle: {
            areaColor: '#2386AD', // 高亮状态下的区域颜色
            borderWidth: 0, // 高亮状态下的边框宽度
          },
        },
        itemStyle: {
          borderColor: '#5089EC', // 通常状态下的边框颜色
          borderWidth: 1, // 通常状态下的边框宽度
          areaColor: {
            // 地图区域的颜色
            type: 'radial', // 径向渐变
            x: 0.5, // 圆心
            y: 0.5, // 圆心
            r: 0.8, // 半径
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 102, 154, 0)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 102, 154, .4)', // 100% 处的颜色
              },
            ],
          },
        },
      },
      series: [
        {
          type: 'effectScatter', // 带有涟漪特效动画的散点（气泡）图
          coordinateSystem: 'geo', // 该系列使用的坐标系: 地理坐标系
          effectType: 'ripple', // 特效类型，目前只支持涟漪特效 'ripple'
          showEffectOn: 'render', // 配置何时显示特效
          rippleEffect: {
            period: 10, // 动画的周期，秒数
            scale: 4, // 动画中波纹的最大缩放比例
            brushType: 'fill', // 波纹的绘制方式，可选 'stroke' 和 'fill'
          },
          zlevel: 1, // 所有图形的 zlevel 值
          data: points, // 散点数据
        },
        {
          type: 'lines', // 线条系列数据
          zlevel: 2,
          symbol: ['none', 'arrow'], // 标记的图形: 箭头
          symbolSize: 10, // 标记的大小
          effect: {
            show: true, // 线条特效的配置
            period: 6, // 特效动画的时间，单位秒
            trailLength: 0, // 特效尾迹的长度，取值 [0, 1]，值越大，尾迹越重
            symbol: planePath, // 特效图形的标记，可选 'circle' 等
            symbolSize: 15, // 特效标记的大小
          },
          lineStyle: {
            color: '#93EBF8', // 线条颜色
            width: 2.5, // 线条宽度
            opacity: 0.6, // 尾迹线条透明度
            curveness: 0.2, // 尾迹线条曲直度
          },
          data: linesData, // 线条数据
        },
      ],
    }
    echarts.registerMap('china', res as any)
    const chart = echarts.init(mapRef.value)
    chart.setOption(option)
  })
})
</script>

<template>
  <div>
    <h2>中国地图</h2>
    <div class="map" ref="mapRef"></div>
  </div>
</template>

<style lang="scss" scoped>
.map {
  width: 1200px;
  height: 800px;
}
</style>
