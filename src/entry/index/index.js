import Vue from 'vue'
import IndexView from './index.vue'
import router from './router'
import '@/assets/js/vant';
import 'vant/lib/index.css';

import '@/assets/js/flexible';
import '@/assets/style/reset.css';

Vue.config.productionTip = false




new Vue({
  el: '#app',
  router,
  render: h => h(IndexView)
});
