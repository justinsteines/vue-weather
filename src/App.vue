<template>
  <current-weather-hero></current-weather-hero>
  <the-main-nav class="mb-5"></the-main-nav>
  <router-view></router-view>
</template>

<script>
import CurrentWeatherHero from './components/CurrentWeatherHero.vue';
import TheMainNav from './components/TheMainNav.vue';

export default {
  components: { CurrentWeatherHero, TheMainNav },
  mounted: function () {
    this.$store.dispatch('getWeatherData');
  },
};
</script>

<style lang="scss">
:root {
  --color-primary: #2c4c69;
  --color-secondary: #ceebff;
}
body {
  background-color: var(--color-secondary);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
