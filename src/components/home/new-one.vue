<template>
  <div class='new-one'>
    <div class="txt">
      <p>林志玲穿透视黑纱裙米兰看秀
腹部微隆显孕味</p>
      <span>火星时报</span>
      <span> 52跟帖</span>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: 'newo',
  props: { },
  data () {
    return { }
  },
  computed: { },
  created () { },
  mounted () { }
}
</script>

<style scoped lang='less'>
  .new-one{
    height: 100px;
    display: flex;
    .txt{
      flex:2;
      background-color: pink;
      p{
        font-size: 16px;
        display: inline;
      }
      span{
        font-size: 12px;
        display: block;
      }
    }
    .img{
      flex:1;
      background-color: blue;

    }
  }
</style>
