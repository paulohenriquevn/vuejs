import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './modules';

Vue.use(VueRouter);

export const routesMap = routes;

const router = new VueRouter({
  routes
});

export default router;
