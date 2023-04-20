<template>
  <cv-form id="step2" class="form" @submit.prevent="actionSubmit">
    <div>
      <cv-text-input
        label="Company name"
        placeholder="Company name"
      ></cv-text-input>
      <cv-text-input label="State" placeholder="State"></cv-text-input>
      <cv-text-input label="Adres1" placeholder="Adres1"> </cv-text-input>
    </div>
    <div>
      <cv-text-input
        label="State registration code"
        placeholder="001001"
      ></cv-text-input>
      <cv-text-input label="City" placeholder="Austin"></cv-text-input>
      <cv-text-input label="Adres2" placeholder="Adres2"> </cv-text-input>
    </div>
    <!-- <cv-button>Submit</cv-button> -->
  </cv-form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: space-between;
  width: 670px;
}
.cv-text-input {
  width: 318px;
}
</style>
