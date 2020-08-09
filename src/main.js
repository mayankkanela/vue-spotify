import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router/index'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  
}).$mount('#app')
