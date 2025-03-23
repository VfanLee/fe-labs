<script setup>
	const handleContact = () => {
		uni.makePhoneCall({
			phoneNumber: "114",
		})
	}
</script>

<template>
	<view class="user-layout page-bg">
		<custom-navbar title="我的"></custom-navbar>
		<view class="user-info">
			<view class="avatar">
				<image src="/static/avatar.png" mode="aspectFill"></image>
			</view>
			<view class="nickname">192.168.1.1</view>
			<view class="address">来自于：湖北武汉</view>
		</view>

		<view class="section">
			<view class="list">
				<!-- 我的下载 -->
				<navigator url="/pages/classifylist/classifylist" class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">12</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</navigator>
				<!-- 我的评分 -->
				<navigator url="/pages/classifylist/classifylist" class="row">
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">
						<view class="text">12</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</navigator>
				<!-- 联系客服 -->
				<view class="row">
					<view class="left">
						<uni-icons type="contact" size="20"></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<!-- #ifdef MP -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<button @click="handleContact">拨打电话</button>
					<!-- #endif -->
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>

		<view class="section">
			<view class="list">
				<!-- 订阅更新 -->
				<view class="row">
					<view class="left">
						<uni-icons type="flag-filled" size="20"></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
				<!-- 常见问题 -->
				<view class="row">
					<view class="left">
						<uni-icons type="help-filled" size="20"></uni-icons>
						<view class="text">常见问题</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.user-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50rpx 0;

		.avatar {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nickname {
			font-size: 44rpx;
			padding: 20rpx 0;
		}

		.address {
			font-size: 28rpx;
			color: $uni-text-color-grey;
		}
	}

	.section {
		width: 690rpx;
		margin: 50rpx auto;
		border-radius: 10rpx;
		border: 1px solid #eee;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

		.row {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			height: 100rpx;
			border-bottom: 1px solid #eee;
			background-color: #fff;

			&:last-child {
				border-bottom: none;
			}

			.left {
				display: flex;

				.text {
					padding-left: 20rpx;
				}

				:deep(.uni-icons) {
					color: $brand-theme-color !important;
				}
			}

			.right {
				display: flex;

				.text {
					padding-right: 10rpx;
					font-size: 28rpx;
					color: #aaa;
				}
			}

			button {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				opacity: 0;
			}
		}
	}
</style>