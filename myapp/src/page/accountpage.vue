<template>
    <div id="accountpage">
      <div class="list_header">
        <div id="header">
          <f7-link href="/setting/"><img class="setting" src="../assets/img/me_setting.png"></f7-link>
          <div class="header_name">
            <span>十年</span>
            <span style="margin-top: 20px">152****3050</span>
          </div>
          <f7-block class="account_header">
            <f7-grid no-gutter>
              <f7-col width="50">
                <img class="header_img" src="../assets/img/me_icon_shop.png">
                <div class="header_hint">
                  <span>服务门店</span>
                  <span>万达广场</span>
                </div>
              </f7-col>
              <f7-col width="50">
                <img class="header_img" src="../assets/img/me_icon_phone.png">
                <div class="header_hint">
                  <span>门店服务电话</span>
                  <span>010-121526626</span>
                </div>
              </f7-col>
            </f7-grid>
          </f7-block>
        </div>
      </div>
      <f7-list>
        <f7-list-item title="我的借款" link="/myloan/" :media="getMedia(1)"></f7-list-item>
        <f7-list-item title="我要签约" link="/assign/" :media="getMedia(2)"></f7-list-item>
        <f7-list-item title="提现" link="/withdraw/" :media="getMedia(3)"></f7-list-item>
        <f7-list-item title="还款计划" link="/repayplan/" :media="getMedia(4)"></f7-list-item>
      </f7-list>

      <f7-list>
        <f7-list-item title="常见问题" link="/question/" :media="getMedia(5)"></f7-list-item>
        <f7-list-item title="关于" link="/about/" :media="getMedia(6)"></f7-list-item>
      </f7-list>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props: [],
      computed: {

      },
      methods:{
        getMedia(id){
          switch (id){
            case 1:
              return `<img class='avatar' src='../../static/me_icon_jiekuan.png'/>`
            case 2:
              return `<img class='avatar' src='../../static/me_icon_jiekuan.png'/>`
            case 3:
              return `<img class='avatar' src='../../static/me_icon_jiekuan.png'/>`
            case 4:
              return `<img class='avatar' src='../../static/me_icon_plan.png'/>`
            case 5:
              return `<img class='avatar' src='../../static/me_icon_qus.png'/>`
            case 6:
              return `<img class='avatar' src='../../static/me_icon_about.png'/>`
          }
        }
      }
    }
</script>
<style scoped>
  #accountpage{
    width: 100%;
  }
  .setting{
    float: right;
    margin-top: 30px;
    margin-right: 30px;
  }
  span{
    display: block;
    font-size: 30px;
  }
  .list_header{
    width: 100%;
    height: 464px;
    background: url("../assets/img/me_bg_top.png");
  }
  #header{
    width: 100%;
    background: url("../assets/img/me_bg_top.png");
  }
  .header_name{
    padding-top: 120px;
  }
  .header_img{
    float: left;
    margin-left: 100px;
    margin-top: 10px;
    margin-right: 20px;
  }
  .header_hint{
    text-align: left;
  }
  .account_header{
    padding-top: 100px;
  }
  li{
    height: 80px;
    font-size: 30px;
    line-height: 80px;
  }
</style>
