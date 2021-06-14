import { createRouter, createWebHistory } from 'vue-router'
import { Notify } from 'vant'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category.vue'),
    meta: {
      title: '图书分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/Detail.vue'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: () => import('../views/shopcart/ShopCart.vue'),
    meta: {
      title: '购物车',
      isAuthRequired: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue'),
    meta: {
      title: '个人中心',
      isAuthRequired: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue'),
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/address/Address.vue'),
    meta: {
      title: '地址管理',
      isAuthRequired: true
    }
  },
  {
    path: '/addressedit',
    name: 'AddressEdit',
    component: () => import('../views/address/AddressEdit.vue'),
    meta: {
      title: '编辑地址',
      isAuthRequired: true
    }
  },
  {
    path: '/createorder',
    name: 'CreateOrder',
    component: () => import('../views/order/CreateOrder.vue'),
    meta: {
      title: '创建订单',
      isAuthRequired: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/Order.vue'),
    meta: {
      title: '订单界面',
      isAuthRequired: true
    }
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: () => import('../views/order/OrderDetail.vue'),
    meta: {
      title: '订单详情',
      isAuthRequired: true
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/profile/Account.vue'),
    meta: {
      title: '账户管理',
      isAuthRequired: true
    }
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../views/profile/Collect.vue'),
    meta: {
      title: '我的收藏',
      isAuthRequired: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/profile/About.vue'),
    meta: {
      title: '关于我们',
      isAuthRequired: true
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 如果没有登陆，在这里到Login

  if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
    Notify('您还没有登录，请先登录')
    return next('/login')
  } else {
    next()
  }
  document.title = to.meta.title
})
export default router
