import request from '@/utils/request'

export function getOrders () {
  return request({
    url: '/orders/view',
    method: 'get',
  })
}

export function getOrder (orderId) {

    return request({
      url: '/orders/view/'+orderId,
      method: 'get',
    })
  }
  export function updateOrder (order) {
    var data = Qs.stringify(order);
    console.log(data);
    console.log("这是getOrder");
    return request({
      url: '/orders',
      method: 'put',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      data:data
    })
  }
