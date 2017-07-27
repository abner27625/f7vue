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
            list:[{"title":"最高贷款金额是多少?可以贷多长时间?","content":"目前贷款额度最高20万，额度方位2-20万，最长可分为3年36期还款，可选12、24期。"},
              {"title":"在贵公司借款会有哪些费用产生?","content":"您需要偿还出借人的本金及利息，支付我司咨询费及财务费。除此以外无任何其他费用。"},
              {"title":"提交申请后多长时间可以放款?","content":"一般放款时长为3个工作日左右，最宽当天放款。具体放款时间根据每位客户情况有所不同。"}]
          }
        }
    }
</script>
<style scoped></style>
