<script setup lang="ts">
import useCounter from '../../store/counter'

const counter = useCounter()
</script>

<template>
  <button type="button" @click="() => counter.increment(2)">++</button>
  <button type="button" @click="() => counter.asyncIncrement(2)">异步 ++</button>
  <span>{{ counter.count }}</span>
  <button type="button" @click="() => counter.decrement(1)">--</button>
</template>
