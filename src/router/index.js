import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/szukaj',
    name: 'search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/logowanie',
    name: 'login',
    component: () => import('../views/Login'),
  },
  {
    path: '/dodaj-secondhand',
    name: 'add-shop',
    component: () => import('../views/AddShop'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
