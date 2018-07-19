import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './modules';

Vue.use(VueRouter);
console.log(routes);
const router = new VueRouter({
  routes
});

export default router;
