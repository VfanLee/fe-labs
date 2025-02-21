<script setup lang="ts"></script>

<template>
  <Layout>
    <template #menu>
      <ul class="menu">
        <li><RouterLink :to="{ name: 'basic' }">v-model 基础示例</RouterLink></li>
        <li><RouterLink :to="{ name: 'multi-value' }">绑定多个 v-model</RouterLink></li>
      </ul>
    </template>
  </Layout>
</template>
