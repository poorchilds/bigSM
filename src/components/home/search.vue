<template>
  <div class='home'>
    <div class="serch">
      <div class="s-le">
        <img src="../../images/index/u6.png" alt="">
      </div>
      <div class="s-cen">
        <van-search
        class="ce-search"
        v-model="search"
        shape="round"
        background="#4fc08d"
        input-align="center"
        placeholder="请输入搜索关键词"
        />
      </div>
      <div class="s-ri" >
        <van-icon
        class="ri-icon"
         name="friends-o"
         size="32"
          color='#fff'/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: { },
  data () {
    return {
      search: '搜索'
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped lang='less'>
.home{
    position: relative;
    left:10px;
    margin-top:24px;
    width: 340px;
    background-color: pink;
    .serch{
      height: 50px;
      background-color: red;
      display: flex;
      .s-le{
        position: relative;
        flex:1;
        img{
          position: absolute;
          top: -3px;
          left: 5px;
          width: 54px;
          height: 54px;
          vertical-align: middle;
        }
      }
      .s-cen{
        flex:3;
        .ce-search{
          height: 50px;
          text-align: center;
        }
      }
      .s-ri{
        position: relative;
        padding-top:8px;
        flex:1;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
</style>
