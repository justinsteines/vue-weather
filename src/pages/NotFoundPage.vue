<template>
  <p class="fs-3">
    Oops! You tried to visit a page that doesn't exit. Go
    <router-link :to="{ name: 'CurrentWeather' }">home</router-link>.
  </p>
</template>
