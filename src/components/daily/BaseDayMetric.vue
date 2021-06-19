<template>
  <div class="d-flex">
    <img
      v-if="icon"
      :src="require(`@/assets/weather-icons/${icon}.svg`)"
      :alt="icon"
      class="icon"
    />
    <div class="text-start">
      <small class="title">{{ title }}</small>
      <div class="value">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon', 'value'],
};
</script>

<style lang="scss" scoped>
.icon {
  width: 50px;
}
.value {
  font-size: 1.2rem;
}
small {
  font-size: 0.8rem;
}
</style>
