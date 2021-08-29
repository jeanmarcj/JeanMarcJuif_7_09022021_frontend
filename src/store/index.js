import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applicationName: 'Welcome on your Expression app',
  },
  getters: {
    fullName: state => {
      return `${state.userFistName} ${state.userLastName}`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});
