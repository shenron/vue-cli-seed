import 'bootstrap/dist/js/bootstrap.min';

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

fontawesome.library.add(solid);
Vue.component('fontAwesomeIcon', FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app');
