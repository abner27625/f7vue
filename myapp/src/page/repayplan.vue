<template>
    <f7-page>
      <div id="header">
        <f7-link back><img src="../assets/img/huankuan_top_arrow.png" class="back"/></f7-link>
        <div class="header_name">
          <p style="padding-top: 200px">网络异常</p>
          <p>请稍后再试</p>
        </div>
      </div>
      <!--<f7-subnavbar class="subnavbar" sliding>-->
        <f7-buttons>
          <f7-button tab-link="#norepay" active text="未偿还"></f7-button>
          <f7-button tab-link="#repayed" text="已还记录"></f7-button>
        </f7-buttons>
      <!--</f7-subnavbar>-->
      <f7-tabs>
        <f7-tab id="norepay" active @tab:show="tabActived('norepay')">
          <norepay></norepay>
        </f7-tab>
        <f7-tab id="repayed" @tab:show="tabActived('repayed')">
          <repayed></repayed>
        </f7-tab>
      </f7-tabs>
    </f7-page>
</template>

<script type="text/ecmascript-6" scoped>
    import norepay from './repay/norepay.vue'
    import repayed from './repay/repayed.vue'
    export default{
      props: [],
      data(){
        return{
          activedTab: 'norepay'
        }
      },
      methods:{
        tabActived(tab) {
          this.activedTab = tab
        }
      },
      components:{
        norepay,repayed
      }
    }
</script>
<style scoped>
  .back{
    float: left;
    margin-left: 20px;
    margin-top: 20px;
  }
  #header{
    height: 361px;
    background: url("../assets/img/huankuan_top_yuqi.png");
  }
  p{
    font-size: 30px;
    color: black;
    margin-left: 200px;
  }
  .subnavbar{
    margin-top: 450px;
  }
  .button{
    width: 100%;
    height: 100px !important;
    font-size: 30px;
    text-align: center;
    line-height: 100px;
  }
</style>
