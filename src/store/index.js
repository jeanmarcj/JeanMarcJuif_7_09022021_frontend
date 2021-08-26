import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applicationName: 'Welcome on your Expression app',
    userFistName: 'Jean-Marc',
    userLastName: 'Juif',
    userisAdmin: false,
  },
  getters: {
    fullName: state => {
      return `${state.userFistName} ${state.userLastName}`
    }
  },
  mutations: {
    saveUserFirstName(state, payload) {
      state.userFirstName = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
