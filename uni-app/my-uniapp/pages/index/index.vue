<script setup>
const goNoticePage = () => {
  uni.navigateTo({
    url: '/pages/notice/notice'
  });
};

// const getBanner = async () => {
//   const res = await uni.request({
//     url: 'https://api.thecatapi.com/v1/images/search?limit=10',
//     method: 'GET'
//   });
//   console.log(res);
// };

// getBanner();
</script>

<template>
  <view class="home-layout page-bg">
    <custom-navbar title="首页"></custom-navbar>
    <!-- banner -->
    <view class="banner">
      <swiper indicator-dots indicator-color="rgba(0, 0, 0, 0.8)" indicator-active-color="rgba(255, 255, 255, 0.8)" autoplay circular>
        <swiper-item v-for="item of 3" :key="item">
          <image src="@/common/images/banner1.jpg" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>

    <!-- notice -->
    <view class="notice" @click="goNoticePage">
      <view class="notice-left">
        <uni-icons type="sound-filled" size="20"></uni-icons>
        <text>公告</text>
      </view>
      <view class="notice-center">
        <swiper vertical autoplay circular>
          <swiper-item v-for="item of 3" :key="item">
            <text>({{ item }}) 这是一串很长很长很长公很长很长的公告内容！</text>
          </swiper-item>
        </swiper>
      </view>
      <view class="notice-right">
        <uni-icons type="forward" size="20"></uni-icons>
      </view>
    </view>

    <!-- select -->
    <view class="select">
      <common-title name="每日推荐">
        <uni-icons type="calendar-filled" size="20"></uni-icons>
        <uni-dateformat :date="Date.now()" format="dd"></uni-dateformat>
      </common-title>
      <view class="content">
        <scroll-view scroll-x>
          <navigator class="box" v-for="item of 10" :key="item" url="/pages/preview/preview">
            <image src="@/common/images/select1.jpg" mode="aspectFill"></image>
          </navigator>
        </scroll-view>
      </view>
    </view>

    <!-- theme -->
    <view class="theme">
      <common-title name="专题精选">
        <text>更多</text>
        <uni-icons type="plusempty" size="10"></uni-icons>
      </common-title>
      <view class="content">
        <theme-item v-for="item of 8" :key="item"></theme-item>
        <theme-item more></theme-item>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.banner {
  width: 750rpx;
  padding: 30rpx 0;

  swiper {
    width: 750rpx;
    height: 340rpx;

    &-item {
      width: 750rpx;
      height: 340rpx;
      padding: 0 30rpx;

      image {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }
  }
}

.notice {
  display: flex;
  box-sizing: border-box;
  width: 690rpx;
  height: 80rpx;
  margin: 0 auto;
  border-radius: 80rpx;
  line-height: 80rpx;
  background-color: $uni-bg-color-grey;

  &-left {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    gap: 5rpx;
    width: 140rpx;
    font-weight: bold;
    color: $brand-theme-color;

    :deep(.uni-icons) {
      color: $brand-theme-color !important;
    }
  }

  &-center {
    flex: 1;

    swiper {
      height: 100%;

      &-item {
        color: $uni-text-color;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  &-right {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    width: 70rpx;
  }
}

.select {
  margin-top: 50rpx;

  :deep(.common-title) {
    .custom {
      display: flex;
      align-items: center;
      color: $brand-theme-color;

      .uni-icons {
        color: $brand-theme-color !important;
      }
    }
  }

  .content {
    width: 720rpx;
    margin-top: 30rpx;
    margin-left: auto;

    scroll-view {
      white-space: nowrap;

      .box {
        display: inline-flex;
        width: 200rpx;
        height: 430rpx;
        margin-right: 15rpx;

        &:last-child {
          margin-right: 30rpx;
        }

        image {
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
    }
  }
}

.theme {
  padding: 50rpx 0;

  :deep(.common-title) {
    .custom {
      display: flex;
      align-items: center;
      color: $uni-text-color-grey;
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
    margin-top: 30rpx;
    padding: 0 30rpx 0;
  }
}
</style>
