<template>
  <div class="row alert alert-warning text-start" role="alert">
    <div class="col">
      <div class="d-flex" :class="{ 'mb-2': showDetails }">
        <div class="fw-bold">{{ alert.event }}</div>
        <div
          class="toggle-details ms-2"
          v-if="!showDetails"
          @click="showDetails = !showDetails"
        >
          <small>Show Details</small>
        </div>
        <div
          class="toggle-details ms-2"
          v-if="showDetails"
          @click="showDetails = !showDetails"
        >
          <small>Hide Details</small>
        </div>
      </div>
      <template v-if="showDetails">
        <div class="mb-2">
          <div><span class="fw-bold">Start:</span>&nbsp;{{ start }}</div>
          <div><span class="fw-bold">End:</span>&nbsp;{{ end }}</div>
        </div>
        <div>{{ alert.description }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: ['alert'],
  data() {
    return {
      showDetails: false,
    };
  },
  computed: {
    start() {
      return dayjs(this.alert.start * 1000).format('ddd, MMM D, YYYY h:mm a');
    },
    end() {
      return dayjs(this.alert.end * 1000).format('ddd, MMM D, YYYY h:mm a');
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-details {
  cursor: pointer;
  text-decoration: underline;
}
.alert {
  border-radius: 0.5rem;
}
</style>
