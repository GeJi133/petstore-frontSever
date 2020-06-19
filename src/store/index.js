/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import order from './modules/order'
import catalog from './modules/catalog'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false
  },

    modules: {
        user,
        order,
        catalog
  }
})
export default store
