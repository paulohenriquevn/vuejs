const state = {
  sidebarOpened: true
};

const mutations = {
  SET_SIDEBAR: (state, value) => {
    state.sidebarOpened = value;
  }
};

const actions = {
};

const getters = {
  sidebar: state => state.sidebarOpened
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
