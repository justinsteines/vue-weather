<template>
  <div class="day m-3 text-white">
    <div class="fs-1 pt-4">{{ dayOfWeek }}</div>
    <div class="d-flex justify-content-center">
      <img
        :src="require(`@/assets/weather-icons/desc/${weather[0].icon}.svg`)"
        :alt="weather[0].description"
      />
      <div class="d-flex flex-column justify-content-center mx-3">
        <div class="fs-4 my-2 align-self-center text-capitalize">
          {{ weather[0].description }}
        </div>
        <div class="d-flex justify-content-center">
          <base-metric title="high">
            <base-units type="temp">{{ Math.round(temp.max) }}</base-units>
          </base-metric>
          <base-metric title="low" class="ms-3">
            <base-units type="temp">{{ Math.round(temp.min) }}</base-units>
          </base-metric>
        </div>
      </div>
    </div>
    <div class="row row-cols-2 metrics g-0 pb-2 px-2">
      <base-metric title="chance precip." icon="raindrops">
        {{ popFormatted }}
      </base-metric>
      <base-metric title="humidity" icon="humidity">
        {{ humidity }}%
      </base-metric>
      <base-metric title="sunrise" icon="sunrise">{{
        sunriseTime
      }}</base-metric>
      <base-metric title="sunset" icon="sunset">{{ sunsetTime }}</base-metric>
      <base-metric title="wind" icon="windsock">
        <base-wind :windDeg="windDeg" :windSpeed="windSpeed"></base-wind>
      </base-metric>
      <base-metric title="wind gust" icon="wind">
        <base-wind :windGust="windGust"></base-wind>
      </base-metric>
      <base-metric title="uv index" :icon="`uvi/uv-index-${Math.floor(uvi)}`">
        {{ uvi.toFixed(1) }}
      </base-metric>
      <base-metric title="pressure" icon="barometer">
        {{ pressure }} hPa
      </base-metric>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

import BaseUnits from './BaseUnits.vue';
import BaseWind from './BaseWind.vue';
import BaseMetric from './BaseMetric.vue';

export default {
  components: { BaseUnits, BaseWind, BaseMetric },
  props: [
    'dt',
    'humidity',
    'pop',
    'pressure',
    'sunrise',
    'sunset',
    'temp',
    'uvi',
    'weather',
    'windDeg',
    'windGust',
    'windSpeed',
  ],
  computed: {
    dayOfWeek() {
      const currentDateOfMonth = new Date(Date.now()).getDate();
      const weatherForDateOfMonth = new Date(this.dt * 1000).getDate();
      if (currentDateOfMonth === weatherForDateOfMonth) {
        return 'Today';
      }
      return new Date(this.dt * 1000).toLocaleString('en-US', {
        weekday: 'long',
      });
    },
    sunriseTime() {
      return dayjs(this.sunrise * 1000).format('h:mm a');
    },
    sunsetTime() {
      return dayjs(this.sunset * 1000).format('h:mm a');
    },
    popFormatted() {
      return this.pop.toLocaleString('en-US', { style: 'percent' });
    },
  },
};
</script>

<style lang="scss" scoped>
.day {
  box-shadow: 0 0 10px 0px rgb(173 173 173 / 50%);
  border-radius: 0.5rem;
  max-width: 400px;
  background-color: var(--color-primary);
  img {
    width: 150px;
  }
  .metrics {
    background-color: var(--color-dark);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    & > * {
      padding: 0.5rem;
    }
  }
}
</style>
