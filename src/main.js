import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Test from '@/components/Test.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import Dialog from '@/components/Dialog.vue'
import DateRangePicker from '@/components/DateRangePicker.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.component('Test', Test)
Vue.component('SubmitButton', SubmitButton)
Vue.component('Dialog', Dialog)
Vue.component('DateRangePicker', DateRangePicker)

Vue.http.interceptors.push((request, next) => {
  request.credentials = true // 接口每次请求会跨域携带cookie
  // request.method = 'POST' // 请求方式（get,post）
  // request.headers.set('token', 'a892eb3af0d141baad608f13168dd29c') // 请求headers携带参数
  next(function (response) {
    return response
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
