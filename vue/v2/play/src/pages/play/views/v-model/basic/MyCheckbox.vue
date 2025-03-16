<template>
  <label class="custom-checkbox">
    <input
      type="checkbox"
      class="hidden-checkbox"
      :checked="value"
      @change="(e) => $emit('input', e.target.checked)"
    />
    <span class="checkmark"></span>
    <span class="label-text">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "MyCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  margin: 0;
}

.hidden-checkbox {
  display: none;
}

.checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  border-width: 1px;
  border-radius: 4px;
}

.hidden-checkbox:checked ~ .checkmark {
  background-color: blue;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.hidden-checkbox:checked ~ .checkmark:after {
  display: block;
}

.label-text {
  user-select: none;
}
</style>
