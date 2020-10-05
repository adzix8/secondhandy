import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import authAxios from './auth-axios';

Vue.use(Vuex);

const apiKey = 'AIzaSyDNDLaJY_j7ZdYpQIhNWZ-xIsnneb0wd7g';

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
  },
  getters: {
    isAuth: state => state.token !== null,
  },
  mutations: {
    auth(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
    },
    clearAuth(state) {
      state.token = null;
      state.userId = null;
    },
  },
  actions: {
    async register({ commit }, payload) {
      try {
        const response = await authAxios.post(`accounts:signUp?key=${apiKey}`, payload);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit }, payload) {
      try {
        const response = await authAxios.post(`accounts:signInWithPassword?key=${apiKey}`, payload);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId,
        });
        const startDate = new Date();
        const endDate = new Date(startDate.getTime() + response.data.expiresIn * 1000);
        const isAuth = 'true';
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expires', endDate);
        localStorage.setItem('isAuth', isAuth);
      } catch (error) {
        console.log(error);
      }
    },
    logout({ commit }) {
      commit('clearAuth');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expires');
      localStorage.removeItem('isAuth');
      // this.$router.push({ name: 'home' });
    },
    autoLogin({ commit }) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      if (!token && !userId) {
        return;
      }
      const expirationDate = localStorage.getItem('expires');
      const now = new Date();
      if (now >= expirationDate) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expires');
        localStorage.removeItem('isAuth');
        return;
      }

      commit('auth', {
        token,
        userId,
      });
    },
    async addShop({ state }, payload) {
      if (state.userId === null) {
        return;
      }

      try {
        await axios.post(`/locals.json?auth=${state.token}`, payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
