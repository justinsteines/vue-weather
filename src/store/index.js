import { createStore } from 'vuex';

export default createStore({
  state() {
    let city = {
      _id: '60027396dbaf3c9d4e69c047',
      id: 5341145,
      name: 'Cupertino',
      state: 'CA',
      country: 'US',
      coord: { lon: -122.032181, lat: 37.323002 },
    };
    if (window.localStorage.getItem('city')) {
      city = JSON.parse(window.localStorage.getItem('city'));
    }
    return {
      current: {},
      daily: [],
      hourly: [],
      minutely: [],
      alerts: [],
      units: 'imperial',
      selectedCity: city,
      isLoading: false,
      isError: false,
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
    alerts(state) {
      return state.alerts;
    },
    selectedCity(state) {
      return state.selectedCity;
    },
    isLoading(state) {
      return state.isLoading;
    },
    isError(state) {
      return state.isError;
    },
  },
  mutations: {
    weatherData(state, payload) {
      state.current = payload.current;
      state.daily = payload.daily;
      state.hourly = payload.hourly;
      state.minutely = payload.minutely;
      state.alerts = payload.alerts;
    },
    selectedCity(state, payload) {
      state.selectedCity = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setIsError(state, payload) {
      state.isError = payload;
    },
  },
  actions: {
    async getWeatherData(context) {
      // Selected city coordinates are required in order to fetch weather data.
      if (!this.getters.selectedCity.coord) {
        return;
      }
      const searchParams = new URLSearchParams({
        units: this.getters.units,
        lon: this.getters.selectedCity.coord.lon,
        lat: this.getters.selectedCity.coord.lat,
      });
      context.commit('setIsLoading', true);
      context.commit('setIsError', false);
      let weatherData = {};
      try {
        const res = await fetch(
          `${
            process.env.VUE_APP_WEATHER_API_DATA_URL
          }/data?${searchParams.toString()}`
        );
        weatherData = await res.json();
      } catch {
        context.commit('setIsError', true);
      }
      context.commit('setIsLoading', false);
      context.commit('weatherData', weatherData);
    },
    setSelectedCity(context, city) {
      window.localStorage.setItem('city', JSON.stringify(city));
      context.commit('selectedCity', city);
      this.dispatch('getWeatherData');
    },
  },
});
