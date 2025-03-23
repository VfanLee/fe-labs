<template>
  <view class="nav-bar">
    <view class="nav-bar__wrap">
      <view class="nav-bar-status" :style="{ height: `${statusBarHeight}px` }"></view>
      <view class="nav-bar-title" :style="{ height: `${titleBarHeight}px` }">
        <view class="logo">
          <image src="/static/iconfont.svg" mode="aspectFit"></image>
        </view>
      </view>
    </view>
    <view class="nav-bar-fill" :style="{ height: `${statusBarHeight + titleBarHeight}px` }"></view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getStatusBarHeight, getTitleBarHeight } from '@/utils/system.js';

defineOptions({
  name: 'navBar'
});

const statusBarHeight = getStatusBarHeight();
const titleBarHeight = getTitleBarHeight();
</script>

<style lang="scss" scoped>
.nav-bar {
  .nav-bar__wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #57bdbd;
  }
  .logo {
    width: 240rpx;
    height: 100%;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
