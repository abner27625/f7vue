/*import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)*/

export default [
  {
    path:'/accountpage/',
    components:require('../page/accountpage.vue')
  },{
    path:'/loanpage/',
    components:require('../page/loanpage.vue')
  },{
    path:'/about/',
    components:require('../page/about.vue')
  }
]
