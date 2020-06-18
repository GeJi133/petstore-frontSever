import { getProducts } from '@/api/catalog'
import { getItems } from '@/api/catalog'
import { updateItem } from '@/api/catalog'
import { insertItem } from '@/api/catalog'
import { deleteItem } from '@/api/catalog'
import { getCategorys } from '@/api/catalog'
import { newProduct } from '@/api/catalog'

const order = {

    actions: {
        GetProducts({commit},categoryId){
            return new Promise((resolve,reject)=>{
                getProducts(categoryId).then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
        GetItems({commit},proId){
            return new Promise((resolve,reject)=>{
                getItems(proId).then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
        GetItem({commit},itemId){
            return new Promise((resolve,reject)=>{
                getItem(itemId).then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
        UpdateItem({commit},item){
            return new Promise((resolve,reject)=>{
                updateItem(item).then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
        InsertItem({commit},item){
            return new Promise((resolve,reject)=>{
                insertItem(item).then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
        DeleteItem({commit},item){
            return new Promise((resolve,reject)=>{
                deleteItem(item).then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
        InsertItem({commit},item){
            return new Promise((resolve,reject)=>{
                insertItem(item).then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
        GetCategorys({commit}){
            return new Promise((resolve,reject)=>{
                getCategorys().then(response =>{
                    commit('INCREMENT')
                    resolve(response)
                }).catch(error =>{
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