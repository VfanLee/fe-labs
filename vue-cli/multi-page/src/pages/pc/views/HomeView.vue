<template>
  <div class="home">
    <Hello msg="桌面端" />
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue'

export default {
  name: 'HomeView',
  components: {
    Hello,
  },
}
</script>
