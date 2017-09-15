// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate , {Validator} from 'vee-validate';
import moment from 'moment';

Vue.config.productionTip = false
Vue.component();
 window.moment = moment;
// Validator.installDateTimeValidators(moment);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
