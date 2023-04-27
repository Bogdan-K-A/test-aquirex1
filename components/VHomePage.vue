<!-- Please remove this file from your project -->
<template lang="pug">
main.registration-page

  div(v-if="loginForm")
    VLogin
  div(v-else)
    LegalEntity(v-if="currentForm")
    VEntepreneur(v-else)
  
  img(src="@/assets/svg/logo.svg", alt="").registration-page__logo
  .registration-page__img-wrapper
    img(src="@/assets/img/Group-33922.png", alt="").registration-page__img
  .registration-page__wrapper-btn
    button(@click="onShowLoginForm").registration-page__btn-login {{loginForm ? 'Sign up':'Sign in'}}
    
</template>

<script>
export default {
  name: "VHomePage",
  data() {
    return {
      loginForm: false,
    };
  },
  computed: {
    currentForm() {
      return this.$store.state.store.currentRadioBtn;
    },
  },

  methods: {
    onShowLoginForm() {
      console.log("click");
      if (!this.loginForm) {
        this.loginForm = true;
      } else {
        this.loginForm = false;
      }
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
