import { request } from './request'

// 省市县数据
export function getAreaData(pid = 0) {
  return request({
    url: '/api/city?pid=' + pid
  })
}
// 添加地址
export function addAddress(params) {
  return request({
    url: '/api/address',
    method: 'POST',
    params
  })
}
// 编辑地址
export function editAddress(id, params) {
  return request({
    url: `/api/address/${id}`,
    method: 'PUT',
    params
  })
}
// 删除地址
export function deleteAddress(params) {
  return request({
    url: `/api/address/${params}`,
    method: 'DELETE'
  })
}
// 地址列表
export function getAddressList() {
  return request({
    url: '/api/address'
  })
}
// 地址详情
export function getAddressDetail(id) {
  return request({
    url: `/api/address/${id}`
  })
}
