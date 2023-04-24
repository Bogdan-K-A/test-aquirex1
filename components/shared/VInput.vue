<template lang="pug">
.input-form__wrapper
    label(for="") {{title}}
    input()
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
