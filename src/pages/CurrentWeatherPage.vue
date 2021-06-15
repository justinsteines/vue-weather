<template>
  <h1 class="text-start mb-4">Current Conditions</h1>
  <current-weather :current="current"></current-weather>
</template>

<script>
import { mapGetters } from 'vuex';
import CurrentWeather from '../components/CurrentWeather.vue';

export default {
  components: { CurrentWeather },
  computed: {
    ...mapGetters(['current']),
  },
};
</script>
