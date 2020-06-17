/* eslint-disable */
import { login } from '@/api/login'

const user = {
    action: {
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    commit('')
                    resolve(response)
                }).catch(error => {
                    reject(error)
        })
            })
        }
        
  }
}
export default user
