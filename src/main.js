// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUi from 'element-ui';
import VueToastr from '@deveodk/vue-toastr';
import VeeValidate, { Validator } from 'vee-validate';
import ValidacaoUtil from '@/utils/validacaoUtil';
import ptBr from 'vee-validate/dist/locale/pt_BR';
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';
import 'font-awesome/css/font-awesome.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/index.scss';
import App from './App';
import router from './router';
import store from './store';

Vue.use(ElementUi, {
  size: 'mini'
});

Vue.use(VueToastr);

Validator.localize('pt_BR', ptBr);
ValidacaoUtil(Validator);

Vue.use(VeeValidate, {
  fieldsBagName: 'fields-vee',
  inject: false
});

/* eslint-disable no-new */
Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
