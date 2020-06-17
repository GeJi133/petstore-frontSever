/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/views/account/login'
import main from '@/components/views/account/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
