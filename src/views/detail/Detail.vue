<template>
  <NavBar>
    <template v-slot:default>商品详情：{{ id }}</template>
  </NavBar>
  <div class="box">
    <van-image
      width="375"
      fit="contain"
      :src="detail.cover_url"
      lazy-load
      height="375"
    />
    <van-card
      style="text-align: left"
      :num="detail.stock"
      :price="detail.price + '.00'"
      :desc="detail.description"
      :title="detail.title"
    >
      <template #tags>
        <van-tag plain type="danger">新书</van-tag>
        <van-tag plain type="danger">
          {{ detail.is_recommend ? "推荐" : "不推荐" }}
        </van-tag>
      </template>
      <template #footer>
        <van-action-bar>
          <van-action-bar-icon icon="cart-o" text="购物车" to="/shopcart" />
          <van-action-bar-icon
            :icon="collectIcon.icon"
            :text="collectIcon.text"
            color="#ff5000"
            @click="handleCollect"
          />
          <van-action-bar-button
            type="warning"
            text="加入购物车"
            @click="handleAddCart"
          />
          <van-action-bar-button type="danger" text="立即购买" @click="goToCart" />
        </van-action-bar>
      </template>
    </van-card>
    <van-tabs v-model="active">
      <van-tab title="概述">
        <div class="content" v-html="detail.details"></div>
      </van-tab>
      <van-tab title="热评">
        <div v-if="detail.comments.length != 0">
          <div v-for="item in detail.comments" :key="item"></div>
        </div>
        <div v-else>
          暂时没有评论
        </div>
      </van-tab>
      <van-tab title="相关图书">
        <GoodList :goods="like_goods"></GoodList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import GoodList from 'components/content/goods/GoodList'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, onMounted, reactive, toRefs } from 'vue'
import { getDetail } from 'network/detail'
import { addCart } from 'network/cart'
import { collectAndCancel } from 'network/collect'
import { Toast } from 'vant'

export default {
  components: {
    NavBar,
    GoodList
  },
  setup() {
    const store = useStore()
    let active = ref(0)
    const route = useRoute()
    const router = useRouter()
    let book = reactive({
      detail: {},
      like_goods: []
    })
    let collectIcon = reactive({
      icon: '',
      text: ''
    })
    let id = ref(0)
    onMounted(() => {
      id.value = route.query.id
      getDetail(id.value).then((res) => {
        book.detail = res.goods
        book.like_goods = res.like_goods
        if (res.goods.is_collect) {
          collectIcon.icon = 'star'
          collectIcon.text = '已收藏'
        } else {
          collectIcon.icon = 'star-o'
          collectIcon.text = '收藏'
        }
        console.log(res)
      })
    })
    // 收藏
    const handleCollect = () => {
      collectAndCancel(id.value).then(res => {
        if (res.status === 201) {
          Toast.success('收藏成功')
          collectIcon.icon = 'star'
          collectIcon.text = '已收藏'
        } else if (res.status === 204) {
          Toast.success('取消收藏成功')
          collectIcon.icon = 'star-o'
        }
      })
    }
    // 添加购物车
    const handleAddCart = () => {
      addCart({
        goods_id: book.detail.id,
        num: 1
      }).then((res) => {
        if (res.status === 204 || res.status === 201) {
          Toast.success('添加成功')
          // 设置store中 cartCount
          store.dispatch('updateCart')
        }
      })
    }
    // 立即购买
    const goToCart = () => {
      console.log(book.detail.id)
      addCart({
        goods_id: book.detail.id,
        num: 1
      }).then((res) => {
        if (res.status === 204 || res.status === 201) {
          Toast.success('添加成功，显示购物车页面')
          // 设置store中 cartCount
          store.dispatch('updateCart')
          router.push({ path: '/shopcart' })
        }
      })
    }
    return {
      id,
      ...toRefs(book),
      active,
      handleAddCart,
      goToCart,
      collectIcon,
      handleCollect
    }
  }
}
</script>

<style lang="scss">
.box {
  overflow: auto;
  position: fixed;
  top: 45px;
  bottom: 50px;
  .van-image {
    width: 375px;
    height: 375px;
  }
  .content {
    padding: 10px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .van-action-bar {
    position: relative;
  }
}
</style>
