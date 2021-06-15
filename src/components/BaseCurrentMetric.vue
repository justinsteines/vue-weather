<template>
  <div class="base-current-metric m-2 p-2">
    <div class="d-flex align-items-center">
      <img
        v-if="icon"
        :src="require(`@/assets/weather-icons/${icon}.svg`)"
        :alt="title"
        class="icon"
      />
      <div class="title text-start">{{ title }}</div>
    </div>
    <div class="value d-flex justify-content-center align-items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon', 'value'],
};
</script>

<style lang="scss" scoped>
.base-current-metric {
  background-color: var(--color-primary);
  color: white;
  border-radius: 0.5rem;
  min-height: 150px;
  .icon {
    height: 30px;
  }
  .title {
    font-size: 1rem;
  }
  .value {
    font-size: 1.8rem;
    line-height: 100px;
  }
}
@media (min-width: 576px) {
  .base-current-metric {
    .title {
      font-size: 1.1rem;
    }
    .value {
      font-size: 2rem;
    }
  }
}
@media (min-width: 1200px) {
  .base-current-metric {
    .title {
      font-size: 1.3rem;
    }
    .value {
      font-size: 2.2rem;
    }
  }
}
</style>
