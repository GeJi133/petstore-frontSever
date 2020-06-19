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
      {
        path: '/main',
        component: (resolve) => require(['../components/catalog/editProduct.vue'], resolve),//实现懒加载
        meta: {
            requireAuth: true,  // 判断是否需要登录
          },
      },
    {
        path: "/editUser",
        component: (resolve) => require(['../components/account1/editAccount.vue'], resolve)//实现懒加载

    },
    {
        path: "/editPassword",
        component: (resolve) => require(['../components/account1/editPassword.vue'], resolve)//实现懒加载

    },
    {
        path: '/addCategory',
        component: (resolve) => require(['../components/catalog/addCategory.vue'], resolve)
    }, 
    {
        path: '/addItem',
        component: (resolve) => require(['../components/catalog/addItem.vue'], resolve)
    }, 
    {
        path: '/addProduct',
        component: (resolve) => require(['../components/catalog/addProduct.vue'], resolve)
    }, 
    {
        path: '/editItem',
        component: (resolve) => require(['../components/catalog/editItem.vue'], resolve)
    }, 
    {
        path: '/editProduct',
        component: (resolve) => require(['../components/catalog/main.vue'], resolve)
    }, 
    {
        path: '/manageItems',
        component: (resolve) => require(['../components/catalog/manageItems.vue'], resolve)
    }, 
    {
        path: '/manageCategory',
        component: (resolve) => require(['../components/catalog/manageCategory.vue'], resolve),
        meta: {
            requireAuth: true,  // 判断是否需要登录
          }
    }, 
    {
        path: '/manageProduct',
        component: (resolve) => require(['../components/catalog/manageProduct.vue'], resolve)
    }, 
    {
        path: '/viewItem',
        component: (resolve) => require(['../components/catalog/viewItem.vue'], resolve)
    }
    , 
    {
        path: '/orderList',
        component: (resolve) => require(['../components/order/orderList.vue'], resolve)
    }
    , 
    {
        path: '/editOrder',
        component: (resolve) => require(['../components/order/editOrder.vue'], resolve)
    }
    // {
    //     path: "/catalog",
    //     component: (resolve) => require(['../components/admin/editAccount.vue'], resolve),//实现懒加载,
    //     children: [
            
    //     ]
    // },
]
})
