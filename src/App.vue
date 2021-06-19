<template>
  <current-weather-hero></current-weather-hero>
  <the-main-nav class="mb-5"></the-main-nav>
  <the-loading-spinner
    v-if="!isDataRetrieved"
    class="mt-5"
  ></the-loading-spinner>
  <div class="container" v-else>
    <div v-if="alerts" class="row">
      <div class="col">
        <weather-alert
          v-for="alert in alerts"
          :key="alert.start + alert.end + alert.event"
          :alert="alert"
        ></weather-alert>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CurrentWeatherHero from './components/current/CurrentWeatherHero.vue';
import TheMainNav from './components/TheMainNav.vue';
import WeatherAlert from './components/WeatherAlert.vue';

export default {
  components: { CurrentWeatherHero, TheMainNav, WeatherAlert },
  mounted: function () {
    this.$store.dispatch('getWeatherData');
  },
  computed: {
    ...mapGetters([
      'current',
      'daily',
      'hourly',
      'minutely',
      'alerts',
      'isLoading',
    ]),
    isDataRetrieved() {
      if (
        !this.isLoading &&
        this.current &&
        Object.keys(this.current).length > 0 &&
        this.daily &&
        this.daily.length > 0 &&
        this.hourly &&
        this.hourly.length > 0 &&
        this.minutely &&
        this.minutely.length > 0
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
:root {
  --color-primary: #2c4c69;
  --color-secondary: #d0dee7;
  --color-dark: #202c38;
  // --color-primary: #2c4c69;
  // --color-secondary: #d0dee7;
  // --color-dark: #455e75;
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
