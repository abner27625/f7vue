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
          list:[{"title":"借款有年龄限制么?","content":"23-55（不含）周岁符合相应借款条件的中国公民。"},
            {"title":"征信报告的有效期是多长时间?","content":"15天。一般情况征信报告由央行征信中心个人信用信息服务平台网查获的，且无需支付费用。特殊情况可申请代查。"}]
        }
      }
    }
</script>
<style scoped></style>
