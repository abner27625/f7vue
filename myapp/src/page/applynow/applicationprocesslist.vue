<template>
    <div>
      <f7-list>
        <f7-list-item title="1.征信查询"></f7-list-item>
        <f7-list-item title="2.身份验证"></f7-list-item>
        <f7-list-item title="3.资料填写"></f7-list-item>
      </f7-list>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [],
        watch(){
          if(this.first === 1){

          }
        },
        data(){
          return {
            data:[{
              first:1, second:2, third:3
            }]
          }
        }

    }
</script>
<style scoped></style>
