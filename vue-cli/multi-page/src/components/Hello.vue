<template>
  <div class="hello">Hello {{ msg }}</div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String,
  },
}
</script>
