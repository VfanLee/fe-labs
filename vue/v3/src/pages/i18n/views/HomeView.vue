<script setup lang="ts">
const currentDate = ref(new Date())
const currentDateHtml = ref(`<span style="color: var(--primary-color)">${new Date()}</span>`)
</script>

<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>{{ $t('currentDate', { date: currentDate }) }}</section>
    <section v-html="$t('currentDate', { date: currentDateHtml })"></section>
  </div>
</template>
