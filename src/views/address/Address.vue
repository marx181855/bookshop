<template>
  <div class="address-box">
    <NavBar>
      <template v-slot:default>地址管理</template>
    </NavBar>
    <div class="tip-text" v-show="list.length == 0">
      <p>还没有地址信息，去添加吧！</p>
    </div>
    <div class="address-item">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { useRouter } from 'vue-router'
import { onMounted, reactive, toRefs } from 'vue'
import { getAddressList } from 'network/address'
import { Toast } from 'vant'
export default {
  components: {
    NavBar
  },
  setup() {
    // const route = useRoute()
    const router = useRouter()
    const state = reactive({
      chosenAddressId: '1',
      list: []
    })
    onMounted(() => {
      Toast.loading('数据加载中...')
      getAddressList().then((res) => {
        Toast.clear()
        if (res.data.length === 0) {
          state.list = []
          return false
        }
        state.list = res.data.map(item => {
          return {
            id: item.id,
            name: item.name,
            tel: item.phone,
            address: `${item.province} ${item.city} ${item.county} ${item.address}`,
            isDefault: !!item.is_default
          }
        })
      })
    })

    const onAdd = () => {
      router.push({
        path: '/addressedit',
        query: {
          type: 'add'
        }
      })
    }
    const onEdit = (item) => {
      console.log(item)
      router.push({
        path: '/addressedit',
        query: { type: 'edit', addressId: item.id }
      })
    }
    const select = (item) => {
      router.push({ path: 'createorder', query: { addressId: item.id } })
    }

    return {
      ...toRefs(state),
      onAdd,
      onEdit,
      select
    }
  }
}
</script>

<style lang="scss">
.tip-text {
  position: fixed;
  top: 45px;
  bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.address-item {
  position: fixed;
  top: 45px;
  bottom: 100px;
  overflow: auto;
  background-color: #f7f8fa;
  .van-radio__icon {
    display: none;
  }
  .van-address-list__bottom {
    bottom: 50px;
    .van-address-list__add {
      background-color: var(--color-tint);
      border: 1px solid var(--color-tint);
    }
  }
}
</style>
