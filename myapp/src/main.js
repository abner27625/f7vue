// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue
import Vue from 'vue'
// Import App Component
import App from './app'
// Import Routes
import router from './router'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import App Custom Styles
 import './assets/fonts/iconfont.css'
 import './assets/styles/app.less'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'

//Vue.config.productionTip = false

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
  framework7:{
    root:'#app',
    routes:router,
    pushState: true,
  },
  components: {
    app:App
  }
})
