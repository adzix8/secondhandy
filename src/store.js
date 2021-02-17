import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import authAxios from './auth-axios';
/* eslint-disable */
import router from './router/index';
/* eslint-enable */

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
    async login({ commit, dispatch }, payload) {
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

        setTimeout(() => {
          dispatch('logout');
        }, response.data.expiresIn * 1000);
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
      router.push({ name: 'home' });
    },
    autoLogin({ commit, dispatch }) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      if (!token || !userId) {
        return;
      }
      const expirationDate = new Date(localStorage.getItem('expires'));
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
      // console.log('Pozostało sekund', expirationDate.getTime() - now.getTime());
      setTimeout(() => {
        dispatch('logout');
      }, (expirationDate.getTime() - now.getTime()));
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
