<template lang="pug">
.login-page-container
    h2.login-page-container__title Sign in
    form( @submit.prevent="handleSubmit" ).form
        div
            VInput(
                v-bind="formData.email"
                v-model="$v.loginForm.email.$model"        
                :isError="$v.loginForm.email.$error")
            VInput(
                v-bind="formData.password"
                v-model="$v.loginForm.password.$model"        
                :isError="$v.loginForm.password.$error")
            VButton( type="submit") Login
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "VLogin",

  methods: {
    handleSubmit() {
      console.log(this.loginForm);
      this.$auth.loginWith("local", {
        data: this.loginForm,
      });

      // try {
      //   await this.$auth.loginWith("local", {
      //     data: this.loginForm,
      //   });
      //   const token = this.$auth.getToken("local");
      //   console.log("Token:", token);
      //   // this.$router.push("/profile");
      // } catch (err) {
      //   console.log(err);
      // }
    },
  },

  data() {
    return {
      auth: false,
      loginForm: {
        email: "test@mail.com",
        password: "qwerty1",
      },
      formData: {
        email: {
          name: "email",
          title: "E-mail",
          placeholder: "Your email",
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
      email: {
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
