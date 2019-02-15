import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VuePnP from 'vue-pnpjs';
import { sp } from '@pnp/sp';

Vue.use(VuePnP, {
  sp,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
