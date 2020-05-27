import Vue from 'vue'
import {Button,Popup} from 'vant'
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import './mock/mockServer' // 加载mockServer即可


 Vue.use(Button)
 Vue.use(Popup)



import './assets/styles/reset.css'
import './assets/styles/icon/iconfont.css'

fastclick.attach(document.body)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
