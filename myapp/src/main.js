// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue
import Vue from 'vue'
// Import App Component
import App from './app'
// Import Routes
import router from './routers'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import App Custom Styles
import './assets/fonts/iconfont.css'
import './assets/styles/app.less'

import AppStyles from './assets/styles/app.css'

// Import Vuex store
import store from './store'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'

//Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)
Vue.use(axios,VueAxios)

// Init network framework
import './network'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //添加状态管理器
  store,
  template: '<app/>',
  framework7:{
    root:'#app',
    routes:router,
    //决定地址是否改变，eg: http://localhost:8080/ 跳转后是否变成 http://localhost:8080/#!//about/ 页面跳转目前存在问题
    pushState: true,
  },
  components: {
    app:App
  }
})
