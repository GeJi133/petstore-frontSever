// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.config.productionTip = false

    //判断是否登录
    router.beforeEach(function (to, from, next) {
      if (to.meta.needLogin) {
        //通过查看state中的isLogin判断是否登录
        if (_this.$store.state.user.isLogin) {
          next(); //表示已经登录
        } else {
          //next可以传递一个路由对象作为参数 表示需要跳转到的页面
          next({
            name: "/login"
          });
        }
      } else {
        //表示不需要登录
        next(); //继续往后走
      }
    });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})


