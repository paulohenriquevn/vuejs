import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './modules';

Vue.use(VueRouter);

const vueRouters = routes.map(a => ({...a}));
const router = new VueRouter({
  routes: vueRouters,
  strict: process.env.NODE_ENV !== 'production'
});

export const routesMap = routes;
export default router;
