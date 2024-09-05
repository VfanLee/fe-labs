<script setup>
import { getCurrentInstance } from 'vue'

console.log('$myname:', getCurrentInstance().proxy.$myname)
</script>

<template>
  <section>
    {{ $myname }}
  </section>

  <section>
    {{ $randomNumber(1, 12) }}
  </section>

  <section>
    {{ $randomString() }}
  </section>
</template>
