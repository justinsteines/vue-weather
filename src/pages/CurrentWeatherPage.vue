<template>
  <h1 class="text-start my-4">Current Conditions</h1>
  <minutely-chart :minutely="minutely"></minutely-chart>
  <current-weather :current="current"></current-weather>
</template>

<script>
import { mapGetters } from 'vuex';
import CurrentWeather from '../components/current/CurrentWeather.vue';
import MinutelyChart from '../components/minutely/MinutelyChart.vue';

export default {
  components: { CurrentWeather, MinutelyChart },
  computed: {
    ...mapGetters(['current', 'minutely']),
  },
};
</script>
