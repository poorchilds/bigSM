<template>
  <div>
    <search></search>
    <navs></navs>
    <newone></newone>
  </div>
</template>

<script>
import search from '../components/home/search.vue'
import navs from '../components/home/nav.vue'
import newone from '../components/home/new-one.vue'
export default {
  name: 'home',
  props: { },
  data () {
    return {
    }
  },
  components: {
    search,
    navs,
    newone
  },
  created () { },
  mounted () { }
}
</script>

<style scoped lang='less'>

</style>
