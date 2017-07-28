<template>
    <div class="myloan">
      <div id="header">
        <div class="header_name">
          <p style="padding-top: 120px">你已成功申请 {{productname}}</p>
          <p>进件编号: {{number}}</p>
        </div>
      </div>
      <f7-timeline tablet-sides>
        <f7-timeline-item v-for="(item, index) in items" inner
            :day="item.day" :month="item.month" :key="index" class="timeline-list">
          <div v-for="info in item.content">
            <div class="content">
              <span>{{info.name}}</span>
              <span>{{info.state}}</span>
            </div>
            <span>{{info.time}}</span>
          </div>
        </f7-timeline-item>
      </f7-timeline>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props: [],
      data(){
        return{
          productname:"和享贷",
          number:"JDKDKFKO545461646131",
          items:[
            {
              day: '21',
              month: 'DEC',
              content: [
                {
                  name:'信息审核',
                  state:'通过',
                  time:'2017-1-10'
                }
              ]
            }, {
              day: '22',
              month: 'DEC',
              content: [
                {
                  name:'信息审核',
                  state:'通过',
                  time:'2017-1-20'
                }
              ]
            }, {
              day: '23',
              month: 'DEC',
              content: [
                {
                  name:'信息审核',
                  state:'通过',
                  time:'2017-2-10'
                }
              ]
            }, {
              day: '24',
              month: 'DEC',
              content: [
                {
                  name:'信息审核',
                  state:'失败',
                  time:'2017-3-10'
                }
              ]
            }
          ]
        }
      }
    }
</script>
<style type="less" scoped>
  #header{
    height: 290px;
    background-image: url('../assets/img/beijing.png');
  }
  .myloan{
    width: 100%;
  }
  p{
    text-align: left;
    margin-left: 40px;
    font-size: 30px;
  }
  .timeline-list{
    .timeline-item-content{
      width: 100%;
    }
  }
</style>
