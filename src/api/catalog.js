/* eslint-disable */
import request from '@/utils/request'

import Qs from 'qs'
export function getProducts(catId) {
  return request({
    url: '/catalogs/categories/' + catId + '/products',
    method: 'get',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}
export function newProduct(product) {
  console.log("这是product");
  console.log(product);
  var data = Qs.stringify(product);
  console.log(data);
  return request({
    url: '/catalogs/products',
    method: 'post',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  })
}
export function getCategorys() {
  console.log("这是getOrdes");
  return request({
    url: '/catalogs/categories',
    method: 'get',
    headers: {
      'token': localStorage.getItem('token'),
      // 'token': JSON.stringify(localStorage.getItem('token')),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}
export function getItems(proId) {
  console.log("这是getOrder");
  return request({
    url: '/catalogs/' + 'products/' + proId + '/items',
    method: 'get',
    headers: {
      'token': localStorage.getItem('token'),
       'Content-Type': 'application/x-www-form-urlencoded' },
  })
}
export function getItem(itemId) {
  console.log("这是getOrder");
  return request({
    url: '/catalogs/items/' + itemId,
    method: 'get',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}

export function updateItem(item) {
  var data = Qs.stringify(item);
  console.log(data);
  console.log("这是getOrder");
  return request({
    url: '/catalogs/items',
    method: 'put',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: data
  })
}

export function insertItem(item) {
  var data = Qs.stringify(item);
  console.log(data);
  console.log("这是getOrder");
  return request({
    url: '/catalogs/items',
    method: 'post',
    headers: {
      'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  })
}

export function deleteItem(item) {
  var data = Qs.stringify(item);
  console.log(data);
  console.log("这是getOrder");
  return request({
    url: '/catalogs/items',
    method: 'delete',
    headers: {
      'token': JSON.stringify(localStorage.getItem('token')),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  })
}

