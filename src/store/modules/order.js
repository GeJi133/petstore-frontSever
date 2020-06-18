import { getOrders } from '@/api/order'
import {deleteOrder} from '@/api/order'
const order = {
    action: {
        getOrders({commit}){
            return new Promise((resolve,reject)=>{
                getOrders().then(response => {
                    commit('')
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        deleteOrder({commit},orderId){
            return new Promise((response,reject) =>{
                deleteOrder(orderId).then(response=>{
                    commit('')
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    }
}

export default order