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
  var data = Qs.stringify(order);
  console.log(data);
  console.log("这是getOrder");
  return request({
    url: '/orders',
    method: 'put',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  })
}
