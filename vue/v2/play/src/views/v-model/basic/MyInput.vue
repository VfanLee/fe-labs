<template>
  <input
    class="custom-input"
    type="text"
    :value="value"
    @input="(e) => $emit('input', e.target.value)"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-input {
  line-height: 32px;
  height: 32px;
  padding: 0px 12px;
  border-width: 1px;
  border-radius: 8px;
  outline: none;

  &:hover {
    border-color: blue;
  }
}
</style>
