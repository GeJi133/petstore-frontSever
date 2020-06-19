import Vue from 'vue'
import admin from './admin.vue'
import store from './store/index'
// import router from './router/admin.js'
Vue.config.productionTip = false
console.log("sdqws");
/* eslint-disable no-new */
new Vue({
  el: '#admin',
  router,
  store,
  render: h => h(admin)
})
// new Vue({
//   el: '#admin',
//   router,
//   components: { admin },
//   store,
//   template: '<Admin/>'
// })
