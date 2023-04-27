<template lang="pug">
.login-page-container
    h2.login-page-container__title Sign in
    form( @submit.prevent="handleSubmit" ).form
        div
            VInput(
                v-bind="formData.login"
                v-model="$v.loginForm.login.$model"        
                :isError="$v.loginForm.login.$error")
            VInput(
                v-bind="formData.password"
                v-model="$v.loginForm.password.$model"        
                :isError="$v.loginForm.password.$error")
            VButton( type="submit") Login
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  methods: {
    async handleSubmit() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.formEntepreneur,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },

  data() {
    return {
      loginForm: {
        login: "",
        password: "",
      },
      formData: {
        login: {
          name: "login",
          title: "Login",
          placeholder: "Your Login",
          type: "text",
          required: "Required field",
        },
        password: {
          name: "password",
          title: "Password",
          placeholder: "Your password",
          type: "password",
          required: "Required field",
        },
      },
    };
  },

  validations: {
    loginForm: {
      login: {
        required,
      },

      password: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page-container {
  position: absolute;
  top: calc(50% - 346px / 2);
  left: calc(50% - 512px / 2);

  /* width: 512px;
  height: 346px; */

  &__title {
    font-size: 2.625rem;
    font-weight: 300;
    line-height: 1.199;
    letter-spacing: 0;
    margin-bottom: 32px;
  }
}

.form {
  display: flex;
  justify-content: space-between;
  width: 670px;
}
</style>
