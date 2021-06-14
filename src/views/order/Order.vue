<template>
  <NavBar>
    <template v-slot:default>订单界面</template>
  </NavBar>
  <div class="box">
    <div class="tag-bar">
      <van-tabs v-model:active="currentTab" @click="switchTab">
        <van-tab title="全部"></van-tab>
        <van-tab title="已下单"></van-tab>
        <van-tab title="已支付"></van-tab>
        <van-tab title="已发货"></van-tab>
        <van-tab title="已收货"></van-tab>
        <van-tab title="已过期"></van-tab>
      </van-tabs>
    </div>
    <div class="order-list">
      <orderItem
        :orderInfo="item"
        v-for="item in orderList"
        v-bind:key="item.id"
      ></orderItem>
    </div>
    <div class="tip-text" v-show="!orderList.length">
      <p>暂时还没有订单哦!!!</p>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { reactive, toRefs } from '@vue/reactivity'
import { getOrderList } from 'network/order'
import { onMounted } from '@vue/runtime-core'
import orderItem from './childComponents/orderItem.vue'
import { Toast } from 'vant'

export default {
  components: {
    NavBar,
    orderItem
  },
  setup() {
    const state = reactive({
      orderList: [],
      currentTab: 0
    })
    const initData = () => {
      getOrderList().then(res => {
        console.log(res)
        state.orderList = res.data
      })
    }
    onMounted(() => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      initData()
      Toast.clear()
    })
    const switchTab = () => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      console.log('🚀 ~ file: Order.vue ~ line 59 ~ switchTab ~ state.currentTab', state.currentTab)

      getOrderList(state.currentTab).then(res => {
        console.log(res)
        state.orderList = res.data
        console.log(state.orderList.length)
        Toast.clear()
      })
    }
    return {
      ...toRefs(state),
      switchTab
    }
  }
}
</script>

<style lang="scss">
.box {
  position: fixed;
  top: 45px;
  width: 100%;
  bottom: 50px;
  .order-list {
    position: fixed;
    width: 100%;
    bottom: 50px;
    top: 89px;
    overflow: auto;
  }
  .tip-text {
    position: fixed;
    width: 100%;
    top: 89px;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 改变组件样式
.van-tabs__wrap--scrollable .van-tab {
  padding: 0;
}
.van-tab--active {
  font-weight: bold;
}
</style>
