import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from "vue-axios";
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import {BootstrapVueIcons} from "bootstrap-vue";

//import showServerError from "./mixins/showServerError";
//import authCheck from "./mixins/authCheck";

//plugins
Vue.use(VueAxios, axios);
Vue.use(BootstrapVueIcons);

//global mixins
//Vue.mixin(showServerError);
//Vue.mixin(authCheck);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');