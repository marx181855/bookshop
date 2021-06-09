import { createRouter, createWebHistory } from 'vue-router'
import { Notify } from 'vant'
import store from '../store'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Profile = () => import('../views/profile/Profile.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const Register = () => import('../views/auth/Register.vue')
const Login = () => import('../views/auth/Login.vue')
const Address = () => import('../views/profile/Address.vue')
const AddressEdit = () => import('../views/profile/AddressEdit.vue')
const CreateOrder = () => import('../views/order/CreateOrder.vue')
const Order = () => import('../views/order/Order.vue')
const OrderDetail = () => import('../views/order/OrderDetail.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '图书分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: '购物车',
      isAuthRequired: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '个人中心',
      isAuthRequired: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta: {
      title: '地址管理',
      isAuthRequired: true
    }
  },
  {
    path: '/addressedit',
    name: 'AddressEdit',
    component: AddressEdit,
    meta: {
      title: '编辑地址',
      isAuthRequired: true
    }
  },
  {
    path: '/createorder',
    name: 'CreateOrder',
    component: CreateOrder,
    meta: {
      title: '创建订单',
      isAuthRequired: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      title: '订单界面',
      isAuthRequired: true
    }
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: {
      title: '订单详情',
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
