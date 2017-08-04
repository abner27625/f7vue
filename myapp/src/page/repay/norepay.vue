<template>
    <div>
      <f7-list>
        <f7-list-item v-for="info in norepay" :key="key">
          <div id="card">
            <span>本期应还金额:{{info.shouldBalance}}</span><span style="float: right;text-align: right">{{info.repaymentDay}}</span>
            <div>
              <span v-if="info.isTrue">应还违约金:{{info.shouldLateFee}}</span><span style="float: right" v-if="info.isTrue">{{info.periodsNum}}</span>
              <p v-if="info.isTrue">应还罚息:{{info.shouldPenaltyInterest}}</p>
              <span style="text-align: left">月还款额:{{info.monthBalance}}</span><span style="float: right" v-if="!info.isTrue">{{info.periodsNum}}</span>
            </div>
          </div>
        </f7-list-item>
      </f7-list>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    export default{
        props: [],
      /*
      * 用computed两个都不隐藏
      * 用watch 两个都隐藏掉了
      * */
        /*watch:{
            isTrue(){
              if(this.shouldLateFee === '0.00'){
                return false
              }else{
                return true
              }
            }
        },*/
      computed: {
        ...mapState({
          norepay: state => state.norepay,
        })
      },
      mounted(){
        this.$nextTick(_ => {
          this.$f7.showIndicator()
          this.$store.dispatch('getNorepay', () => {
            this.$f7.hideIndicator()
          })
        })
      },
        /*data(){
          return{
            infolist:[
              {
                shouldBalance:'1000',
                repaymentDay:'2-10',
                shouldLateFee:'0.10',
                isTrue:true,
                shouldPenaltyInterest:'0.10',
                monthBalance:'200',
                periodsNum:'第一期'},
              {
                shouldBalance:'1200',
                repaymentDay:'3-10',
                shouldLateFee:'0.00',
                isTrue:false,
                shouldPenaltyInterest:'0.10',
                monthBalance:'300',
                periodsNum:'第二期'
              }
            ]
          }
        },*/
        methods:{
          getBoolean(name){
            if(this.name === '0.00'){
              return true
            }else{
              return false
            }
          }
        }
    }
</script>
<style scoped>
    #card{
      font-size: 30px;
    }

</style>
