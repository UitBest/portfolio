import { createApp } from 'vue';
import App from './App.vue';
import vuetify from '@/js/plugins/vuetify';
import router from '@/js/router';

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
