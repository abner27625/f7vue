<template>
    <f7-page class="login">
      <!--<f7-navbar theme="white" navbar-through :dynamic-navbar="true">
        <f7-nav-left></f7-nav-left>
        <f7-nav-center sliding>登录</f7-nav-center>
        <f7-nav-right>
        </f7-nav-right>
      </f7-navbar>-->
      <f7-navbar title="登录" back-link=" " sliding></f7-navbar>
      <f7-list class="list">
        <f7-list-item>
          <f7-label>Username</f7-label>
          <f7-input name="username" placeholder="请输入手机号" type="text" v-modal="username" class="login_input"></f7-input>
        </f7-list-item>

        <f7-list-item>
          <f7-label>Password</f7-label>
          <f7-input name="password" placeholder="请输入密码" type="password" v-modal="password" class="login_input"></f7-input>
        </f7-list-item>
      </f7-list>

      <f7-button text="登录" href="/accountpage/"></f7-button>

      <f7-button text="?忘记密码" href="/findpassword/" class="forgetpassword"></f7-button>

<!--
      <f7-link @click="$router.load({url: '/about/'})" text="我就静静的看看不说话!"></f7-link>
-->
    </f7-page>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    export default{
      props: [],
      methods:{
        login(){
          setTimeout(axios({
            method:'post',
            url:'/query',
            data:{
              type:'yuantong',
              postid:'11111111111'
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(function(res){
            console.log(res.data)
          }).then(
            this.$f7.alert("mmp,找死啊")
          ),1500)
        }
      }
    }
</script>
<style type="text/css" scoped>
  .login{
    /*background-image: url('../assets/img/login_bg.png');*/
  }
  li{
    font-size: 28px;
    height: 100px !important;
    line-height: 100px;
    text-align: left;
  }

  .label{
    width: 200px !important;
  }

  .button{
    height: 80px;
    line-height: 80px;
    font-size: 40px;
    width: 92%;
    margin-top: 20px;
    margin-left: 4%;
  }

  .login_input{
    font-size: 26px;
  }

  .forgetpassword{
    border: none;
    color: rgba(255,255,255,1.0);
  }
  .navbar{
    height: 80px;
    font-weight: 500;
  }
  .list{
    margin-top: 100px;
  }
</style>
