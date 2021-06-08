import { request } from './request'

export function getMycollection (data) {
  return request({
    url: '/api/collects',
    data
  })
}

export function collectAndCancel (data) {
  return request({
    url: `/api/collects/goods/${data}`
  })
}
