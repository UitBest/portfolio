import { createApp } from 'vue';
import App from './App.vue';
import _ from 'lodash';
import vuetify from '@/js/plugins/vuetify';
import router from '@/js/router';

// Vuetify
import 'vuetify/styles';

const app = createApp(App);

app.config.globalProperties.$_ = _;
window._ = _;

app.use(router);
app.use(vuetify);

app.mount('#app');
