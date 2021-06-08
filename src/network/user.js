import { request } from './request'

export function getUserDetailDetail() {
  return request({
    url: '/api/user'
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/api/user',
    method: 'PUT',
    data
  })
}
