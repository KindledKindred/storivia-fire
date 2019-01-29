import Vue from 'vue';
import '@/plugins/vuetify';
import '@/plugins/firebase';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';
import VueLodash from 'vue-lodash'

Vue.use(VueLodash)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount('#app');