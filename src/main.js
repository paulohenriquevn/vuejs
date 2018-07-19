// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUi from 'element-ui';
import App from './App';
import router from './router';
import store from './store';
import VueToastr from '@deveodk/vue-toastr';

import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/styles/element-variables.scss';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(ElementUi);
Vue.use(VueToastr);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
