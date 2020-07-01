<template>
  <ul class="nav">
    <li>首页</li>
    <li>首页</li>
    <li>首页</li>
    <li>首页</li>
    <li>首页</li>
    <li>首页</li>
    <li><van-icon name="arrow-down" /></li>
  </ul>
</template>

<script>
export default {
  name: 'MyComponent',
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
  .nav{
    height: 40px;
    font-size: 16px;
    background: #ccc;
    // line-height: 40px;
    li{
      float: left;
      margin-top: 12px;
      margin-right:20px ;
    }
    li:nth-child(1){
      margin-left: 10px;
    }
    li:nth-child(7){
      margin-left: 10px;
      margin-right: 0;
    }
  }
</style>
