import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

store.dispatch('autoLogin');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/szukaj',
    name: 'search',
    component: () => import('../views/Search'),
  },
  {
    path: '/rejestracja',
    name: 'register',
    component: () => import('../views/Register'),
  },
  {
    path: '/logowanie',
    name: 'login',
    component: () => import('../views/Login'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isAuth')) {
        next({ name: from.name });
      } else {
        next();
      }
    },
  },
  {
    path: '/dodaj-secondhand',
    name: 'add-shop',
    component: () => import('../views/AddShop'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('isAuth')) {
        next();
      } else {
        next({ name: 'login' });
      }
    },
  },
  {
    path: '/sklep/:id',
    name: 'shop',
    component: () => import('../views/Shop'),
    beforeEnter: (to, from, next) => {
      window.scrollTo(0, 0);
      next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
