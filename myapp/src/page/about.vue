<template>
    <div class="about">
      <div>
        <mt-header fixed title="关于">
          <router-link @click="back" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button slot="right"></mt-button>
        </mt-header>
      </div>
      <img src="../assets/img/hexindai_icon.png"/>
      <h1>和信借款</h1>
      <ul class="icon-list">
        <li class="icon">
          <span class="hint">检查更新</span>
          <span class="text">版本 V1.0.0</span>
        </li>
        <li class="icon">
          <span class="hint">关于我们</span>
          <i></i>
        </li>
        <li class="icon">
          <span class="hint">客服电话</span>
          <span class="text">400-001-1955</span>
        </li>
      </ul>
      <h2>和信信息服务有限公司
        <h4 style="margin-top: 20px">©2013-2016 和信信贷 All Rights Reserved</h4>
      </h2>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props: [],
      method:{
        back(){
          window.history.back(-1);
        }
      }
    }
</script>

<style type="text/css" scoped>
  * {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .about{
    background-color: #f7f7f7;
  }
  .icon i{
    border: 2px solid #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 30px;
    position: absolute;
    width: 20px;
    height: 20px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  img{
    text-align: center;
    margin-top: 40px;
  }
  h1{
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
  }
  .hint{
    color: #999;
    font-size: 30px;
    margin-left: 40px;
    float: left;
    line-height: 100px;
  }
  span{
    text-align: center;
  }
  .text{
    color: black;
    font-size: 30px;
    float: right;
    margin-right: 40px;
    line-height: 100px;
  }
  .icon-list{
    background-color: white;
    margin-top: 30px;
    height: 54%;
    overflow-y: scroll;
  }
  .icon-list img{
    width: 58px;
    height: 58px;
    float: left;
    margin-top: 21px;
  }
  .icon-list .icon{
    height: 100px;
    width: 100%;
    padding: 0 20px 10px 20px;
    position: relative;
    display: inline-block;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
  }
  h2{
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
  }
  h4{
    text-align: center;
  }
</style>
