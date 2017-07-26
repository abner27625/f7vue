<template>
    <div class="accountpage">
      <div class="header">
        <img class="setting" src="../assets/img/me_setting.png" @click="goto('/setting')">
        <h1 class="name">{{name}}</h1>
        <br>
        <h1 class="phone">{{phone}}</h1>
      </div>

      <ul class="icon-list">
        <li class="icon" @click="goto('/login')">
          <img src="../assets/img/me_icon_jiekuan.png" class="clear">
          <h4>我的借款</h4>
          <i></i>
        </li>
        <li class="icon" link="/floanpage/">
          <img src="../assets/img/me_icon_info.png" class="clear">
          <h4>完善借款信息</h4>
          <i></i>
        </li>
        <li class="icon" @click="goto('/zhimaauthorized')">
          <img src="../assets/img/me_icon_plan.png" class="clear">
          <h4>还款计划</h4>
          <i></i>
        </li>
      </ul>
      <ul class="icon-list">
        <li class="icon" @click="goto('/question')">
          <img src="../assets/img/me_icon_qus.png" class="clear">
          <h4>常见问题</h4>
          <i></i>
        </li>
        <li class="icon" @click="goto('/about')">
          <img src="../assets/img/me_icon_about.png" class="clear">
          <h4>关于</h4>
          <i></i>
        </li>
      </ul>

    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [],
        data(){
          let name = '再来一瓶';
          let phone='15214141414';
          return{name,phone}
        },
        methods:{
          goto(path){
//            this.$router.push(path)
          }
        },
    }
</script>
<style type="text/css" scoped>
  * {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .accountpage{
    background-color: #33faff;
  }
  .header{
    width: 100%;
    height: 464px;
    background-image: url("../assets/img/me_bg_top.png");
  }

  .setting{
    float: right;
    width: 46px;
    height: 46px;
    margin-right: 40px;
    margin-top: 40px;
  }
  .name{
    background-color: transparent;
    color: black;
    text-align: center;
    padding-top: 160px;
    font-size: 30px;
  }
  .phone{
    background-color: transparent;
    color: black;
    text-align: center;
    font-size: 30px;
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
  h4{
    line-height: 100px;
    text-align: left;
    margin-left: 100px;
    font-size: 30px;
  }
</style>
