import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Test from '@/components/Test.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component('Test', Test)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
