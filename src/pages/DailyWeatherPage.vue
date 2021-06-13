<template>
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
