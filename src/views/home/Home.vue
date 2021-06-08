<template>
  <NavBar>
    <template v-slot:default>图书商城</template>
  </NavBar>

  <TabControl
    v-show="isTabFixed"
    @tabClick="tabClick"
    :titles="['畅销', '新书', '精选']"
    style="margin-top:45px"
  ></TabControl>

  <div class="wrapper">
    <div class="content">
      <div ref="banref">
        <HomeSwiper :banners="banners"></HomeSwiper>
        <RecommendView :recommends="recommends"></RecommendView>
      </div>
      <TabControl @tabClick="tabClick" :titles="['畅销', '新书', '精选']"></TabControl>
      <GoodList :goods="showGoods"></GoodList>
    </div>
  </div>
  <BackTop @bTop="bTop" v-show="isShowBackTop"></BackTop>
</template>

<script>
import HomeSwiper from './ChildComps/HomeSwiper.vue'
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './ChildComps/RecommendView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/common/backtop/BackTop'
import { getHomeAllData, getHomeGoods } from 'network/home'
import { computed, nextTick, onMounted, reactive, ref, watchEffect } from 'vue'
import BScroll from 'better-scroll'

export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodList,
    BackTop,
    HomeSwiper
  },
  setup() {
    let isTabFixed = ref(false)
    let isShowBackTop = ref(false)
    let banref = ref(null)
    const recommends = ref([])

    // 商品列表数据模型
    const goods = reactive({
      sales: { page: 1, list: [] },
      new: { page: 1, list: [] },
      recommend: { page: 1, list: [] }
    })
    let bscroll = reactive({})
    let banners = ref([])
    onMounted(() => {
      getHomeAllData().then((res) => {
        recommends.value = res.goods.data
        banners.value = res.slides
      })
      getHomeGoods('sales').then((res) => {
        goods.sales.list = res.goods.data
      })
      getHomeGoods('new').then((res) => {
        goods.new.list = res.goods.data
      })
      getHomeGoods('recommend').then((res) => {
        goods.recommend.list = res.goods.data
      })

      // 创建BetterScroll对象
      bscroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,
        click: true,
        pullUpLoad: true
      })

      // 触发滚动事件
      bscroll.on('scroll', (position) => {
        isShowBackTop.value = isTabFixed.value = -position.y > banref.value.offsetHeight
      })

      // 上拉加载数据，触发pullingUp
      bscroll.on('pullingUp', () => {
        console.log('上拉加载更多')

        const page = goods[currentType.value].page + 1
        getHomeGoods(currentType.value, page).then((res) => {
          goods[currentType.value].list.push(...res.goods.data)
          goods[currentType.value].page += 1
        })

        // 完成上拉，等数据请求完成，要将新数据展示出来
        bscroll.finishPullUp()

        // console.log('当前类型:' + currentType.value + ',当前页：' + page)

        // 重新计算高度
        bscroll.refresh()
        // console.log(
        //   'contentTheHeight：' + document.querySelector('.content').clientHeight
        // )
      })
    })
    const tabClick = (index) => {
      let types = ['sales', 'new', 'recommend']
      currentType.value = types[index]
      nextTick(() => {
        // 重新计算高度
        bscroll && bscroll.refresh()
      })
    }
    // 监听任何一个变量有变化就会触发
    watchEffect(() => {
      nextTick(() => {
        // 重新计算高度
        bscroll && bscroll.refresh()
      })
    })

    let currentType = ref('sales')
    const showGoods = computed(() => {
      return goods[currentType.value].list
    })
    const bTop = () => {
      bscroll.scrollTo(0, 0, 500)
    }
    return {
      recommends,
      tabClick,
      goods,
      showGoods,
      isTabFixed,
      banref,
      isShowBackTop,
      bTop,
      banners
    }
  }
}
</script>

<style>
.banners img {
  width: 100%;
  height: auto;
}

.wrapper {
  position: absolute;
  top: 45px;
  bottom: 50px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
.content {
}
</style>
