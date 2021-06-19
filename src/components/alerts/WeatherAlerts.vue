<template>
  <div v-if="alerts" class="row">
    <div class="col">
      <weather-alert
        v-for="alert in alerts"
        :key="alert.start + alert.end + alert.event"
        :alert="alert"
      ></weather-alert>
    </div>
  </div>
</template>

<script>
import WeatherAlert from './WeatherAlert.vue';

export default {
  components: { WeatherAlert },
  props: ['alerts'],
};
</script>
