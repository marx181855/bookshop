<template>
  <NavBar>
    <template v-slot:default>分类页面</template>
  </NavBar>
  <div id="mainbox">
    <div class="order-tab">
      <van-tabs v-model="active" @click="tabClick">
        <van-tab title="销量排序"></van-tab>
        <van-tab title="价格排序"></van-tab>
        <van-tab title="评论排序"></van-tab>
      </van-tabs>
    </div>

    <van-sidebar class="leftmenu" v-model="activeKey">
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

    <div class="goodslist">
      <div class="content">
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
  </div>
  <BackTop @bTop="bTop" v-show="isShowBackTop"></BackTop>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BackTop from 'components/common/backtop/BackTop'
import { computed, nextTick, onMounted, reactive, ref, watchEffect } from 'vue'
import { getCategoryData, getCategoryGoods } from 'network/category'
import { useRouter } from 'vue-router'
import BScroll from 'better-scroll'

export default {
  components: {
    NavBar,
    BackTop
  },
  setup() {
    const router = useRouter()
    let active = ref(1)
    let activeKey = ref(0)
    let categories = ref([])
    let activeName = ref(0)
    let isShowBackTop = ref(false)
    // 当前的排序条件
    let currentOrder = ref('sales')
    // 当前的分类ID
    let currentCid = ref(0)

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

    let bscroll = reactive({})
    // let banners = ref([])
    const showGoods = computed(() => {
      return goods[currentOrder.value].list
    })

    const init = () => {
      getCategoryGoods('sales', currentCid.value).then((res) => {
        goods.sales.list = res.goods.data
      })
      getCategoryGoods('price', currentCid.value).then((res) => {
        goods.price.list = res.goods.data
      })
      getCategoryGoods('comments_count', currentCid.value).then((res) => {
        goods.comments_count.list = res.goods.data
      })
    }

    onMounted(() => {
      getCategoryData().then((res) => {
        categories.value = res.categories
      })

      init()

      // 创建BetterScroll对象
      bscroll = new BScroll(document.querySelector('.goodslist'), {
        probeType: 3,
        click: true,
        pullUpLoad: true
      })
      // 触发滚动事件
      bscroll.on('scroll', (position) => {
        isShowBackTop.value = -position.y > 300
      })
      bscroll.on('pullingUp', () => {
        console.log('上拉加载更多')

        const page = goods[currentOrder.value].page + 1

        getCategoryGoods(currentOrder.value, currentCid.value, page).then(
          (res) => {
            console.log(res.goods.data)
            goods[currentOrder.value].list.push(...res.goods.data)
            goods[currentOrder.value].page += 1
          }
        )
        // 完成上拉，等数据请求完成，要将新数据展示出来
        bscroll.finishPullUp()
        console.log('当前类型:' + currentCid.value + ',当前页：' + page)

        // 重新计算高度
        bscroll.refresh()
        console.log(
          'contentTheHeight：' + document.querySelector('.content').clientHeight
        )
      })
    })
    // 排序选项卡
    const tabClick = (index) => {
      let order = ['sales', 'price', 'comments_count']
      currentOrder.value = order[index]

      getCategoryGoods(currentOrder.value, currentCid.value).then((res) => {
        goods.sales.list = res.goods.data

        nextTick(() => {
          // 重新计算高度
          bscroll && bscroll.refresh()
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
    // 监听任何一个变量有变化就会触发
    watchEffect(() => {
      nextTick(() => {
        // 重新计算高度
        bscroll && bscroll.refresh()
      })
    })
    const bTop = () => {
      bscroll.scrollTo(0, 0, 500)
    }
    return {
      activeKey,
      categories,
      activeName,
      active,
      tabClick,
      currentOrder,
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
  margin-top: 45px;
  .order-tab {
    height: 50px;
    z-index: 9;
    position: fixed;
    top: 45px;
    right: 0px;
    left: 130px;
  }
  .leftmenu {
    position: fixed;
    top: 95px;
    left: 0px;
    width: 130px;
  }
  .goodslist {
    position: absolute;
    top: 100px;
    left: 130px;
    right: 0;
    padding: 10px;
    text-align: left !important;
    overflow: hidden;
    height: 100vh;
    .content {
    }
  }
}
.van-card__thumb {
  width: 68px !important;
}
@media screen and (min-width: 768px) {
  #mainbox .goodslist {
    height: 550px;
  }
  .leftmenu {
    height: 550px;
    overflow: hidden;
  }
}
</style>
