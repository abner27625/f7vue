<template>
    <div id="loandetailinfo">
        <div id="header" v-for="info in infolist">
          <f7-link back><img src="../assets/img/huankuan_top_arrow.png" class="back"/></f7-link>
        </div>
      <div v-for="info in infolist">
        <img align="left" src="../assets/img/pro_icon_renqun.png"/>
        <span class="hint">适用人群</span>
        <h4>{{info.applicablePeople}}</h4>
        <img align="left" src="../assets/img/pro_icon_condition.png"/>
        <span class="hint">申请条件</span>
        <ul>
          <li v-for="item in info.applicationRequirement">
            {{item}}
          </li>
        </ul>
        <img align="left" src="../assets/img/pro_icon_jieshao.png"/>
        <span class="hint">产品介绍</span>
        <f7-block class="account_header">
          <f7-grid no-gutter>
            <f7-col width="33">
              <img class="header_img" src="../assets/img/pro_icon_edu.png">
              <span>额度(万元)</span>
              <span>2~20</span>
            </f7-col>
            <f7-col width="33">
              <img class="header_img" src="../assets/img/pro_icon_time.png">
              <span>期限(月)</span>
              <span>12/24/36</span>
            </f7-col>
            <f7-col width="33">
              <img class="header_img" src="../assets/img/pro_icon_feilv.png">
              <span>综合费率</span>
              <span>{{info.comprehensiveRate}}</span>
            </f7-col>
          </f7-grid>
        </f7-block>
      </div>
    </div>
</template>

<script type="text/ecmascript-6" scoped>
    export default{
      props: [],
      data(){
        return{
          infoList:[]
        }
      },
      mounted(){
          let query = this.$route.query
          let type = query.type || "1"
          let temp = null
          console.log(type)
          switch (type) {
              case "1":
                temp = {
                  url:require("../assets/img/pro_top_banner_enjoy.png"),
                  comprehensiveRate: "1.78",
                  applicablePeople: "有微粒贷授信额度且使用过该额度的人群",
                  applicationRequirement: [
                    "23-55（不含）周岁具有完全民事行为的中国公民", "申请人当期有未结清微粒贷借款或历史微粒贷借款结清日期在近三个月内",
                    "工作及居住所在城市与申请地一致", "央行征信报告非空白"
                  ]
                }
                this.infoList.push(temp);
                break;
              case "2":
                temp = {
                  url:require("../assets/img/pro_top_banner_gjj.png"),
                  comprehensiveRate: "1.88",
                  applicablePeople: "授薪类人群中，能够提供公积金的高端企业员工",
                  applicationRequirement: ["23-55（不含）岁", "在现单位工作且连续缴纳公积金的在职员工", "公积金月缴存总额300元以上事业机关单位、国企、上市公司、其他大中型企业人员"]
                }
                this.infoList.push(temp);
                break;
              case "3":
                temp = {
                  url:require("../assets/img/pro_top_banner_bus.png"),
                  comprehensiveRate: "1.88",
                  applicablePeople: "在申请地有无抵押或无质押车产的稳定客户",
                  applicationRequirement: ["23-55（不含）岁", "授薪或经营人群", "在申请城市拥有登记及购买的全款非营运车辆"]
                }
                this.infoList.push(temp);

                break;
              case "4":
                temp = {
                  url:require("../assets/img/pro_top_banner_sx.png"),
                  comprehensiveRate: "1.88",
                  applicablePeople: "在申请地有传统型、分红型或万能型寿险的稳定客户",
                  applicationRequirement: ["23-55（不含）岁", "授薪或经营人群"]
                }
                this.infoList.push(temp);
                break;
              case "5":
                temp = {
                  url:require("../assets/img/pro_top_banner_sb.png"),
                  comprehensiveRate: "1.88",
                  applicablePeople: "社保缴纳基数≥2000元，且供职于注册资金1000万以上或国企、事业单位",
                  applicationRequirement: ["23-55（不含）岁", "本地户籍连续缴纳9个月，外地户籍连续缴纳12个月", "工作居住地与申请地一致"]
                }
                this.infoList.push(temp);
                break;
              case "6":
                temp = {
                  url:require("../assets/img/pro_top_banner_jy.png"),
                  comprehensiveRate: "1.98",
                  applicablePeople: "授薪类人群高端稳定客户",
                  applicationRequirement: ["23-55（不含）岁", "在现单位在编且连续工作满6个月及以上，外地户籍连续缴纳12个月", "事业机关单位、国企、上市公司、其他大中型企业人员网银发薪月收入3000元以上"]
                }
                this.infoList.push(temp);
                break;
            case "7":
              temp = {
                url:require("../assets/img/pro_top_banner_jy.png"),
                comprehensiveRate: "1.68",
                applicablePeople: "授薪类人群高端稳定客户",
                applicationRequirement: ["23-55（不含）岁", "在现单位在编且连续工作满6个月及以上，外地户籍连续缴纳12个月", "事业机关单位、国企、上市公司、其他大中型企业人员网银发薪月收入3000元以上"]
              }
              this.infoList.push(temp);
              break;
          }
      }
    }
</script>
<style scoped>
  #header{
    width: 100%;
    height: 360px;
    /*background-image: url("../assets/img/pro_top_banner_enjoy.png");*/
  }
  .back{
    float: left;
    margin-left: 20px;
    margin-top: 20px;
  }
  span{
    display: block;
  }

</style>
