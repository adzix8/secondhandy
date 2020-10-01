import Vue from 'vue';
import Vuex from 'vuex';
import authAxios from './auth-axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
  },
  mutations: {
    auth(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await authAxios.post('accounts:signInWithPassword?key=AIzaSyDNDLaJY_j7ZdYpQIhNWZ-xIsnneb0wd7g', payload);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
