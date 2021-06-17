<template>
  <div>
    <div
      class="row row-cols-2 g-0 m-2 row-cols-lg-4 row-cols-xxl-6"
      v-if="current && Object.keys(current).length > 1"
    >
      <div class="col">
        <base-current-metric title="feels like" icon="thermometer"
          ><base-units type="temp">{{
            Math.round(current.feels_like)
          }}</base-units></base-current-metric
        >
      </div>
      <div class="col">
        <base-current-metric title="humidity" icon="humidity"
          >{{ current.humidity }}<small>%</small></base-current-metric
        >
      </div>
      <div class="col">
        <base-current-metric
          title="uv index"
          :icon="`uvi/uv-index-${Math.round(current.uvi)}`"
        >
          {{ current.uvi.toFixed(1) }}
        </base-current-metric>
      </div>
      <div class="col">
        <base-current-metric title="cloud cover" icon="cloudy">
          {{ current.clouds }}<small>%</small>
        </base-current-metric>
      </div>
      <div class="col">
        <base-current-metric title="pressure" icon="barometer">
          {{ current.pressure }}<small>&nbsp;hPa</small>
        </base-current-metric>
      </div>
      <div class="col">
        <base-current-metric title="wind" icon="windsock">
          <base-wind
            :windDeg="current.wind_deg"
            :windSpeed="current.wind_speed"
          ></base-wind>
        </base-current-metric>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCurrentMetric from './BaseCurrentMetric.vue';
import BaseUnits from './BaseUnits.vue';
import BaseWind from './BaseWind.vue';

export default {
  components: { BaseCurrentMetric, BaseUnits, BaseWind },
  props: ['current'],
};
</script>
