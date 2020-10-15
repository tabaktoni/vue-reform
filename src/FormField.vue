<template>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'vue-reform-field',
  inject: ['values', 'setValue'],
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    label: { type: String, default: null },
    placeholder: { type: String, default: null }
  },
  computed: {
    value: vm => vm.values[vm.name]
  },
  methods: {
    async input(value) {
      await this.$refs.validationProvider.validate(value);
      this.setValue(this.name, value);
    }
  },
  components: { ValidationProvider }
};
</script>

<style lang="css">
.reform-label {
  padding: 0 0.25rem;
}

.reform-control {
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
}

.reform-invalid.reform-touched .reform-control {
  box-shadow: 0 0 2px 1px #e74c3c;
}

.reform-control .reform-input {
  width: 100%;
  padding: 0.125rem 0.25rem;
  border: none;
  background-color: inherit;

}

.reform-error {
  font-size: 0.75rem;
  line-height: 1.4;
  color: #e74c3c;
}

.reform-error::after {
  content: " ";
  font-size: 0;
  white-space: pre;
}
</style>
