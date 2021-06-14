<template>
  <NavBar>
    <template v-slot:default>图书商城</template>
  </NavBar>

  <TabControl
    v-show="isTabFixed"
    @tabClick="tabClick"
    :titles="['畅销', '新书', '精选']"
    style="margin-top: 45px"
  ></TabControl>

  <div class="better-scroll-wrapper">
    <div class="better-scroll-content">
      <div ref="banref">
        <HomeSwiper :banners="banners"></HomeSwiper>
        <RecommendView :recommends="recommends"></RecommendView>
      </div>
      <TabControl
        class="tab-control"
        @tabClick="tabClick"
        :titles="['畅销', '新书', '精选']"
      ></TabControl>
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
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import BScroll from 'better-scroll'
import { Toast } from 'vant'

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
    const isTabFixed = ref(false)
    const isShowBackTop = ref(false)
    const banref = ref(null)
    const banners = ref([])
    const recommends = ref([])

    // 商品列表数据模型
    const goods = reactive({
      sales: { page: 1, list: [] },
      new: { page: 1, list: [] },
      recommend: { page: 1, list: [] }
    })
    let betterScroll = reactive({})
    const initRequestData = () => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
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
      Toast.clear()
    }

    const initBetterScroll = () => {
      betterScroll = new BScroll(document.querySelector('.better-scroll-wrapper'), {
        probeType: 3,
        click: true,
        pullUpLoad: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      })

      // 触发滚动事件
      betterScroll.on('scroll', (position) => {
        isShowBackTop.value = isTabFixed.value = -position.y > banref.value.offsetHeight
      })

      // 上拉加载数据，触发pullingUp
      betterScroll.on('pullingUp', () => {
        console.log('上拉加载更多')

        const page = goods[currentTypeTab.value].page + 1
        getHomeGoods(currentTypeTab.value, page).then((res) => {
          goods[currentTypeTab.value].list.push(...res.goods.data)
          goods[currentTypeTab.value].page += 1
        })

        // 完成上拉，等数据请求完成，要将新数据展示出来
        betterScroll.finishPullUp()
        // console.log('当前类型:' + currentTypeTab.value + ',当前页：' + page)
        // 重新计算高度
        betterScroll.refresh()
        // console.log(
        //   'contentTheHeight：' + document.querySelector('.content').clientHeight
        // )
      })
    }

    onMounted(() => {
      initRequestData()
      initBetterScroll()
    })
    const tabClick = (index) => {
      const types = ['sales', 'new', 'recommend']
      currentTypeTab.value = types[index]
      nextTick(() => {
        // 重新计算高度
        betterScroll && betterScroll.refresh()
      })
    }

    const currentTypeTab = ref('sales')
    const showGoods = computed(() => {
      return goods[currentTypeTab.value].list
    })
    const bTop = () => {
      betterScroll.scrollTo(0, 0, 500)
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

<style lang="scss" scoped>
.banners img {
  width: 100%;
  height: auto;
}

.better-scroll-wrapper {
  position: absolute;
  top: 45px;
  bottom: 50px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
</style>
