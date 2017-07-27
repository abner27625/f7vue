<template>
    <f7-page id="question">
        <!--<f7-toolbar>
          <f7-link tab-link="#firstquestionpage" active text="借款相关"></f7-link>
          <f7-link tab-link="#secondquestionpage" text="审核放款"></f7-link>
          <f7-link tab-link="#thirdquestionpage" text="还款"></f7-link>
        </f7-toolbar>
        <f7-tabs>
          <f7-tab id="firstquestionpage" active @tab:show="tabActived('firstquestionpage')">
            <firstquestionpage></firstquestionpage>
          </f7-tab>
          <f7-tab id="secondquestionpage" @tab:show="tabActived('secondquestionpage')">
            <secondquestionpage></secondquestionpage>
          </f7-tab>
          <f7-tab id="thirdquestionpage" @tab:show="tabActived('thirdquestionpage')">
            <thirdquestionpage></thirdquestionpage>
          </f7-tab>
        </f7-tabs>-->
      <f7-navbar title="Animated Tabs" back-link="Back" sliding>
        <f7-subnavbar sliding>
          <f7-buttons>
            <f7-button tab-link="#firstquestionpage" active>借款相关</f7-button>
            <f7-button tab-link="#secondquestionpage">审核放款</f7-button>
            <f7-button tab-link="#thirdquestionpage">还款</f7-button>
          </f7-buttons>
        </f7-subnavbar>
      </f7-navbar>
      <f7-tabs>
        <f7-tab id="firstquestionpage" active @tab:show="tabActived('firstquestionpage')">
          <firstquestionpage></firstquestionpage>
        </f7-tab>
        <f7-tab id="secondquestionpage" @tab:show="tabActived('secondquestionpage')">
          <secondquestionpage></secondquestionpage>
        </f7-tab>
        <f7-tab id="thirdquestionpage" @tab:show="tabActived('thirdquestionpage')">
          <thirdquestionpage></thirdquestionpage>
        </f7-tab>
      </f7-tabs>
    </f7-page>
</template>
int  x = 0
x++
int y = x
<script type="text/ecmascript-6">
    import firstquestionpage from './question/firstquestion.vue'
    import secondquestionpage from './question/secondquestion.vue'
    import thirdquestionpage from './question/thirdquestion.vue'

    export default{
        props: [],
        data(){
          return{
            activedTab: 'firstquestionpage'
          }
        },
        methods:{
          tabActived(tab) {
            this.activedTab = tab
          }
        },
        components:{
          firstquestionpage,secondquestionpage,thirdquestionpage
        }
    }
</script>
<style scoped>
  #question{
    width: 100%;
  }
</style>
