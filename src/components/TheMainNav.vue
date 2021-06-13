<template>
  <div class="the-main-nav d-flex fs-4">
    <router-link :to="{ name: 'CurrentWeather' }" class="link p-2"
      >Current</router-link
    >
    <router-link :to="{ name: 'HourlyWeather' }" class="link p-2"
      >Hourly</router-link
    >
    <router-link :to="{ name: 'DailyWeather' }" class="link p-2"
      >Daily</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.the-main-nav {
  .link {
    width: calc(100vw / 3);
    background-color: var(--color-primary);
    text-decoration: none;
    color: white;
    &.router-link-active,
    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-primary);
    }
  }
}
</style>
