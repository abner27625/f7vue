<template>
  <div id="app">
    <!-- Status bar overlay for fullscreen mode-->
    <!--<f7-statusbar></f7-statusbar>-->
    <!-- Main Views -->
    <f7-views>
      <!--navbar-through :dynamic-navbar="true"-->
      <f7-view id="main-view"   main>
        <!--<f7-navbar theme="white">
          <f7-nav-left></f7-nav-left>
          <f7-nav-center sliding>我就看看</f7-nav-center>
          <f7-nav-right>
          </f7-nav-right>
        </f7-navbar>-->
        <f7-pages>
          <f7-page toolbar-fixed navbar-fixed>
            <f7-toolbar tabbar labels>
              <f7-link icon="icon-ios7homeoutline" tab-link="#loanpage" active text="首页"></f7-link>
              <f7-link icon="icon-ios7chatbubbleoutline" tab-link="#accountpage" text="我的"></f7-link>
            </f7-toolbar>
            <f7-tabs>
              <f7-tab id="loanpage" active @tab:show="tabActived('loanpage')">
                <loanpage></loanpage>
              </f7-tab>
              <f7-tab id="accountpage" @tab:show="tabActived('accountpage')">
                <accountpage></accountpage>
              </f7-tab>
            </f7-tabs>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script type="text/ecmascript-6">
  import accountpage from "./page/accountpage.vue"
//  import expectedquota from "./page/applynow/expectedquota.vue"
  import loanpage from "./page/loanpage.vue"

  export default {
    name: 'app',
    data(){
      return{
        activedTab: 'loanpage'
      }
    },
    methods:{
      tabActived(tab) {
        this.activedTab = tab
      }
    },
    components:{
      accountpage,
      loanpage
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .toolbar{
    height: 120px !important;
  }
  .tab-link{
    width: 50%;
    height: 100px !important;
    width: 50% !important;
  }
  .icon-ios7homeoutline{
    width: 48px !important;
    height: 48px !important;
    background-image: url("./assets/img/home_toolbar_jie_hover.png") !important;
  }
  .icon-ios7chatbubbleoutline{
    width: 48px !important;
    height: 48px !important;
    background-image: url("./assets/img/home_toolbar_wo_hover.png") !important;
  }
  .tabbar-label{
    font-size: 30px !important;
  }
</style>

