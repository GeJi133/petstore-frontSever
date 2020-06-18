/* eslint-disable */
import request from '@/utils/request'

import Qs from 'qs'
export function login (username, password) {
  console.log("这是login");

 var data = Qs.stringify({"username":username,"password":password});
 console.log(data);
  return request({
    url: '/accounts/login',
    method: 'post',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    data: data
  })
}


