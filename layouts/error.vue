<template lang="pug">
section
    h1 Error 404
    nuxt-link( :to="'/'") Home

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: calc(50% - 346px / 2);
  left: calc(50% - 512px / 2);
}
h1 {
  color: red;
  margin-bottom: 30px;
}
</style>
