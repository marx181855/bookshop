<template>
  <div class="search-bar">
    <van-search
      v-model="searchKey"
      show-action
      label="书籍"
      placeholder="请输入搜索关键词"
      background="#42b983"
      input-align="center"
      shape="round"
      clearable
      @clear="onClear"
      clear-trigger="always"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
  <div id="mainbox">
    <div class="order-tab">
      <van-tabs v-model="active" @click="tabClick">
        <van-tab title="销量排序"></van-tab>
        <van-tab title="价格排序"></van-tab>
        <van-tab title="评论排序"></van-tab>
      </van-tabs>
    </div>

    <van-sidebar class="leftmenu better-scroll-wrapper" v-model="activeKey">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item
          v-for="item in categories"
          :key="item.id"
          :title="item.name"
          :name="item.name"
        >
          <van-sidebar-item
            v-for="sub in item.children"
            :key="sub.id"
            :title="sub.name"
            @click="getGoods(sub.id)"
          />
        </van-collapse-item>
      </van-collapse>
    </van-sidebar>

    <div class="goodslist better-scroll-wrapper">
      <div class="content better-scroll-content">
        <van-card
          @click="itemClick(item.id)"
          v-for="item in showGoods"
          :key="item.id"
          :num="item.comments_count"
          :tag="item.comments_count >= 0 ? '流行' : '标签'"
          :price="item.price"
          :desc="item.updated_at"
          :title="item.title"
          :thumb="item.cover_url"
          :lazy-load="true"
        />
      </div>
    </div>
    <div class="tip-text" v-show="!showGoods.length">
      <p>暂时没有商品哦.......</p>
    </div>
  </div>
  <BackTop @bTop="bTop" v-show="isShowBackTop"></BackTop>
</template>

<script>
import BackTop from 'components/common/backtop/BackTop'
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { getCategoryData, getCategoryGoods, searchProduct } from 'network/category'
import { useRouter } from 'vue-router'
import BScroll from 'better-scroll'
import { Toast } from 'vant'

export default {
  components: {
    BackTop
  },
  setup() {
    const router = useRouter()
    const active = ref(1)
    const activeKey = ref(0)
    const categories = ref([])
    const activeName = ref(0)
    const isShowBackTop = ref(false)
    // 当前的排序条件
    const currentOrderTab = ref('sales')
    // 当前的分类ID
    const currentCid = ref(0)

    // 数据模型
    const goods = reactive({
      sales: {
        page: 1,
        list: []
      },
      price: {
        page: 1,
        list: []
      },
      comments_count: {
        page: 1,
        list: []
      }
    })
    const debounce = (func, delay) => {
      let timer = null
      console.log('我是防抖动函数')
      return function () {
        let firstTriggle = !timer
        if (firstTriggle) {
          func()
        }
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          timer = null
        }, delay)
      }
    }
    const searchKey = ref('')
    const onSearch = debounce(() => {
      console.log('搜索中', searchKey.value)
      searchProduct(searchKey.value, currentOrderTab.value).then((res) => {
        console.log(res)
        goods[currentOrderTab.value].list = res.goods.data
      })
    }, 2000)
    const onClear = () => {
      console.log('清除内容')
    }

    let betterScrollGoodList = reactive({})
    const showGoods = computed(() => {
      console.log(goods[currentOrderTab.value].list)
      return goods[currentOrderTab.value].list
    })

    const initRequestData = () => {
      getCategoryGoods('sales', currentCid.value).then((res) => {
        goods.sales.list = res.goods.data
      })
      getCategoryGoods('price', currentCid.value).then((res) => {
        goods.price.list = res.goods.data
      })
      getCategoryGoods('comments_count', currentCid.value).then((res) => {
        goods.comments_count.list = res.goods.data
      })
      getCategoryData().then((res) => {
        categories.value = res.categories
      })
    }

    const initBetterScroll = () => {
      betterScrollGoodList = new BScroll(document.querySelector('.goodslist'), {
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
      betterScrollGoodList.on('scroll', (position) => {
        isShowBackTop.value = -position.y > 300
      })
      betterScrollGoodList.on('pullingUp', () => {
        console.log('上拉加载更多')

        const page = goods[currentOrderTab.value].page + 1

        getCategoryGoods(currentOrderTab.value, currentCid.value, page).then(
          (res) => {
            console.log(res.goods.data)
            goods[currentOrderTab.value].list.push(...res.goods.data)
            goods[currentOrderTab.value].page += 1
          }
        )
        // 完成上拉，等数据请求完成，要将新数据展示出来
        betterScrollGoodList.finishPullUp()
        console.log('当前类型:' + currentCid.value + ',当前页：' + page)

        // 重新计算高度
        betterScrollGoodList.refresh()
        console.log(
          'contentTheHeight：' + document.querySelector('.content').clientHeight
        )
      })
    }

    onMounted(() => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      initRequestData()
      initBetterScroll()
      Toast.clear()
    })

    // 排序选项卡
    const tabClick = (index) => {
      let order = ['sales', 'price', 'comments_count']
      currentOrderTab.value = order[index]
      getCategoryGoods(currentOrderTab.value, currentCid.value).then((res) => {
        goods.sales.list = res.goods.data

        nextTick(() => {
          // 重新计算高度
          betterScrollGoodList && betterScrollGoodList.refresh()
        })
      })
    }
    // 通过分类得到商品
    const getGoods = (cid) => {
      currentCid.value = cid
      console.log('当前的id：' + cid)
      getCategoryGoods('sales', currentCid.value).then((res) => {
        goods.sales.list = res.goods.data
      })
    }

    const bTop = () => {
      betterScrollGoodList.scrollTo(0, 0, 500)
    }

    return {
      onSearch,
      onClear,
      searchKey,
      debounce,
      activeKey,
      categories,
      activeName,
      active,
      tabClick,
      currentOrderTab,
      getGoods,
      currentCid,
      showGoods,
      isShowBackTop,
      bTop,
      itemClick: (id) => {
        router.push({ path: '/detail', query: { id } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#mainbox {
  .order-tab {
    position: fixed;
    z-index: 99;
    width: 100%;
    right: 0;
    padding-left: 130px;
    background: white;
  }
  .leftmenu {
    position: fixed;
    top: 89px;
    width: 130px;
    bottom: 50px;
    scrollbar-width: none;
  }
  .leftmenu::-webkit-scrollbar {
    display: none;
  }
  .goodslist {
    position: fixed;
    left: 130px;
    top: 89px;
    right: 10px;
    bottom: 50px;
    overflow: hidden;
    .content {
      padding-bottom: 50px;
    }
  }
  .tip-text {
    position: fixed;
    left: 130px;
    top: 89px;
    bottom: 50px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
