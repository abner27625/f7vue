<template>
    <f7-page>
      <f7-navbar title="注册" back-link=" " sliding></f7-navbar>
      <f7-list class="list">
        <f7-list-item >
          <f7-label>所在城市</f7-label>
          <f7-input placeholder="请选择城市" id="choose-city" type="text" style="text-align: right"></f7-input>
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-list-item>
          <f7-input placeholder="销售经理工号" type="text"></f7-input>
        </f7-list-item>
      </f7-list>
      <f7-block>如果没有销售经理请直接下一步</f7-block>

    </f7-page>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    export default{
      props: [],
      mounted(){
        this.$nextTick(_ => {
          this.$f7.showIndicator()
          Vue.axios.get('estate/query?key=&city=%E8%8B%8F%E5%B7%9E&q=%E4%B9%9D%E9%BE%99%E4%BB%93').then(
            m=>console.log(m.data)
          ).then(
            console.log("就是这么快")
          ).then(
            this.$f7.hideIndicator()
          )
        })
        let self = this
        let chooseCity = self.$f7.picker({
          input: '#choose-city',
          cols: [
            {
              textAlign: 'center',
              values: ['12个月', '24个月', '36个月']
            }
          ]
        })
      },
    }
</script>
<style type="text/css" scoped>
  .navbar{
    height: 80px;
    font-weight: 500;
  }
  .list{
    margin-top: 100px;
  }
  .label {
    width: 180px !important;
  }
  li{
    font-size: 28px;
    height: 100px !important;
    line-height: 100px;
    text-align: left;
  }
</style>
