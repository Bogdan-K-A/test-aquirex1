<template>
  <div class="radio-group">
    <p class="radio-group__text">Why are you?</p>
    <cv-radio-group class="radio-group__list-btn" id="step1">
      <!-- :vertical="vertical" -->
      <cv-radio-button
        @click="handkeChecked"
        name="group-1"
        label="Entepreneur"
        value="Entepreneur"
      />
      <!-- :hide-label="hideLabel"
        :label-left="labelLeft" -->

      <cv-radio-button
        @click="handkeChecked"
        :checked="checked1"
        name="group-1"
        label="Legal entity"
        value="Legal entity"
      />
      <!-- :hide-label="hideLabel"
        :label-left="labelLeft" -->
    </cv-radio-group>
  </div>
</template>

<script>
export default {
  name: "VRadioGroup",
  data() {
    return {
      checked1: true,
      // hideLabel: false,
      // labelLeft: false,
      // vertical: false,
    };
  },
  // checked1: this.$store.state.store.currentRadioBtn,
  methods: {
    // меняю состояние в глобальном стейте по условию
    handkeChecked(e) {
      this.$store.commit("store/checkedState", e.currentTarget.value);

      // console.log(this.$store.state.store.currentRadioBtn);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-group {
  &__list-btn {
    margin-bottom: 64px;
  }

  &__text {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.32px;

    margin-bottom: 8px;
  }
}
</style>
