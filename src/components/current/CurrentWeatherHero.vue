<template>
  <div class="current-weather-hero">
    <div class="bg-image" :style="bgImageStyle" />
    <div
      class="
        bg-text
        d-flex
        flex-column
        justify-content-evenly
        align-items-center
        flex-md-row flex-wrap
        justify-content-lg-start
      "
      v-if="current && current.weather && current.weather.length > 0"
    >
      <img :src="weatherIconSrc" :alt="weatherDescription" />
      <div class="d-flex flex-column justify-content-center">
        <div class="city-name">{{ city }}</div>
        <div class="weather-description">{{ weatherDescription }}</div>
        <div class="weather-temp">
          <base-units type="temp">{{ Math.round(current.temp) }}</base-units>
        </div>
      </div>
      <city-search class="ms-lg-auto align-self-lg-start p-lg-4"></city-search>
    </div>
    <div
      v-else-if="isLoading"
      class="d-flex justify-content-center align-items-center h-100"
    >
      <the-loading-spinner></the-loading-spinner>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center h-100">
      <p class="error-message fs-3 text-white">
        An error has occurred. Please try again later.
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseUnits from '../BaseUnits.vue';
import CitySearch from '../CitySearch.vue';

export default {
  components: { BaseUnits, CitySearch },
  computed: {
    ...mapGetters(['selectedCity', 'current', 'isLoading']),
    bgImageStyle() {
      return {
        backgroundImage:
          'url(https://res.cloudinary.com/jsigma/image/upload/w_2000/q_auto/f_auto/vue-weather-dashboard/weather.jpg)',
      };
    },
    weatherIconSrc() {
      return require(`@/assets/weather-icons/desc/${this.current.weather[0].icon}.svg`);
    },
    weatherDescription() {
      return this.current.weather[0].description;
    },
    city() {
      return `${this.selectedCity.name}, ${this.selectedCity.state}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.current-weather-hero {
  position: relative;
  width: 100vw;
  height: 400px;
  .bg-image,
  .bg-text,
  .bg-text::before {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .bg-text::before {
    content: '';
    // backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.5);
  }
  .bg-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bg-text {
    background-color: rgba(0, 0, 0, 0.15);
    color: white;
    & > * {
      z-index: 1;
    }
    .city-name,
    .weather-temp {
      font-size: 2rem;
    }
    .weather-description {
      font-size: 1.1rem;
      text-transform: capitalize;
    }
    img {
      height: 150px;
    }
  }
  .error-message {
    z-index: 10;
  }
}
@media (min-width: 768px) {
  .current-weather-hero {
    .bg-text {
      .city-name,
      .weather-temp {
        font-size: 2.5rem;
      }
      .weather-description {
        font-size: 1.3rem;
      }
      img {
        height: 275px;
        width: 50vw;
      }
      & > div:first-of-type {
        width: 50vw;
      }
    }
  }
}
@media (min-width: 992px) {
  .current-weather-hero {
    .bg-text {
      .city-name,
      .weather-temp {
        font-size: 3rem;
      }
      .weather-description {
        font-size: 1.6rem;
      }
      img {
        height: 325px;
        width: calc(100vw / 3);
      }
      & > div:first-of-type {
        width: calc(100vw / 3);
      }
    }
  }
}
</style>
