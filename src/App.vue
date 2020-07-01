<template>
  <div class="App">
    <head-foot>
      <router-view></router-view>
      <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
    </head-foot>
  </div>
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
</style>
