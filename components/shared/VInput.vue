<template lang="pug">
.field(:class="fieldClass")
  p.field__title {{title}}
  
  input(
    v-bind='$attrs'
    ref='input'
    :placeholder='placeholder'
    :type='type'
    :name='name'
    @input="$emit('input',$event.target.value, $event)"
    @keyup="$emit('keyup',$event)"
    @blur="$emit('blur',$event.target)"
    @focus="$emit('focus',$event.target)"
    autocomplete='off'
  ).field__input
  .err-text-wrapper
    p.error-message(:class="'is-show'") {{isError ? required :'' }}

</template>

<script>
export default {
  // в computed динамических значений, которые автоматически обновляются при изменении исходных данных.
  computed: {
    fieldClass() {
      // возвращает и использует нужный клас в зависимости от условия
      // console.log(this);
      return {
        // "form-group--error": this.isError,
        "is-error": this.isError,
        "is-valid": this.isValid,
        "is-disable": this.disable,
      };
    },
  },

  props: {
    required: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: null,
    },
    notRequired: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: undefined,
    },
    isError: {
      type: Boolean,
      default: false,
      // default: true,
    },
    isValid: {
      type: Boolean,
      // default: true,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 17px;

  &__title {
    margin-bottom: 8px;

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    letter-spacing: 0.32px;

    color: #525252;
  }
  &__input {
    width: 318px;

    padding: 10px;

    outline: none;
    border: none;
    color: #6d6d6d;

    background: #ffffff;
    transition: all 0.3s;
  }
}
.err-text-wrapper {
  height: 17px;
}

.is-show {
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.32px;

  color: #fc5a5a;
}

.is-error {
  transition: all 0.3s;
  .field__input {
    border: 1px solid #fc5a5a;
  }
}
.is-valid {
  transition: all 0.3s;
  .field__input {
    border: 1px solid green;
  }
}
</style>
