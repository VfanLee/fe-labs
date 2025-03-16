<template>
  <div class="multi-input">
    <input
      type="text"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
    />
    <input
      type="text"
      :value="header"
      @input="(e) => $emit('update:header', e.target.value)"
    />
    <input
      type="text"
      :value="body"
      @input="(e) => $emit('update:body', e.target.value)"
    />
    <input
      type="text"
      :value="footer"
      @input="(e) => $emit('update:footer', e.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "MultiInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
    footer: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.multi-input {
  display: flex;
  gap: 8px;
  input {
    height: 30px;
    line-height: 30px;
    border-width: 1px;
    border-radius: 8px;
  }
}
</style>
