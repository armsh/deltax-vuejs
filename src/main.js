import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US';
import 'iview/dist/styles/iview.css'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

Vue.use(iView, { locale })
Vue.use(BootstrapVue)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
