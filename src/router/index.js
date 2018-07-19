import Vue from 'vue';
import Router from 'vue-router';
import PageLogin from '@/pages/seguranca/login/PageLogin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: PageLogin
    }
  ]
});
