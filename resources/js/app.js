import { createApp } from 'vue';
import App from './App.vue';
import _ from 'lodash';
import vuetify from '@/js/plugins/vuetify';
import router from '@/js/router';
import pinia from '@/js/plugins/pinia';
import CanvasJSChart from '@canvasjs/vue-charts';

// Vuetify
import 'vuetify/styles';

const app = createApp(App);

app.config.globalProperties.$_ = _;
window._ = _;

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(CanvasJSChart);

app.mount('#app');
