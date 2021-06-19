<template>
  <div class="city-search">
    <input
      type="text"
      v-model="enteredCity"
      @input="onSearch"
      class="px-3 form-control"
      @keydown.down.prevent="onNextFromInput"
      placeholder="Search City"
      @focus="(e) => e.target.select()"
    />
    <div
      v-if="suggestions.length > 0"
      class="
        suggestions
        position-absolute
        text-start
        bg-light
        text-dark
        rounded-bottom
      "
    >
      <div
        v-for="city in suggestions"
        :key="city.id"
        role="button"
        tabindex="0"
        @click="onSelectCity(city)"
        class="px-3 py-1"
        @keydown.down.prevent="onNext"
        @keydown.up.prevent="onPrevious"
        @keydown.enter="onSelectCity(city)"
      >
        {{ city.name }}, {{ city.state }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredCity: '',
      debounceTimeout: null,
      suggestions: [],
    };
  },
  methods: {
    onSearch() {
      clearTimeout(this.debounceTimeout);
      if (this.enteredCity.trim() === '') {
        this.suggestions = [];
        return;
      }
      this.debounceTimeout = setTimeout(() => {
        fetch(
          `${process.env.VUE_APP_WEATHER_API_DATA_URL}/suggest?q=${this.enteredCity}`
        )
          .then((res) => res.json())
          .then((suggestedCities) => {
            this.suggestions = suggestedCities;
          });
      }, 300);
    },
    onSelectCity(city) {
      this.enteredCity = `${city.name}, ${city.state}`;
      this.suggestions = [];
      this.$store.dispatch('setSelectedCity', city);
    },
    onNext(e) {
      if (e.target.nextSibling.focus) {
        e.target.nextSibling.focus();
      }
    },
    onPrevious(e) {
      if (e.target.previousSibling.focus) {
        e.target.previousSibling.focus();
      } else if (e.target.parentElement.previousSibling.focus) {
        e.target.parentElement.previousSibling.focus();
      }
    },
    onNextFromInput(e) {
      if (
        e.target.nextSibling.children &&
        e.target.nextSibling.children.length > 0 &&
        e.target.nextSibling.children[0]
      ) {
        e.target.nextSibling.children[0].focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.city-search,
.suggestions {
  z-index: 1;
}
.suggestions {
  & > div:focus {
    background-color: var(--color-primary);
    outline: none;
    color: white;
  }
}
</style>
