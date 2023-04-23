<template>
  <div class="radio-group">
    <p class="radio-group__text">Why are you?</p>
    <cv-radio-group class="radio-group__list-btn" id="step1">
      <cv-radio-button
        @click="handkeChecked"
        id="Entepreneur"
        label="Entepreneur"
        value="Entepreneur"
      />

      <cv-radio-button
        :checked="checked1"
        id="Legal entity"
        label="Legal entity"
        value="Legal entity"
      />
    </cv-radio-group>
  </div>
</template>

<script>
export default {
  name: "VRadioGroup",
  data() {
    return {
      checked1: true,
    };
  },

  methods: {
    // меняю состояние в глобальном стейте по условию
    handkeChecked(e) {
      this.$store.commit("store/checkedState", e.currentTarget.value);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
