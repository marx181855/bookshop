<template>
  <div class="backTop" @click="backtop">

  </div>
</template>

<script>
export default {
  setup (props, { emit }) {
    return {
      backtop: () => {
        emit('bTop')
      }
    }
  }
}
</script>

<style>
.backTop{
  width: 35px;
  height: 35px;
  position :fixed;
  bottom: 80px;
  right:30px;
  z-index: 20;
  box-shadow: 3px 3px 3px #888888;
  border-radius: 50%;
  background: #fcfcfc url('~assets/images/backToTop.png') no-repeat center center;
  background-size: 35px 35px;
}
</style>
