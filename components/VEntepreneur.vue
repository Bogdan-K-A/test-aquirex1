<template lang="pug">
.registration-page-container 
  p(v-if="step2" type="button" @click="handleBackBtn" ).back Back
  h1.registration-page-container__title Sign up
  VProgress(:steps="progress")
  VRadioGroup(v-if="step1")
  FormLegalEntityStep3(v-if="step2")
  VButton(@click="handleClick")
</template>

<script>
export default {
  data() {
    return {
      step1: true,
      step2: false,
      progress: {
        initialStep: 0,
        steps: ["Step 1", "Step 2 "],
      },
    };
  },

  methods: {
    handleClick() {
      if (document.getElementById("step1")) {
        this.step1 = false;
        this.step2 = true;

        this.progress.initialStep = 1;
      }
    },

    handleBackBtn() {
      if (document.getElementById("step3")) {
        this.step1 = true;
        this.step2 = false;

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
</style>
