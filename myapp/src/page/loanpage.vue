<template>
  <div class="firstpage">
    <div>
      <app-banner :listImg="listImg"></app-banner>
    </div>
    <div class="with_share" @click="goto">
        <img id="withshare_img" src="../assets/img/home_icon_enjoy.png">
        <div>
          <p style="padding-top: 60px;font-size: 80px;color: #333333" >和享贷</p>
          <p style="font-size: 38px;color: #999999">手机<span style="color:#ff8f19;font-size: 40px">在线</span>审批，<span style="color:#ff8f19;font-size: 40px">快速</span>审批</p>
        </div>
    </div>

    <f7-block class="product first">
      <f7-grid no-gutter>
        <f7-col width="50">
          <img class='product_img' src="../assets/img/home_icon_socia.png">
          <span>公积金贷</span>
        </f7-col>
        <f7-col width="50">
          <img class='product_img' src="../assets/img/home_icon_safe.png">
          <span>车主贷</span>
        </f7-col>
      </f7-grid>
    </f7-block>

    <f7-block class="product second">
      <f7-grid no-gutter>
        <f7-col width="50" >
          <img class='product_img' src="../assets/img/home_icon_fund.png">
          <span>寿险贷</span>
        </f7-col>
        <f7-col width="50">
          <img class='product_img' src="../assets/img/home_icon_car.png">
          <span>社保贷</span>
        </f7-col>
      </f7-grid>
    </f7-block>

    <f7-block class="product third">
      <f7-grid no-gutter>
        <f7-col width="50">
          <img class='product_img' src="../assets/img/home_icon_ecs.png">
          <span>精英贷</span>
        </f7-col>
        <f7-col width="50">
          <img class='product_img' src="../assets/img/home_icon_ecs.png">
          <span>信楼贷</span>
        </f7-col>
      </f7-grid>
    </f7-block>
  </div>

</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import banner from '../components/banner_item.vue'

    import a from '../assets/img/home_banner_enjoy.png'
    import b from '../assets/img/home_banner_enjoy.png'
    import c from '../assets/img/home_banner_enjoy.png'
    import d from '../assets/img/home_banner_enjoy.png'
    import e from '../assets/img/home_banner_enjoy.png'

    export default {
      data() {
        let sideVisible = false;
        return {
          sideVisible,
          listImg: [{url: a}, {url: b}, {url: c}, {url: d}, {url: e}]
        }
      },
      mounted(){
        /*this.$nextTick(_ => {
          this.$f7.showIndicator()
          axios.all('query?type=yuantong&postid=11111111111',
            function(req,res){
              res.header("Access-Control-Allow-Origin", "*");
              res.header("Access-Control-Allow-Headers", "X-Requested-With");
            }
          ).then(
            res=>console.log(res.data)
          ).then(
            console.log("就是这么快")
          ).then(
            this.$f7.hideIndicator()
          )
        })*/
      },
      components: {
        'app-banner': banner,
      },
      methods:{
        getLink(type){
          return '/loanDetailInfo/?type=${type}'
        },
        goto(){
          console.log("that is ok ,i'm so sorry")
          this.$f7.mainView.router.load({url: `/loandetailinfo/?type=2`})
        }
      },
      computed:{

      }
    };
</script>

<style type="less" scoped>
  * {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .firstpage{
    background-color: #f7f7f7;
  }
  .with_share{
    width: 100%;
    height: 300px;
    margin-top: 30px;
    background-color: white;
  }
  p{
    display: block;
    text-align: left;
    font-size: 50px;
  }
  .firstpage #withshare_img{
    float: left;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 60px;
  }
  .product{
    background-color: white;
    height: 150px;
    line-height: 150px;
    border-bottom: 1px solid;
  }
  .first{
    margin-top: 30px;
  }
  span{
    font-size: 40px;
  }
  .product_img{
    margin-top: 30px;
  }
</style>

