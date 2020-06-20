import request from '@/utils/request'

export function getOrders() {
  return request({
    url: '/orders/view',
    method: 'get',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}

export function getOrder(orderId) {

  return request({
    url: '/orders/view/' + orderId,
    method: 'get',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}
export function updateOrder(order) {

  return request({
    url: '/orders/view/'+order.orderId,
    method: 'patch',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON'
    },
    data:order
  })
}
