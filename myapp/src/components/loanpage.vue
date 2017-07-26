<template>
  <div class="firstpage">
    <div>
      <app-banner :listImg="listImg"></app-banner>
    </div>

    <div id="with_share" @click="goto('/loanDetailInfo',1)">
      <img id="with_share_img" src="../assets/img/home_icon_enjoy.png">
      <ul id="with_share_hint">
        <li>和享贷</li>
        <li id="with_share_hint_two">手机在线审批，快速审批</li>
      </ul>
    </div>

    <div class="content">
      <div class="flex_container">
        <div class="product_item" @click="goto('/loanDetailInfo',2)">
          <img src="../assets/img/home_icon_fund.png">
          <span>公积金贷</span>
        </div>
        <div class="product_item" @click="goto('/loanDetailInfo',3)">
          <img src="../assets/img/home_icon_car.png">
          <span>车主贷</span>
        </div>
      </div>
      <hr>
      <div class="flex_container">
        <div class="product_item" @click="goto('/loanDetailInfo',4)">
          <img src="../assets/img/home_icon_socia.png">
          <span>寿险贷</span>
        </div>
        <div class="product_item" @click="goto('/loanDetailInfo',5)">
          <img src="../assets/img/home_icon_safe.png">
          <span>社保贷</span>
        </div>
      </div>
      <hr>
      <div class="flex_container" id="last_flex">
        <div class="product_item" @click="goto('/loanDetailInfo',6)">
          <img src="../assets/img/home_icon_ecs.png">
          <span>精英贷</span>
        </div>
        <div class="product_item" @click="goto('/loanDetailInfo',7)">
          <img src="../assets/img/home_icon_ecs.png">
          <span>信楼贷</span>
        </div>
      </div>
      <hr>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
    import { Popup } from 'mint-ui';
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
        goto(path,type){
          const that = this;
          if(type === 1){
            that.$router.push({path,query:{
              type:"1"
            }})
          }else if(type === 2){
            that.$router.push({path,query:{
              type:"2"
            }})
          }else if(type === 3){
            that.$router.push({path,query:{
              type:"3"
            }})
          }else if(type === 4){
            that.$router.push({path,query:{
              type:"4"
            }})
          }else if(type === 5){
            that.$router.push({path,query:{
              type:"5"
            }})
          }else if(type === 6){
            that.$router.push({path,query:{
              type:"6"
            }})
          }else if(type === 7){
            that.$router.push({path,query:{
              type:"7"
            }})
          }
        }
      }
    };
</script>

<style type="text/css" scoped>
  * {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .firstpage{
    background-color: #b6cbee;
  }
  a{
    text-decoration: none;
  }
  h1{
    text-align: center;
  }
  #with_share{
    width: 100%;
    height: 300px;
    background-color: white;
    border-left:#FFF 0px solid;
    margin-bottom:40px;
    margin-top: 40px;
  }
  #with_share_img{
    margin-left: 120px;
    margin-top: 40px;
  }
  #with_share_hint{
    color: firebrick;
    float: right;
    font-size: 40px;
    margin-top: 120px;
    margin-right: 80px;
  }
  #with_share_hint_two{
    margin-top: 20px;
  }

  li {
    list-style-type: none;
  }
  .product_item{
    width: 100%;
    height: 200px;
  }

  #other{
    color: gray;
    line-height: 200px;
  }
  #product_item_other{
    background-color: #eeeeee;
  }
  .product_item > span{
     font-size: 30px;
     margin-left: 30px;
     line-height: 200px;
   }
  .content{
    padding-bottom: 200px;
    background-color: white;
  }
  .guide_item > span{
    font-size: 30px;
    text-align: center;
  }

  .flex_container{
    width: 100%;
    height: 200px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    <!--设置分栏数-->
    -webkit-columns: 2;
    -moz-columns: 2;
    -o-columns: 2;
    columns: 2;
    <!--设置分栏间隔线-->
    -webkit-column-rule: 1px solid gray;
    -moz-column-rule: 1px solid gray;
    -o-column-rule: 1px solid gray;
    column-rule: 1px solid gray;
  }

  hr{
    height: 1px;
    color: gray;
  }

  .product_item > img{
    text-align: center;
    padding-top: 50px;
  }
  .flex_container > #last_flex{
    margin-bottom: 100px;
  }

</style>

