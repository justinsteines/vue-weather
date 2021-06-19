<template>
  <div
    class="minutely-bar"
    :style="{
      height: barHeight + 'px',
    }"
  ></div>
</template>

<script>
export default {
  props: ['mmVolume'],
  computed: {
    barHeight() {
      const scale = 5;
      return this.mmVolume * scale <= 50 ? this.mmVolume * scale : 50;
    },
  },
};
</script>

<style lang="scss" scoped>
.minutely-bar {
  width: 3px;
  background: rgb(52, 89, 122);
  background: linear-gradient(
    0deg,
    rgba(52, 89, 122, 1) 0%,
    rgba(44, 76, 105, 1) 100%
  );
  margin: 0 1px;
  border-radius: 0.5rem;
}
@media (min-width: 768px) {
  .minutely-bar {
    width: 5px;
  }
}
</style>
