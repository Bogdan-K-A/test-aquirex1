<template>
  <button class="btn" v-bind:type="type" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 58px;
  margin-top: 32px;

  background: #0ba39a;
  color: white;

  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
