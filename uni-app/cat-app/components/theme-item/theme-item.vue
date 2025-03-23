<script setup>
	defineOptions({
		name: 'ThemeItem'
	})

	defineProps({
		'more': {
			type: Boolean,
			default: false
		}
	})
</script>

<template>
	<view class="theme-item">
		<navigator v-if="!more" url="/pages/classifylist/classifylist" class="box">
			<image class="pic" src="@/common/images/content1.jpg" mode="aspectFill"></image>
			<view class="mask">明星猫咪</view>
			<view class="tab">3天前更新</view>
		</navigator>

		<navigator v-else url="/pages/classify/classify" open-type="reLaunch" class="box more">
			<image class="pic" src="@/common/images/content1.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
	</view>
</template>


<style lang="scss" scoped>
	.theme-item {
		.box {
			position: relative;
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;

			&.more {
				.mask {
					flex-direction: column;
					height: 100%;

					.text {
						font-size: 28rpx;
						color: #fff;
					}
				}
			}

			.pic {
				width: 100%;
				height: 100%;
			}

			.mask {
				position: absolute;
				bottom: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 70rpx;
				background-color: rgba(0, 0, 0, 0.1);
				font-size: 30rpx;
				font-weight: bold;
				backdrop-filter: blur(8px);
				color: #fff;
			}

			.tab {
				position: absolute;
				top: 0;
				left: 0;
				padding: 6rpx 14rpx;
				border-bottom-right-radius: 10rpx;
				background-color: rgba(250, 129, 90, 0.7);
				font-size: 22rpx;
				color: #fff;
				backdrop-filter: blur(8px);
				transform: scale(0.8);
				transform-origin: top left;
			}
		}
	}
</style>