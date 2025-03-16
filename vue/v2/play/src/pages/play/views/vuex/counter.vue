<template>
  <div>
    <button @click="() => $store.dispatch('counter/increment', 2)">++</button>
    <button @click="() => $store.dispatch('counter/asyncIncrement', 2)">
      异步 ++
    </button>
    <span>{{ $store.state.counter.count }}</span>
    <button @click="() => $store.dispatch('counter/decrement', 1)">--</button>
  </div>
</template>

<script>
export default {};
</script>
