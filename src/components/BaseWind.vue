<template>
  <small v-if="wDirection">{{ wDirection }}</small>
  <base-units v-if="wSpeed" type="speed">&nbsp;{{ wSpeed }}&nbsp;</base-units>
  <base-units v-if="!wSpeed && !wGust" type="speed">&nbsp;0&nbsp;</base-units>
  <span v-if="wGust">
    <base-units type="speed">{{ wGust }}&nbsp;</base-units>
  </span>
</template>

<script>
import BaseUnits from './BaseUnits.vue';

export default {
  components: { BaseUnits },
  props: ['windDeg', 'windSpeed', 'windGust'],
  computed: {
    wSpeed() {
      return Math.round(this.windSpeed);
    },
    wGust() {
      return Math.round(this.windGust);
    },
    wDirection() {
      // https://www.campbellsci.com/blog/convert-wind-directions
      // Assume 360 degrees total with 16 different compass sectors (directions).
      // 360 / 16 = 22.5 (this means there's 22.5 degrees per sector)

      // Define the 16 compass sectors in order.
      // N is listed twice because N is at 0 and 360 degrees.
      const compassSectors = [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW',
        'N',
      ];

      // Divide the degree by 22.5 to determine which compass sector the degree
      // is in.
      const sector = Math.trunc(this.windDeg / 22.5);

      // Return the string direction representation for the sector.
      return compassSectors[sector];
    },
  },
};
</script>
