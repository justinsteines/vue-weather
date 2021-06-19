<template>
  <div class="hourly-weather">
    <table class="table">
      <tbody>
        <h2 class="text-start mt-2">Today</h2>
        <tr v-for="hour in today" :key="hour.dt">
          <hour-weather
            :dt="hour.dt"
            :temp="hour.temp"
            :humidity="hour.humidity"
            :uvi="hour.uvi"
            :clouds="hour.clouds"
            :windSpeed="hour.wind_speed"
            :windDeg="hour.wind_deg"
            :windGust="hour.wind_gust"
            :pop="hour.pop"
            :weather="hour.weather"
          ></hour-weather>
        </tr>
        <h2 class="text-start mt-2">Tomorrow</h2>
        <tr v-for="hour in tomorrow" :key="hour.dt">
          <hour-weather
            :dt="hour.dt"
            :temp="hour.temp"
            :humidity="hour.humidity"
            :uvi="hour.uvi"
            :clouds="hour.clouds"
            :windSpeed="hour.wind_speed"
            :windDeg="hour.wind_deg"
            :windGust="hour.wind_gust"
            :pop="hour.pop"
            :weather="hour.weather"
          ></hour-weather>
        </tr>
        <h2 class="text-start mt-2">{{ dayAfterTomorrowName }}</h2>
        <tr v-for="hour in dayAfterTomorrow" :key="hour.dt">
          <hour-weather
            :dt="hour.dt"
            :temp="hour.temp"
            :humidity="hour.humidity"
            :uvi="hour.uvi"
            :clouds="hour.clouds"
            :windSpeed="hour.wind_speed"
            :windDeg="hour.wind_deg"
            :windGust="hour.wind_gust"
            :pop="hour.pop"
            :weather="hour.weather"
          ></hour-weather>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import HourWeather from './HourWeather.vue';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

export default {
  components: { HourWeather },
  props: ['hourly'],
  computed: {
    today() {
      return this.hourly.filter((h) => dayjs(h.dt * 1000).isToday());
    },
    tomorrow() {
      return this.hourly.filter((h) => dayjs(h.dt * 1000).isTomorrow());
    },
    dayAfterTomorrow() {
      return this.hourly.filter(
        (h) => !dayjs(h.dt * 1000).isToday() && !dayjs(h.dt * 1000).isTomorrow()
      );
    },
    dayAfterTomorrowName() {
      if (!this.dayAfterTomorrow || this.dayAfterTomorrow.length <= 0) {
        return '';
      }
      return dayjs(this.dayAfterTomorrow[0].dt * 1000).format('dddd');
    },
  },
};
</script>

<style lang="scss" scoped>
.hourly-weather {
  table {
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    tr {
      background-color: var(--color-primary);
      color: var(--color-secondary);
      border-radius: 0.5rem;
      &:nth-child(even) {
        background-color: #416383;
      }
    }
  }
}
</style>
