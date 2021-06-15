<template>
  <h1 class="text-start mb-4">7-Day Forecast</h1>
  <daily-weather :daily="daily"></daily-weather>
</template>

<script>
import DailyWeather from '../components/DailyWeather.vue';

export default {
  components: { DailyWeather },
  computed: {
    daily() {
      return this.$store.getters.daily;
    },
  },
};
</script>
