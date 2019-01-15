import Vue from 'vue'
import LoginView from './login.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(LoginView)
})