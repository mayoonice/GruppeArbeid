import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import app from './App.vue';
import routes from '../routes.js';

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

createApp(app)
    .use(router)
    .mount('#app');