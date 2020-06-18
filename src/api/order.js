import request from '@/utils/request'
export function getOrders () {
  return request({
    url: '/orders/',
    method: 'get',
  })
}

export function deleteOrder () {
    return request({
      url: '/orders/',
      method: 'get',
    })
  }
