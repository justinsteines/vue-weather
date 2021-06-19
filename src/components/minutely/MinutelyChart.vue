<template>
  <div class="d-flex flex-column my-4" v-if="showMinutelyChart">
    <p class="fs-5 my-2">Next-Hour Precipitation Volume</p>
    <div class="d-flex justify-content-center">
      <div
        class="
          minutely-chart
          d-flex
          align-items-end
          justify-content-center
          position-relative
        "
      >
        <minutely-bar
          v-for="minute in minutely"
          :key="minute.dt"
          :mmVolume="minute.precipitation"
        ></minutely-bar>
        <div class="position-absolute bottom-0 start-0">Now</div>
        <div class="position-absolute bottom-0 start-middle">30m</div>
        <div class="position-absolute bottom-0 end-0">60m</div>
      </div>
    </div>
  </div>
</template>

<script>
import MinutelyBar from './MinutelyBar.vue';
export default {
  components: { MinutelyBar },
  props: ['minutely'],
  computed: {
    showMinutelyChart() {
      const nonZeroDataPoints = this.minutely.filter(
        (m) => m.precipitation > 0
      );
      if (nonZeroDataPoints.length > 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.minutely-chart {
  padding: 0 1rem;
  padding-bottom: 1.5rem;
  height: 80px;
}
</style>
