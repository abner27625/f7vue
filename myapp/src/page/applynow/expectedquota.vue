<template>
    <div>
      <f7-list>
        <f7-list-item>
          <f7-input placeholder="请输入2万-20万的借款金额" type="text"></f7-input><f7-label>元</f7-label>
        </f7-list-item>
        <f7-block style="text-align: left;margin-left: 40px;font-size: 26px">此额度仅为预审批参考额度，请以实际审批结果为准</f7-block>
      </f7-list>
      <f7-list>
        <f7-list-item>
          <f7-input placeholder="请输入借款期限" id="time-limit" type="text"></f7-input><f7-label>月</f7-label>
        </f7-list-item>

        <f7-list-item >
          <f7-input placeholder="月还款额" type="text"></f7-input><f7-label>元</f7-label>
        </f7-list-item>
        <f7-block style="text-align: left;margin-left: 40px;font-size: 26px">本产品为分级费率，费率视信用等级综合评定，具体月还款额以最终结果为准。</f7-block>
      </f7-list>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [],
        mounted(){
          let self = this
          let timeLimit = self.$f7.picker({
            input: '#time-limit',
            cols: [
              {
                textAlign: 'center',
                values: ['12个月', '24个月', '36个月','12个月', '24个月', '36个月','12个月', '24个月', '36个月','12个月', '24个月', '36个月']
              }
            ]
          })
        }
    }
</script>
<style scoped>
  li{
    font-size: 28px;
    height: 100px !important;
    line-height: 100px;
    text-align: left;
  }
</style>
