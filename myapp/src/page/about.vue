<template>
    <f7-page class="about">
      <f7-navbar :title="关于" sliding back></f7-navbar>
      <img src="../assets/img/hexindai_icon.png"/>
      <h1>和信借款</h1>
      <f7-list>
        <f7-list-item title="检查更新" after="版本V2.2.0"></f7-list-item>
        <f7-list-item link="/aboutus" title="关于我们"></f7-list-item>
        <f7-list-item title="客服电话" after="400-001-1955"></f7-list-item>
      </f7-list>
      <f7-block>
        <p>和信信息服务有限公司</p>
        <p>©2013-2017 和信信贷 All Rights Reserved</p>
      </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    export default{
      props: [],
      method:{
      }
    }
</script>

<style type="text/css" scoped>
  .about{
    background-color: #f7f7f7;
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
</style>
