/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import order from './modules/order'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        order,
  }
})
export default store
