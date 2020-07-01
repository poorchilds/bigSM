<template>
  <div class='main'>
    <div class="head"></div>
    <slot></slot>
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  name: 'head-foot',
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
.main{
    position: relative;
  }
  .head{
    position: fixed;
    top: 0;
    z-index: 99999;
    width: 100%;
    height: 24px;
    background-color: rgba(117, 117, 117, 1);
  }
  .foot{
    width: 100%;
    height: 48px;
    position: fixed;
    z-index: 99999;

    bottom: 0;
    background-color: rgba(0, 0, 0, 1);
  }
</style>
