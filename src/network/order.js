import { request } from './request'

// 创建订单
export function createOrder(params) {
  return request({
    url: '/api/orders',
    method: 'POST',
    params
  })
}

// 订单预览数据
export function getOrderPreview() {
  return request({
    url: '/api/orders/preview'
  })
}
// 获取支付二维码
export function payOrder(order, params) {
  return request({
    url: `/api/orders/${order}/pay`,
    params
  })
}
// 查询支付状态
export function getOrderStatus(order) {
  return request({
    url: `/api/orders/${order}/status`
  })
}
// 获取订单列表
export function getOrderList(params) {
  return request({
    url: '/api/orders',
    params
  })
}

// 订单详情
export function getOrderDetail(order) {
  return request({
    url: `/api/orders/${order}`,
    params: {
      include: 'user,orderDetails.goods'
    }
  })
}
// 确认收货
export function confirmOrder(order) {
  return request({
    url: `/api/orders/${order}/confirm`,
    method: 'PATCH'
  })
}

// 物流详情
export function getExpress(order) {
  return request({
    url: `/api/orders/${order}/express`
  })
}
