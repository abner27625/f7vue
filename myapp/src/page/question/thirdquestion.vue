<template>
    <div>
      <f7-navbar></f7-navbar>
      <f7-list>
        <f7-list-item v-for="item in list" :key="item.id">
          <ul>
            <li style="font-size: 30px;color: #333333">{{item.title}}</li>
            <ul>
              <em></em><li style="font-size: 26px;color: #008dfe">{{item.content}}</li>
            </ul>
          </ul>
        </f7-list-item>
      </f7-list>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props: [],
      data(){
        return{
          list:[{"title":"借款后，何时以何种方式还款?","content":"我司将在还款日从您的授权本人银行卡划扣应还金额，您只需还款日前一天将应还金额存入您已授权的本人银行卡即可。"},
            {"title":"提前结清时服务费、咨询费的是如何退费的?","content":"提前结清，我司会根据您的已还期数，退换相应的服务费及咨询费。详情，请查看App内“我的借款”-“还款计划”。"},
            {"title":"贵公司的自动划扣支持哪些银行卡?","content":"目前有工商银行、广东发展银行、华夏银行、中国银行、中信银行、建设银行、交通银行、民生银行、农业银行、兴业银行、中国邮政储蓄银行、光大银行。如有调整不再另行通知，请咨询您的服务门店。"}]
        }
      }
    }
</script>
<style scoped>



</style>
