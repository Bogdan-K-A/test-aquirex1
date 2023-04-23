<template lang="pug">
.registration-page-container 
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
       
  
  
  cv-form( v-show="step === 2" @submit.prevent="onSubmit" novalidate).form
    div
      cv-text-input(
        :class="{'is-error': $v.formEntepreneur.firstName.$error}"
        @blur="$v.formEntepreneur.firstName.$touch()"
        v-model='formEntepreneur.firstName'
        id="firstName"
        label="First name"
        placeholder="First name")
      cv-text-input( label="E-mail" placeholder="E-mail" v-model='formEntepreneur.email' :class="{'is-error': $v.formEntepreneur.email.$error}"
        @blur="$v.formEntepreneur.email.$touch()")
      cv-text-input( :class="{'is-error': $v.formEntepreneur.password.$error}"
        @blur="$v.formEntepreneur.password.$touch()" label="Password" placeholder="Password" type="password" v-model='formEntepreneur.password')
      VButton( type="submit") Submit
   
    div
      cv-text-input( :class="{'is-error': $v.formEntepreneur.lastName.$error}"
        @blur="$v.formEntepreneur.lastName.$touch()" label="Last name" placeholder="Last name" v-model='formEntepreneur.lastName')
      cv-text-input( 
        :class="{'is-error': $v.formEntepreneur.phone.$error}"
        @blur="$v.formEntepreneur.phone.$touch()"
        v-model='formEntepreneur.phone'
        label="Phone nuber"
        placeholder="Phone nuber")
      cv-text-input(
        :class="{'is-error': $v.formEntepreneur.confirmPassword.$error}"
        @blur="$v.formEntepreneur.confirmPassword.$touch()"
        v-model='formEntepreneur.confirmPassword'
        label="Confirm password"
        placeholder="Confirm password"
        type="password")
      
  

  
  VButton(v-show="step === 1" @click="nextStep") Next
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      checked2: true,
      step: 1,
      progress: {
        initialStep: 0,
        steps: ["Step 1", "Step 2 "],
      },
      formEntepreneur: {
        firstName: "",
        email: "",
        password: "",
        lastName: "",
        phone: "",
        confirmPassword: "",
      },
    };
  },

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

  methods: {
    onSubmit() {
      console.log("Регистрация прошла успешно");
      console.log(this.formEntepreneur.firstName);
    },

    handkeChecked(e) {
      this.$store.commit("store/checkedState", e.currentTarget.value);
    },

    nextStep() {
      if (this.step < 2) {
        this.step++;
      }

      if (this.step === 2) {
        this.progress.initialStep = 1;
      }
    },

    backStep() {
      if (this.step > 1) {
        this.step--;
      }

      if (this.step === 1) {
        this.progress.initialStep = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-page-container {
  position: absolute;
  top: calc(50% - 346px / 2);
  left: calc(50% - 512px / 2);

  width: 512px;
  height: 346px;

  &__title {
    margin-bottom: 32px;
  }
}

.back {
  cursor: pointer;
}

.radio-group {
  /* &__list-btn {
    margin-bottom: 64px;
  } */

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
.cv-text-input {
  width: 318px;
}

.is-error {
  border: 1px solid red;
}
</style>
