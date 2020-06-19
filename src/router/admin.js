import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/views/account/login'
// import main from '@/components/views/account/main'
Vue.use(Router)

export default new Router({
routes: [
    {
        path: '/',
        component: (resolve) => require(['../components/account1/login.vue'], resolve)//实现懒加载
      },
]

})
