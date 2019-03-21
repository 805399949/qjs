import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'; // 导入样式
import config from '@/config'

if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.use(iView);

Vue.config.productionTip = false
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
