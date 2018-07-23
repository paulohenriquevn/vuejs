import { routesMap } from '@/router';

const state = {
  routers: routesMap
};

const mutations = {};

const actions = {};

const getters = {
  menus: state => state.routers
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
