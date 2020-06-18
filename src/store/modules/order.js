import { getOrders } from '@/api/order'
import { gerOrder } from '@/api/order'

const order = {
    state: () => ({
        count: 0
      }),
    actions: {
        GetOrders({commit}){
            return new Promise((resolve,reject)=>{
                getOrders().then(response => {
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GerOrder({commit},orderId){
            return new Promise((response,reject) =>{
                getOrder(orderId).then(response=>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    },
    mutations:{
        INCREMENT(state) {
          state.count++;
        },
        // 减1
        DECREMENT(state) {
          state.count--
        }
    }
}

export default order