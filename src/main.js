import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 引入路由组件
// 引入head-foot 组件
import headFoot from './views/head-foot.vue'
// 引入登录组件
import login from './views/login.vue'

import home from './views/home.vue'
// 引入vant插件
import { Button, Field, Icon, Search, Style } from 'vant'
import 'amfe-flexible'
Vue.use(Button)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Style)
Vue.use(VueRouter)
Vue.component('head-foot', headFoot)// 注册成全局的head-foot组件
const router = new VueRouter({ // 配置路由
  routes: [
    { path: '/login', component: login },
    { path: '/home', component: home }
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
