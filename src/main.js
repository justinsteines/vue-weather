import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import router from './router';
import store from './store';
import TheLoadingSpinner from './components/UI/TheLoadingSpinner.vue';

const app = createApp(App);

app.use(store);

app.use(router);

app.component('TheLoadingSpinner', TheLoadingSpinner);

app.mount('#app');
