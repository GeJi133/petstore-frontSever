/* eslint-disable */
import request from '@/utils/request'

import Qs from 'qs'
export function getOrders () {
  console.log("这是getOrdes");
  return request({
    url: '/orders/view',
    method: 'get',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
  })
}
export function getOrder (orderId) {
    console.log("这是getOrder");
    return request({
      url: '/orders/'+orderId,
      method: 'get',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
    })
  }

  export function updateOrder (orderId) {
    console.log("这是getOrder");
    return request({
      url: '/orders/view/'+orderId,
      method: 'delete',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
    })
  }
