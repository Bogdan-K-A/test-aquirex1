<template>
  <div>
    <cv-progress
      class="progress"
      :initial-step="steps.initialStep"
      :steps="steps.steps"
    ></cv-progress>
  </div>
</template>

<script>
export default {
  name: "VProgress",
  props: {
    steps: {
      initialStep: {
        type: Number,
        default: 0,
      },
      steps: {
        type: Array,
        default: [],
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  margin-bottom: 64px;
}
</style>
