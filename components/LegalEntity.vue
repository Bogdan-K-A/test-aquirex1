<template lang="pug">
.registration-page-container
  notifications( classes="vue-notification")
  p(v-show="step === 2 || step === 3" type="button" @click="backStep" ).back Back
  
  h1.registration-page-container__title Sign up
  VProgress(:steps="progress")

  VRadioGroup(v-show="step === 1" )
  
  form(@submit.prevent="handleSubmit" ).form
    //- форма шаг 2  
    div(v-show="step === 2").form__input-box
      div
        VInput(
          v-bind="formData.companyName"
          v-model="$v.formLegal.companyName.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.companyName.$error"
          )
        VInput(
          v-bind="formData.state"
          v-model="$v.formLegal.state.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.state.$error"
          )
        VInput(
          v-bind="formData.adres1"
          v-model="$v.formLegal.adres1.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.adres1.$error"
          )
      div
        VInput(
          v-bind="formData.stateRegistrCode"
          v-model="$v.formLegal.stateRegistrCode.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.stateRegistrCode.$error"
          )
        VInput(
          v-bind="formData.city"
          v-model="$v.formLegal.city.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.city.$error"
          )
        VInput(
          v-bind="formData.adres2"
          v-model="$v.formLegal.adres2.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.adres2.$error"
          )
        //- форма шаг 3
    div(v-show="step === 3").form__input-box
      div
        VInput(
          v-bind="formData.firstName"
          v-model="$v.formLegal.firstName.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.firstName.$error"
          )
        VInput(
          v-bind="formData.email"
          v-model="$v.formLegal.email.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.email.$error"
          )
        VInput(
          v-bind="formData.password"
          v-model="$v.formLegal.password.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.password.$error"
          )
        VButton( type="submit") Registration
      div
        VInput(
          v-bind="formData.lastName"
          v-model="$v.formLegal.lastName.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.lastName.$error"
          )
        VInput(
          v-bind="formData.phone"
          v-model="$v.formLegal.phone.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.phone.$error"
          )
        VInput(
          v-bind="formData.confirmPassword"
          v-model="$v.formLegal.confirmPassword.$model"
          @input='onFieldInput'
          @blur='onFieldBlur'
          @focus="onFieldFocus"
          :isError="$v.formLegal.confirmPassword.$error"
          )
  VButton(v-show="step === 1 || step === 2" @click="nextStep" ) Next
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  methods: {
    // функция на отслеживания фокуса
    onFieldFocus(field) {
      console.log("Инпут в фокусе");
    },

    // валидация при потере фокуса
    onFieldBlur(field) {
      console.log("Потерял фокус");

      if (field.value.length === 0) {
        this.$notify({
          type: "error",
          title: "Ёпта ошибка!!!",
          text: "Вы должны заполнить все поля",
        });
      }
    },

    onFieldInput(field, target) {
      // console.log("target: ", target);
      // console.log("field: ", field);
    },

    // очистка формы
    resetV() {
      this.formLegal.companyName = "";
      this.formLegal.state = "";
      this.formLegal.adres1 = "";
      this.formLegal.stateRegistrCode = "";
      this.formLegal.city = "";
      this.formLegal.adres2 = "";
      this.formLegal.firstName = "";
      this.formLegal.email = "";
      this.formLegal.password = "";
      this.formLegal.lastName = "";
      this.formLegal.phone = "";
      this.formLegal.confirmPassword = "";
    },

    // отправка формы
    handleSubmit() {
      this.$v.formLegal.$touch();

      if (this.$v.formLegal.$invalid) {
        console.log("Дела хуйня, не все поля заполнил");

        this.$notify({
          type: "error",
          title: "Ёпта ошибка!!!",
          text: "Вы должны заполнить все поля",
        });
        return false;
      } else {
        this.$notify({
          type: "success",
          title: "Поздравляем!!!",
          text: "Регистрация прошла успешно",
        });
        console.log("Регистрация прошла успешно");
        // console.log(this.formLegal.firstName);
        // console.log(this.formLegal);
        // this.resetV();
      }
    },

    nextStep() {
      if (this.step < 3) {
        this.step++;
      }

      if (this.step === 2) {
        this.progress.initialStep = 1;
      }

      if (this.step === 3) {
        this.progress.initialStep = 2;
      }
    },

    backStep() {
      if (this.step > 1) {
        this.step--;
      }

      if (this.step === 1) {
        this.progress.initialStep = 0;
      }

      if (this.step === 2) {
        this.progress.initialStep = 1;
      }
    },
  },

  data() {
    return {
      step: 1,
      progress: {
        initialStep: 0,
        steps: ["Step 1", "Step 2 ", "Step 3"],
      },
      formLegal: {
        companyName: "",
        state: "",
        adres1: "",
        stateRegistrCode: "",
        city: "",
        adres2: "",
        firstName: "",
        email: "",
        password: "",
        lastName: "",
        phone: "",
        confirmPassword: "",
      },

      // заполнение заголовков,плейсхолдеров...
      formData: {
        companyName: {
          name: "companyName",
          title: "Сompany Name",
          placeholder: "Your Сompany Name",
          type: "text",
          required: "Required field",
        },
        state: {
          name: "state",
          title: "State",
          placeholder: "Your State",
          type: "text",
          required: "Required field",
        },
        adres1: {
          name: "adres1",
          title: "Adres 1",
          placeholder: "Your Adres 1",
          type: "text",
          required: "Required field",
        },
        stateRegistrCode: {
          name: "stateRegistrCode",
          title: "State Registr Code",
          placeholder: "Your State Registr Code",
          type: "text",
          required: "Required field",
        },
        city: {
          name: "city",
          title: "City",
          placeholder: "Your city",
          type: "text",
          required: "Required field",
        },
        adres2: {
          name: "adres2",
          title: "Adres 2",
          placeholder: "Your Adres 2",
          type: "text",
          required: "Required field",
        },
        firstName: {
          name: "firstName",
          title: "First Name",
          placeholder: "Your first name",
          type: "text",
          required: "Required field",
        },
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
        lastName: {
          name: "lastName",
          title: "Last Name",
          placeholder: "Your last name",
          type: "text",
          required: "Required field",
        },
        phone: {
          name: "phone",
          title: "Phone",
          placeholder: "Your phone",
          type: "text",
          required: "Required field",
        },
        confirmPassword: {
          name: "confirmPassword",
          title: "Confirm Password",
          placeholder: "Your confirm password",
          type: "password",
          required: "Required field",
        },
      },
    };
  },

  // библиотечный метод валидации
  validations: {
    formLegal: {
      companyName: {
        required,
      },
      state: {
        required,
      },
      adres1: {
        required,
      },
      stateRegistrCode: {
        required,
      },
      city: {
        required,
      },
      adres2: {
        required,
      },
      firstName: {
        required,
      },
      email: {
        required,
      },
      password: {
        required,
      },
      lastName: {
        required,
      },
      phone: {
        required,
      },
      confirmPassword: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-page-container {
  position: absolute;
  top: calc(50% - 346px / 2);
  left: calc(50% - 512px / 2);

  /* width: 512px;
  height: 346px; */

  &__title {
    margin-bottom: 32px;
  }
}

.back {
  cursor: pointer;
}

.radio-group {
  &__list-btn {
    margin-bottom: 32px;
  }

  &__text {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.32px;

    margin-bottom: 8px;
  }
}

.form {
  /* display: flex;
  justify-content: space-between;
  width: 670px; */

  &__input-box {
    display: flex;
    justify-content: space-between;
    width: 670px;
  }
}

.invalid-fitback {
  color: red;
}
</style>
