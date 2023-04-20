<template>
  <button class="btn" v-bind:type="type" v-on="$listeners">Next</button>
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

  background: #0ba39a;
  color: white;

  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
