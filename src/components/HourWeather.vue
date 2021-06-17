<template>
  <td class="for-hour">{{ forHour }}</td>
  <td class="weather-description">
    <img
      :src="require(`@/assets/weather-icons/desc/${weather[0].icon}.svg`)"
      :alt="weather[0].description"
    /><span class="d-none">{{ weather[0].description }}</span>
  </td>
  <td>
    <img src="@/assets/weather-icons/thermometer.svg" alt="temperature" />
    <span class="temp"
      ><base-units type="temp">{{ Math.round(temp) }}</base-units></span
    >
  </td>
  <td>
    <img
      src="@/assets/weather-icons/raindrops.svg"
      alt="probability of precipitation"
    />{{ popFormatted }}
  </td>
  <td class="d-none d-md-table-cell">
    <img
      :src="
        require(`@/assets/weather-icons/uvi/uv-index-${Math.round(uvi)}.svg`)
      "
      alt="uv index"
    />{{ uvi.toFixed(1) }}
  </td>
  <td class="d-none d-lg-table-cell">
    <img src="@/assets/weather-icons/humidity.svg" alt="humidity" />{{ humidity
    }}<small>%</small>
  </td>
  <td class="d-none d-xl-table-cell">
    <img
      src="@/assets/weather-icons/windsock.svg"
      alt="cloud cover"
    /><base-wind :windDeg="windDeg" :windSpeed="windSpeed"></base-wind>
  </td>
  <td class="d-none d-xl-table-cell">
    <img src="@/assets/weather-icons/wind.svg" alt="cloud cover" /><base-wind
      :windGust="windGust"
    ></base-wind>
  </td>
  <td class="d-none d-xxl-table-cell">
    <img src="@/assets/weather-icons/cloudy.svg" alt="cloud cover" />{{ clouds
    }}<small>%</small>
  </td>
</template>

<script>
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import BaseUnits from './BaseUnits.vue';
import BaseWind from './BaseWind.vue';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

export default {
  components: { BaseUnits, BaseWind },
  computed: {
    forHour() {
      return dayjs(this.dt * 1000).format('h a');
    },
    popFormatted() {
      return this.pop.toLocaleString('en-US', { style: 'percent' });
    },
  },
  props: [
    'dt',
    'temp',
    'humidity',
    'uvi',
    'clouds',
    'windSpeed',
    'windDeg',
    'windGust',
    'pop',
    'weather',
  ],
};
</script>

<style lang="scss" scoped>
td {
  &.for-hour {
    font-weight: bold;
    font-size: 1.2rem;
    // width: 60px;
  }
  &.weather-description {
    text-transform: capitalize;
  }
  &.rounded-start {
    border-top-left-radius: 0.5rem !important;
    border-bottom-left-radius: 0.5rem !important;
  }
  &.rounded-end {
    border-top-right-radius: 0.5rem !important;
    border-bottom-right-radius: 0.5rem !important;
  }
  img {
    width: 40px;
  }
}
</style>
