/*import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)*/

export default [
  {
    path:'/loanpage',
    components:require('../page/loanpage.vue')
  },
  {
    path:'/accountpage',
    components:require('../page/accountpage.vue')
  },
  {
    path:'/about',
    components:require('../page/about.vue')
  },
  {
    path:'/question',
    components:require('../page/question.vue')
  },
  {
    path:'/loan',
    components:require('../page/myloan.vue')
  },
  {
    path:'/assign',
    components:require('../page/assign.vue')
  },
  {
    path:'/withdraw',
    components:require('../page/withdraw.vue')
  },
  {
    path:'/repayplan',
    components:require('../page/repayplan.vue')
  },{
    path:'/findpassword',
    components:require('../page/findpassword.vue')
  }
]
