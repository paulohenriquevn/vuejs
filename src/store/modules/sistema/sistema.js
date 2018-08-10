import { routesMap } from '../../../router';
import {
  SET_SIDEBAR,
} from '../../mutation-types';

const state = {
  sidebarOpened: true,
  routes: JSON.parse(JSON.stringify(routesMap)),
};

const mutations = {
  [SET_SIDEBAR]: (state, payload) => {
    state.sidebarOpened = payload;
  },
};

const actions = {
  initial({ commit }) {
    commit('INIT_LAYOUT');
  },
};

const getters = {
  sidebar: state => state.sidebarOpened,
  menus: state => state.routes,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
