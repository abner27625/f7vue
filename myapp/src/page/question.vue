<template>
    <f7-page >
        <!--<f7-toolbar>
          <f7-link tab-link="#firstquestionpage" active text="借款相关"></f7-link>
          <f7-link tab-link="#secondquestionpage" text="审核放款"></f7-link>
          <f7-link tab-link="#thirdquestionpage" text="还款"></f7-link>
        </f7-toolbar>
        <f7-tabs>
          <f7-tab id="firstquestionpage" active @tab:show="tabActived('firstquestionpage')">
            <firstquestionpage></firstquestionpage>
          </f7-tab>
          <f7-tab id="secondquestionpage" @tab:show="tabActived('secondquestionpage')">
            <secondquestionpage></secondquestionpage>
          </f7-tab>
          <f7-tab id="thirdquestionpage" @tab:show="tabActived('thirdquestionpage')">
            <thirdquestionpage></thirdquestionpage>
          </f7-tab>
        </f7-tabs>-->
        <!--<f7-subnavbar sliding>-->
      <f7-navbar title="常见问题" back-link=" " sliding></f7-navbar>
          <f7-buttons>
            <f7-button tab-link="#tab1" active>借款相关</f7-button>
            <f7-button tab-link="#tab2">审核放款</f7-button>
            <f7-button tab-link="#tab3">还款</f7-button>
          </f7-buttons>
        <!--</f7-subnavbar>-->
      <f7-tabs>
        <f7-tab id="tab1" active>
          <ul class="all">
            <li class="title" type="1">最高贷款金额是多少?可以贷多长时间?</li>
            <ul>
              <li class="content">目前贷款额度最高20万，额度范围2-20万，最长可分为3年36期还款，可选12、24期。</li>
            </ul>
            <li class="title" type="1">在贵公司借款会有哪些费用产生?</li>
            <ul>
              <li class="content">您需要偿还出借人的本金及利息，支付我司咨询费及财务费。除此以外无任何其他费用。</li>
            </ul>
            <li class="title" type="1">提交申请后多长时间可以放款?</li>
            <ul>
              <li class="content">一般放款时长为3个工作日左右，最宽当天放款。具体放款时间根据每位客户情况有所不同。</li>
            </ul>
          </ul>
        </f7-tab>
        <f7-tab id="tab2">
          <ul class="all">
            <li class="title" type="1">借款有年龄限制么?</li>
            <ul>
              <li class="content">23-55（不含）周岁符合相应借款条件的中国公民。</li>
            </ul>
            <li class="title" type="1">征信报告的有效期是多长时间?</li>
            <ul>
              <li class="content">15天。一般情况征信报告由央行征信中心个人信用信息服务平台网查获的，且无需支付费用。特殊情况可申请代查。</li>
            </ul>
          </ul>
        </f7-tab>
        <f7-tab id="tab3">
          <ul class="all">
            <li class="title" type="1">借款后，何时以何种方式还款?</li>
            <ul>
              <li class="content">我司将在还款日从您的授权本人银行卡划扣应还金额，您只需还款日前一天将应还金额存入您已授权的本人银行卡即可。</li>
            </ul>
            <li class="title" type="1">提前结清时服务费、咨询费的是如何退费的?</li>
            <ul>
              <li class="content">提前结清，我司会根据您的已还期数，退换相应的服务费及咨询费。详情，请查看App内“我的借款”-“还款计划”。</li>
            </ul>
            <li class="title" type="1">贵公司的自动划扣支持哪些银行卡?</li>
            <ul>
              <li class="content">目前有工商银行、广东发展银行、华夏银行、中国银行、中信银行、建设银行、交通银行、民生银行、农业银行、兴业银行、中国邮政储蓄银行、光大银行。如有调整不再另行通知，请咨询您的服务门店。</li>
            </ul>
          </ul>
        </f7-tab>
      </f7-tabs>

      <f7-block class="bottom">客服热线:400-001-1955</f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
    /*import firstquestionpage from './question/firstquestion.vue'
    import secondquestionpage from './question/secondquestion.vue'
    import thirdquestionpage from './question/thirdquestion.vue'*/

    export default{
        /*props: [],
        data(){
          return{
            activedTab: 'firstquestionpage'
          }
        },
        methods:{
          tabActived(tab) {
            this.activedTab = tab
          }
        },
        components:{
          firstquestionpage,secondquestionpage,thirdquestionpage
        }*/
    }
</script>
<style scoped>
  .all{
    padding-top: 50px;
  }
  .title{
    font-size: 30px;
    margin-left: 50px;
    text-align: left;
    margin-top: 10px;
  }
  .content{
    list-style-type: none;
    text-align: left;
    font-size: 28px ;
    margin-top: 10px;
  }
  .button{
    margin-top: 90px;
    height: 100px !important;
    font-size: 30px;
    text-align: center;
    line-height: 100px;
  }
  .tabs{
    /*margin-top: 80px;*/
  }
  .navbar{
    height: 80px;
    font-weight: 500;
  }
  .left{
    font-size: 50px;
  }
  .bottom{
    color: #008dfe;
    font-size: 40px;
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
  }
</style>
