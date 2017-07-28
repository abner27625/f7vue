<template>
    <div>
      <span>本期应还金额:{{shouldBalance}}</span><span>{{repaymentDay}}</span>
      <span>应还违约金:{{shouldLateFee}}</span>
      <span>应还罚息:{{shouldPenaltyInterest}}</span>
      <span>月还款额:{{monthBalance}}</span><span>{{periodsNum}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: []
    }
</script>
<style type="text/css" scoped>

</style>
