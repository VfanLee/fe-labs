<script setup>
import { ref } from 'vue';

const maskState = ref(true);
const maskChange = () => {
  maskState.value = !maskState.value;
};

const goBack = () => {
  uni.navigateBack();
};

const infoPopupRef = ref(null);
const openInfoPopup = (p) => {
  p.open();
};
const closeInfoPopup = (p) => {
  p.close();
};

const starPopupRef = ref(null);
const openStarPopup = (p) => {
  p.open();
};
const closeStarPopup = (p) => {
  p.close();
};

const rate = ref(0);
const submitRate = (e) => {
  starPopupRef.value.close();
};
</script>

<template>
  <view class="preview-layout">
    <swiper circular>
      <swiper-item v-for="item of 3" :key="item">
        <image src="/common/images/content1.jpg" mode="aspectFill" @click="maskChange"></image>
      </swiper-item>
    </swiper>

    <view class="mask" v-show="maskState" @click="maskChange">
      <view class="go-back" @click="goBack">
        <uni-icons type="back" color="#fff" size="20"></uni-icons>
      </view>
      <view class="count">1 / 12</view>
      <view class="time">
        <uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
      </view>
      <view class="date">
        <uni-dateformat :date="Date.now()" format="yyyy/MM/dd"></uni-dateformat>
      </view>
      <view class="footer">
        <view class="box" @click.prevent="openInfoPopup(infoPopupRef)">
          <uni-icons type="info" size="28"></uni-icons>
          <view class="text">信息</view>
        </view>
        <view class="box" @click.prevent="openStarPopup(starPopupRef)">
          <uni-icons type="star" size="28"></uni-icons>
          <view class="text">5分</view>
        </view>
        <view class="box">
          <uni-icons type="download" size="28"></uni-icons>
          <view class="text">下载</view>
        </view>
      </view>
    </view>

    <uni-popup ref="infoPopupRef" class="info-popup" type="bottom">
      <view class="popup-content">
        <view class="popup-header">
          <view></view>
          <view class="title">壁纸信息</view>
          <view class="close">
            <uni-icons type="closeempty" size="18" color="#999" @click="closeInfoPopup(infoPopupRef)"></uni-icons>
          </view>
        </view>
        <scroll-view scroll-y>
          <view class="content">
            <view class="row">
              <view class="label">壁纸 ID：</view>
              <text class="value" user-select>2537146531866624</text>
            </view>
            <view class="row">
              <view class="label">发布者：</view>
              <text class="value" user-select>Vfan Lee</text>
            </view>
            <view class="row">
              <view class="label">评分：</view>
              <uni-rate :touchable="false" :value="5" />
            </view>
            <view class="row">
              <view class="label">摘要：</view>
              <text class="value" user-select>这是一串很长很长很长很长很长很长的内容。</text>
            </view>
            <view class="row">
              <view class="label">标签：</view>
              <view class="tags">
                <uni-tag text="萌宠" inverted type="success" />
                <uni-tag text="喵咪" inverted type="success" />
              </view>
            </view>
            <view class="copyright">
              声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱513894357@qq.com，管理将删除侵权壁纸，维护您的权益。
            </view>
          </view>
        </scroll-view>
      </view>
    </uni-popup>

    <uni-popup ref="starPopupRef" class="start-popup" :is-mask-click="false">
      <view class="popup-content">
        <view class="popup-header">
          <view></view>
          <view class="title">壁纸评分</view>
          <view class="close">
            <uni-icons type="closeempty" size="18" color="#999"></uni-icons>
          </view>
        </view>
        <view class="popup-body">
          <uni-rate v-model="rate" allow-half />
        </view>
        <view class="popup-footer">
          <button size="mini" plain :disabled="!rate" @click="submitRate">确认评分</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<style lang="scss" scoped>
.preview-layout {
  position: relative;
  width: 100%;
  height: 100vh;

  swiper {
    width: 100%;
    height: 100%;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;

    & > view {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: fit-content;
      color: #fff;
    }

    .go-back {
      top: 0;
      left: 30rpx;
      width: 38rpx;
      height: 38rpx;
      margin-left: 0;
      border-radius: 38rpx;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8rpx);
    }

    .count {
      top: 10vh;
      padding: 8rpx 28rpx;
      background-color: rgba(0, 0, 0, 0.3);
      font-size: 28rpx;
      border-radius: 60rpx;
      backdrop-filter: blur(8rpx);
    }

    .time {
      top: calc(10vh + 80rpx);
      font-size: 140rpx;
      font-weight: 100;
      line-height: 1em;
      text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
    }

    .date {
      top: calc(10vh + 230rpx);
      font-size: 34rpx;
      text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
    }

    .footer {
      bottom: 10vh;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 20rpx;
      width: 65vw;
      height: 120rpx;
      border-radius: 120rpx;
      background-color: rgba(255, 255, 255, 0.8);
      color: #333;
      box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(8rpx);

      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rpx 10rpx;

        .text {
          font-size: 26rpx;
        }
      }
    }
  }

  .info-popup {
    .popup-content {
      background-color: #fff;
      padding: 30rpx;
      border-radius: 30rpx 30rpx 0 0;
      overflow: hidden;

      .popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .close {
          padding: 6rpx;
        }
      }

      scroll-view {
        max-height: 60vh;
      }

      .content {
        .row {
          display: flex;
          padding: 16rpx 0;
          font-size: 32rpx;
          line-height: 1.7em;

          .label {
            width: 140rpx;
            text-align: right;
            color: $text-font-color-3;
            font-size: 30rpx;
          }

          .value {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10rpx;
          }
        }

        .copyright {
          margin: 20rpx 0;
          padding: 20rpx;
          border-radius: 10rpx;
          background-color: #f6f6f6;
          line-height: 1.6em;
          color: #666;
        }
      }
    }
  }

  .start-popup {
    .popup-content {
      width: 60vw;
      padding: 30rpx;
      border-radius: 30rpx;
      background-color: #fff;
      overflow: hidden;
    }

    .popup-header {
      display: flex;
      justify-content: space-between;
    }

    .popup-body {
      display: flex;
      justify-content: center;
      padding: 30rpx 0;
    }

    .popup-footer {
      display: flex;
      justify-content: center;
      padding: 10rpx 0;
    }
  }
}
</style>
