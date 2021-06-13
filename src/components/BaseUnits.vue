<template><slot></slot><small v-html="displayValue"></small></template>

<script>
export default {
  props: ['type'],
  computed: {
    units() {
      return this.$store.getters.units;
    },
    displayValue() {
      switch (this.units) {
        case 'imperial':
          switch (this.type) {
            case 'temp':
              return '&deg;F';
            case 'speed':
              return 'MPH';
            default:
              return '';
          }
        case 'metric':
          switch (this.type) {
            case 'temp':
              return '&deg;C';
            case 'speed':
              return 'M/S';
            default:
              return '';
          }
        default:
          return '';
      }
    },
  },
};
</script>
