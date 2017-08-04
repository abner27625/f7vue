<template>
    <div>
        <div id="disk"></div>
        <div id="start"><img src="../../assets/img/start.png" @click="test"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [],
        methods:{
          test(){
            $(function () {
              $("#startbtn").rotate({
                bind: {
                  click: function () {
                    var a = Math.floor(Math.random() * 360);
                    $(this).rotate({
                      duration: 3000,
                      angle: 0,
                      animateTo: 1440 + a,
                      easing: $.easing.easeOutSine,
                      callback: function () {
                        alert('中奖了！');
                      }
                    });
                  }
                }
              });
            });
          }
        }
    }
</script>
<style scoped>
  #disk{
    width: 417px;
    height: 417px;
    background-image: url('../../assets/img/disk.jpg');
  }
  #start{
    width: 163px;
    height: 320px;
    position: absolute;
    top: 46px;
    left: 130px;
  }
  #start img {
    cursor: pointer
  }
</style>
