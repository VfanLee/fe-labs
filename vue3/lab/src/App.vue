<script setup>
import { routes } from './router'
</script>

<template>
  <nav>
    <ul>
      <li v-for="r of routes" :key="r.name">
        <RouterLink :to="r.path">{{ r.meta.title }}</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <Router-View />
  </main>
</template>
