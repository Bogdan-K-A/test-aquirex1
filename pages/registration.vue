<template lang="pug">
section
  LegalEntity(v-if="currentForm")
  VEntepreneur(v-else)
</template>

<script>
export default {
  name: "VRegistration",
  auth: "guest",

  computed: {
    currentForm() {
      return this.$store.state.store.currentRadioBtn;
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-page {
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  background: #f4f4f4;

  &__img-wrapper {
    position: relative;
  }

  &__img {
    width: 353px;
    height: 100vh;
  }

  &__logo {
    position: absolute;
    width: 273px;
    height: 76px;
    left: 2%;
    top: calc(50% - 76px / 2);
    z-index: 9;
  }

  &__btn-login {
    /* display: inline-block; */
    margin: 24px 64px 0 0;

    color: #0ba39a;
    border-bottom: 1px solid #0ba39a;
    cursor: pointer;
  }
  &__wrapper-btn {
    margin-left: auto;
  }
}
</style>
