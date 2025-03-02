<script setup lang="ts"></script>

<template>
  <ul>
    <li v-for="item in $router.getRoutes()">
      <RouterLink :to="item.path">{{ item.name }}</RouterLink>
    </li>
  </ul>
</template>
