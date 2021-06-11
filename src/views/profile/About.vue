<template>
  <NavBar>
    <template v-slot:default>关于我们</template>
  </NavBar>
  <div class="box">
    <div class="content">
      <p>还没想好要写什么....</p>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  top: 45px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
}
</style>
