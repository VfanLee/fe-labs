<script setup lang="ts">
const items = [
  {
    text: '基本概念',
    children: [
      { text: 'Tween', link: 'fundamentals-tween' },
      { text: 'Timeline', link: 'fundamentals-timeline' },
      { text: 'Easing', link: 'fundamentals-easing' },
    ],
  },
]
</script>

<template>
  <div class="home">
    <template v-for="item in items">
      <p>{{ item.text }}</p>
      <ul>
        <li v-for="itemChild in item.children">
          <RouterLink :to="{ name: itemChild.link }">{{ itemChild.text }}</RouterLink>
        </li>
      </ul>
    </template>
  </div>
</template>
