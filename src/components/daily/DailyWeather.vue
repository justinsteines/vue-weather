<template>
  <div class="d-flex flex-column flex-md-row flex-wrap justify-content-center">
    <day-weather
      v-for="day in daily"
      :key="day.dt"
      :dt="day.dt"
      :humidity="day.humidity"
      :pop="day.pop"
      :pressure="day.pressure"
      :sunrise="day.sunrise"
      :sunset="day.sunset"
      :temp="day.temp"
      :uvi="day.uvi"
      :weather="day.weather"
      :windDeg="day.wind_deg"
      :windGust="day.wind_gust"
      :windSpeed="day.wind_speed"
    ></day-weather>
  </div>
</template>

<script>
import DayWeather from './DayWeather';

export default {
  components: { DayWeather },
  props: ['daily'],
};
</script>
