<template lang="pug">
.registration-page-container 
  p(v-show="step === 2 || step === 3" type="button" @click="backStep" ).back Back
  
  h1.registration-page-container__title Sign up
  VProgress(:steps="progress")

  VRadioGroup(v-show="step === 1" )
  
  cv-form(@submit.prevent="onSubmit" novalidate).form__box
    //- форма шаг 2
    div(v-show="step === 2").form__box
      div
        cv-text-input(
        label="Company name"
        placeholder="Company name"
        name="CompanyName"
        type="text")
        cv-text-input( type="text"
        label="State"
        placeholder="State")
        cv-text-input( type="text"
        label="Adres1"
        placeholder="Adres1")
   
      div
        cv-text-input(  type="text"
        label="State registration code"
        placeholder="001001")
        cv-text-input(
         type="text"
        label="City"
        placeholder="Austin")
        cv-text-input(
      type="text"
        label="Adres2"
        placeholder="Adres2")

        //- форма шаг 3
    div(v-show="step === 3").form__box
      div
        cv-text-input(
        label="First name"
        placeholder="First name")
        cv-text-input( label="E-mail" placeholder="E-mail")
        cv-text-input( label="Password" placeholder="Password" type="password")
        VButton( type="submit") Submit
   
      div
        cv-text-input( label="Last name" placeholder="Last name")
        cv-text-input(
        label="Phone nuber"
        placeholder="Phone nuber")
        cv-text-input(
        label="Confirm password"
        placeholder="Confirm password"
        type="password")
      




  VButton(v-show="step === 1 || step === 2" @click="nextStep" ) Next
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      progress: {
        initialStep: 0,
        steps: ["Step 1", "Step 2 ", "Step 3"],
      },
      //     formLegal: {
      //   companyName: "",
      //   state: "",
      //   adres1: "",
      //   stateRegistrCode: "",
      //   city: "",
      //   adres2: "",
      // },
    };
  },

  methods: {
    onSubmit() {
      console.log("Регистрация прошла успешно");
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

.form__box {
  display: flex;
  justify-content: space-between;
  width: 670px;
}
.cv-text-input {
  width: 318px;
}
</style>
