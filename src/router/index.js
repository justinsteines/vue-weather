import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: { name: 'CurrentWeather' } },
  {
    path: '/current',
    name: 'CurrentWeather',
    component: () => import('../pages/CurrentWeatherPage.vue'),
  },
  {
    path: '/hourly',
    name: 'HourlyWeather',
    component: () => import('../pages/HourlyWeatherPage.vue'),
  },
  {
    path: '/daily',
    name: 'DailyWeather',
    component: () => import('../pages/DailyWeatherPage.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../pages/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
