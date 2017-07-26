<template>
  <div class="firstpage">
    <div>
      <app-banner :listImg="listImg"></app-banner>
    </div>
    <div class="with_share">
      <f7-link link="getlink(1)">
        <img id="withshare_img" src="../assets/img/home_icon_enjoy.png">
        <div>
          <p>和享贷</p>
          <p>手机在线审批，快速审批</p>
        </div>
      </f7-link>
    </div>

    <f7-block class="product first">
      <f7-grid no-gutter>
        <f7-col width="50">
          <img src="../assets/img/home_icon_socia.png">
          <span>公积金贷</span>
        </f7-col>
        <f7-col width="50">
          <img src="../assets/img/home_icon_safe.png">
          <span>车主贷</span>
        </f7-col>
      </f7-grid>
    </f7-block>

    <f7-block class="product second">
      <f7-grid no-gutter>
        <f7-col width="50" >
          <img src="../assets/img/home_icon_fund.png">
          <span>寿险贷</span>
        </f7-col>
        <f7-col width="50">
          <img src="../assets/img/home_icon_car.png">
          <span>社保贷</span>
        </f7-col>
      </f7-grid>
    </f7-block>

    <f7-block class="product third">
      <f7-grid no-gutter>
        <f7-col width="50">
          <img src="../assets/img/home_icon_ecs.png">
          <span>精英贷</span>
        </f7-col>
        <f7-col width="50">
          <img src="../assets/img/home_icon_ecs.png">
          <span>信楼贷</span>
        </f7-col>
      </f7-grid>
    </f7-block>
  </div>

</template>

<script type="text/ecmascript-6">
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
      components: {
        'app-banner': banner,
      },
      methods:{
        getLink(type){
          return '/loanDetailInfo/?type=${type}'
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
    background-color: #b6cbee;
  }
  .with_share{
    width: 100%;
    height: 300px;
    margin-top: 30px;
    background-color: white;
  }
  p{
    display: block;
    font-size: 50px;
  }
  .firstpage #withshare_img{
    float: left;
    margin-top: 20px;
    margin-left: 100px;
  }
  .product{
    background-color: white;
    height: 150px;
    line-height: 150px;
  }
  .first{
    margin-top: 20px;
  }
  span{
    font-size: 40px;
    line-height: 100px;
  }
</style>

