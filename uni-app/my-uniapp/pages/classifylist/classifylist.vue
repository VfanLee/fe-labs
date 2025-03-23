<script setup>
import { ref } from 'vue';
import { onLoad, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app';

const list = ref([]);
const isBottom = ref(false);

onLoad(() => {
  console.log('onLoad');
  setTimeout(() => {
    for (var i = 0; i < 12; i++) {
      list.value.push({});
    }
  }, 500);
});

onReachBottom(() => {
  console.log('onReachBottom');
  setTimeout(() => {
    if (isBottom.value) {
      return;
    }

    if (list.value.length >= 24) {
      for (var i = 0; i < 10; i++) {
        list.value.push({});
      }
      isBottom.value = true;
    } else {
      for (var i = 0; i < 12; i++) {
        list.value.push({});
      }
    }
  }, 500);
});

onPullDownRefresh(() => {
  console.log('onPullDownRefresh');
  list.value = [];
  setTimeout(function () {
    for (var i = 0; i < 12; i++) {
      list.value.push({});
    }
    uni.stopPullDownRefresh();
  }, 500);
});
</script>

<template>
  <view class="classify-list-layout">
    <view class="content">
      <navigator v-for="(item, _) of list" :key="_" class="item" url="">
        <image src="/common/images/content1.jpg" mode="aspectFill"></image>
      </navigator>
    </view>
    <view class="">{{ isBottom ? '到底啦！' : '加载中...' }}</view>
  </view>
</template>

<style lang="scss" scoped>
.classify-list-layout {
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10rpx;
    padding: 5rpx;

    .item {
      aspect-ratio: 9 / 20;

      image {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
