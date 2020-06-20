import { login } from '@/api/login'
import { getUser } from '@/api/login'
import { updateUser } from '@/api/login'
const user = {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {

          commit('INCREMENT')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUser({commit}) {
      var username=localStorage.getItem("username");
      console.log('resopnsee', username);
      return new Promise((resolve, reject) => {
        console.log("suername0",username)
        getUser(username).then(response => {
          commit('INCREMENT')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    
    UpdateUser({commit},user) {
      return new Promise((resolve, reject) => {
        console.log("suername0",user)
        updateUser(user).then(response => {
          commit('INCREMENT')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    // 减1
    DECREMENT(state) {
      state.count--
    }
  }
}
export default user