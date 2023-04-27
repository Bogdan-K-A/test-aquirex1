<template lang="pug">
.registration-page-container
  
  notifications( classes="vue-notification")
  p(v-show="step === 2" type="button" @click="backStep" ).back Back
  h1.registration-page-container__title Sign up
  VProgress(:steps="progress")
  
  .radio-group(v-show="step === 1")
    p.radio-group__text Why are you?
    cv-radio-group.radio-group__list-btn( id="step1")
        
      cv-radio-button(
      :checked="checked2"
        id="Entepreneur"
        label="Entepreneur"
        value="Entepreneur")
     
      cv-radio-button(
        @click="handkeChecked"
        id="Legal entity"
        label="Legal entity"
        value="Legal entity")
       
  
  
  form( v-show="step === 2" @submit.prevent="handleSubmit" ).form
    div
      VInput(
        v-bind="formData.firstName"
        v-model="$v.formEntepreneur.firstName.$model"
        @input='onFieldInput'
        @blur='onFieldBlur'
        @focus="onFieldFocus"
        :isError="$v.formEntepreneur.firstName.$error"
        )
      
      VInput(
        v-bind="formData.email"
        v-model="$v.formEntepreneur.email.$model"
        @input='onFieldInput'
        @blur='onFieldBlur'
        @focus="onFieldFocus"
        :isError="$v.formEntepreneur.email.$error"
        )
      VInput(
        v-bind="formData.password"
        v-model="$v.formEntepreneur.password.$model"
        @input='onFieldInput'
        @blur='onFieldBlur'
        @focus="onFieldFocus"
        :isError="$v.formEntepreneur.password.$error"
        )
      VButton( type="submit") Registration
    
    div
      VInput(
        v-bind="formData.lastName"
        v-model="$v.formEntepreneur.lastName.$model"
        @input='onFieldInput'
        @blur='onFieldBlur'
        @focus="onFieldFocus"
        :isError="$v.formEntepreneur.lastName.$error"
        )
      VInput(
        v-bind="formData.phone"
        v-model="$v.formEntepreneur.phone.$model"
        @input='onFieldInput'
        @blur='onFieldBlur'
        @focus="onFieldFocus"
        :isError="$v.formEntepreneur.phone.$error"
        )
      VInput(
        v-bind="formData.confirmPassword"
        v-model="$v.formEntepreneur.confirmPassword.$model"
        @input='onFieldInput'
        @blur='onFieldBlur'
        @focus="onFieldFocus"
        :isError="$v.formEntepreneur.confirmPassword.$error"
        )
  
      
  

  
  VButton(v-show="step === 1" @click="nextStep") Next
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
      this.formEntepreneur.firstName = "";
      this.formEntepreneur.email = "";
      this.formEntepreneur.password = "";
      this.formEntepreneur.lastName = "";
      this.formEntepreneur.phone = "";
      this.formEntepreneur.confirmPassword = "";
    },

    // отправка формы
    async handleSubmit() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.formEntepreneur,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
      this.$v.formEntepreneur.$touch();

      if (this.$v.formEntepreneur.$invalid) {
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
        // console.log(this.formEntepreneur.firstName);
        // console.log(this.formEntepreneur);
      }
    },

    // выбор формы radioButton
    handkeChecked(e) {
      this.$store.commit("store/checkedState", e.currentTarget.value);
    },
    // шаг вперёд
    nextStep() {
      if (this.step < 2) {
        this.step++;
      }

      if (this.step === 2) {
        this.progress.initialStep = 1;
      }
    },
    // шаг назад
    backStep() {
      if (this.step > 1) {
        this.step--;
      }

      if (this.step === 1) {
        this.progress.initialStep = 0;
      }
    },
  },

  data() {
    return {
      isInvalid: false,
      checked2: true,
      step: 1,
      progress: {
        initialStep: 0,
        steps: ["Step 1", "Step 2 "],
      },
      // состояние форми
      formEntepreneur: {
        firstName: "",
        email: "",
        password: "",
        lastName: "",
        phone: "",
        confirmPassword: "",
      },

      // заполнение заголовков,плейсхолдеров...
      formData: {
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
    formEntepreneur: {
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
  display: flex;
  justify-content: space-between;
  width: 670px;
}
/* .cv-text-input {
  width: 318px;
} */

.invalid-fitback {
  color: red;
}
</style>
