import { getOrders } from '@/api/order'
import { getOrder } from '@/api/order'

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
        GetOrder({commit},orderId){
            console.log("进入GetOrder");
            return new Promise((resolve,reject) =>{
                console.log("进入promise");
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