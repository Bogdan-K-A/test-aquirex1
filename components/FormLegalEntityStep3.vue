<template>
  <cv-form id="step3" class="form" @submit.prevent="actionSubmit">
    <div>
      <cv-text-input
        label="First name"
        placeholder="First name"
      ></cv-text-input>
      <cv-text-input label="E-mail" placeholder="E-mail"></cv-text-input>
      <cv-text-input label="Password" placeholder="Password" type="password">
      </cv-text-input>
    </div>
    <div>
      <cv-text-input label="Last name" placeholder="Last name"></cv-text-input>
      <cv-text-input
        label="Phone nuber"
        placeholder="Phone nuber"
      ></cv-text-input>
      <cv-text-input
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
      >
      </cv-text-input>
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
