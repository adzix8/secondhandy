import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

axios.defaults.baseURL = 'https://secondhandy-e3052.firebaseio.com';

Vue.use(VueAxios, axios);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
