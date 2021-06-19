<template>
  <h1 class="text-start mb-4">48-Hour Forecast</h1>
  <hourly-weather :hourly="hourly"></hourly-weather>
</template>

<script>
import { mapGetters } from 'vuex';
import HourlyWeather from '../components/hourly/HourlyWeather.vue';

export default {
  components: { HourlyWeather },
  computed: {
    ...mapGetters(['hourly']),
  },
};
</script>
