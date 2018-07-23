import { routesMap } from '@/router';

const state = {
  routers: routesMap
};

const mutations = {
  LOAD_ROUTERS: (state) => {
    state.routers = routesMap;
  }
};

const actions = {
};

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
