/*import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)*/

export default [
  {
    path:'/loanpage/',
    component:require('./page/loanpage.vue')
  },
  {
    path:'/accountpage/',
    component:require('./page/accountpage.vue')
  },
  {
    path:'/about/',
    component:require('./page/about.vue')
  },
  {
    path:'/question/',
    component:require('./page/question.vue')
  },
  {
    path:'/myloan/',
    component:require('./page/myloan.vue')
  },
  {
    path:'/assign/',
    component:require('./page/assign.vue')
  },
  {
    path:'/withdraw/',
    component:require('./page/withdraw.vue')
  },
  {
    path:'/repayplan/',
    component:require('./page/repayplan.vue')
  },
  {
    path:'/findpassword/',
    component:require('./page/findpassword.vue')
  },
  {
    path:'/setting/',
    component:require('./page/setting.vue')
  },
  {
    path:'/login/',
    component:require('./page/login.vue')
  }
]
