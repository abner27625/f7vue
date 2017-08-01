<template>
    <f7-page>
      <f7-navbar title="设置" back-link=" " sliding></f7-navbar>
      <f7-list class="list">
        <f7-list-item title="手机号" link="/modifymobile/"></f7-list-item>
        <f7-list-item title="登录密码" link="/modifypassword/"></f7-list-item>
        <f7-list-item title="交易密码" link="/modifytradepassword/"></f7-list-item>
      </f7-list>
      <f7-button text="退出账户" href="/login/"></f7-button>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    export default{
        props: []
    }
</script>
<style type="text/css" scoped>
  .navbar{
    height: 80px;
    font-weight: 500;
  }
  li{
    height: 80px;
    font-size: 30px;
    line-height: 80px;
  }
  .list{
    margin-top: 100px;
  }
  .button{
    width: 90%;
    margin-top: 90px;
    height: 100px !important;
    font-size: 38px;
    background: #008dfe;
    text-align: center;
    line-height: 100px;
    margin-left: 5%;
    color: white;
  }
</style>
