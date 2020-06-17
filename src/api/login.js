import request from '@/utils/request'
export function login (username, password) {
  return request({
    url: '/users/local',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
