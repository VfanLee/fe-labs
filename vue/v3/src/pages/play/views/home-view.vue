<template>
  <div class="home">
    <ul>
      <li><RouterLink :to="{ name: 'v-model' }">v-model</RouterLink></li>
      <li><RouterLink :to="{ name: 'components' }">组件</RouterLink></li>
      <li><RouterLink :to="{ name: 'perf-opt' }">性能优化</RouterLink></li>
    </ul>
  </div>
</template>
