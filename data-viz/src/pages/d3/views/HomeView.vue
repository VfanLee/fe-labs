<script setup lang="ts">
import * as d3 from 'd3'
import { ref, onMounted } from 'vue'

const chart = ref(null)
const data = [40, 80, 150, 100, 60]

function init() {
  const svg = d3.select(chart.value).append('svg').attr('width', 600).attr('height', 400)

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 60)
    .attr('y', (d) => 300 - d)
    .attr('width', 50)
    .attr('height', (d) => d)
    .attr('fill', 'teal')
}

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="chart"></div>
</template>
