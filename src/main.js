import 'bootstrap/dist/js/bootstrap.min';

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

fontawesome.library.add(solid);

new Vue({
  render: h => h(App),
}).$mount('#app');
