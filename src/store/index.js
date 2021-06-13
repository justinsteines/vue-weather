import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      current: {},
      daily: [],
      hourly: [],
      minutely: [],
      units: 'imperial',
      selectedCity: {
        _id: '60027396dbaf3c9d4e69c047',
        id: 5341145,
        name: 'Cupertino',
        state: 'CA',
        country: 'US',
        coord: { lon: -122.032181, lat: 37.323002 },
      },
    };
  },
  getters: {
    units(state) {
      return state.units;
    },
    current(state) {
      return state.current;
    },
    daily(state) {
      return state.daily;
    },
    hourly(state) {
      return state.hourly;
    },
    minutely(state) {
      return state.minutely;
    },
    selectedCity(state) {
      return state.selectedCity;
    },
  },
  mutations: {
    weatherData(state, payload) {
      state.current = payload.current;
      state.daily = payload.daily;
      state.hourly = payload.hourly;
      state.minutely = payload.minutely;
    },
    selectedCity(state, payload) {
      state.selectedCity = payload;
    },
  },
  actions: {
    async getWeatherData(context) {
      if (!this.getters.selectedCity.coord) {
        return;
      }
      const searchParams = new URLSearchParams({
        units: this.getters.units,
        lon: this.getters.selectedCity.coord.lon,
        lat: this.getters.selectedCity.coord.lat,
      });
      const res = await fetch(
        `${
          process.env.VUE_APP_WEATHER_API_DATA_URL
        }/data?${searchParams.toString()}`
      );
      const weatherData = await res.json();
      context.commit('weatherData', weatherData);
    },
    setSelectedCity(context, city) {
      context.commit('selectedCity', city);
      this.dispatch('getWeatherData');
    },
  },
});
