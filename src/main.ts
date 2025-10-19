import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/styles/global.css';
import '@/plugin/registerSvgIcon.ts';
import { registerPrimeVue } from '@/plugin/registerPrimeVue';
import router from '@/router/index.ts';
import i18n from '@/plugin/registerVueI18n';
import App from './App.vue';

const app = createApp(App);
registerPrimeVue(app);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
