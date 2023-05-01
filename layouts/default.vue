<template lang="pug">
div
  div.home-page
    img(src="@/assets/svg/logo.svg", alt="").home-page__logo
    .home-page__img-wrapper
      img(src="@/assets/img/Group-33922.png", alt="").home-page__img
    .home-page__wrapper-btn(v-if="currentPage" @click="onChangeForm")
      nuxt-link( to="/login").home-page__btn-login Sign in
    .home-page__wrapper-btn(v-else @click="onChangeForm")
      nuxt-link(to="/registration" ).home-page__btn-login Sign up
  main  
    Nuxt
  
  
</template>

<script>
export default {
  data() {
    return {
      currentPage: false,
    };
  },

  methods: {
    onChangeForm() {
      this.currentPage = !this.currentPage;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
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
    /* margin: 24px 64px 0 0; */

    color: #0ba39a;
    border-bottom: 1px solid #0ba39a;
    cursor: pointer;
  }
  &__wrapper-btn {
    margin: 24px 64px 0 auto;
    height: 24px;

    /* margin-left: auto; */
  }
}
</style>
