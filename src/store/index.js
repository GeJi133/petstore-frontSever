/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import order from './modules/order'
import catalog from './modules/catalog'


Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    // 存储token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    ChangeLogin (state, token) {
      state.token = token;
      console.log("存入token",token);
      localStorage.setItem('token', token);
    }
  },
    modules: {
        user,
        order,
        catalog
  }
})
export default store
