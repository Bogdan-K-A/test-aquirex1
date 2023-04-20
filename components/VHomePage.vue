<!-- Please remove this file from your project -->
<template lang="pug">
main.registration-page
  //- LegalEntity
  //- VEntepreneur
  LegalEntity(v-if="currentForm")
  VEntepreneur(v-if="!currentForm")
  
  img(src="@/assets/svg/logo.svg", alt="").registration-page__logo
  .registration-page__img-wrapper
    img(src="@/assets/img/Group-33922.png", alt="").registration-page__img
  .registration-page__wrapper-btn
    a(href="https://www.instagram.com/nailspot.kyiv").registration-page__btn-login Sign in
    
</template>

<script>
export default {
  name: "VHomePage",
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
  justify-content: space-between;

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

  /* &__wrapper-btn { */
  /* width: 100px; */
  /* margin: 24px 64px 0 0; */
  /* height: 25px; */
  /* } */

  &__btn-login {
    display: inline-block;
    margin: 24px 64px 0 0;

    color: #0ba39a;
    border-bottom: 1px solid #0ba39a;
  }
}
/* .registration-page-container {
  position: absolute;
  top: calc(50% - 346px / 2);
  left: calc(50% - 512px / 2);

  
  width: 512px;
  height: 346px;

  &__title {
    margin-bottom: 32px;
  }
} */
</style>
