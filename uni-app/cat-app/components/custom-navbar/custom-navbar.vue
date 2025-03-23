<script setup>
	import {
		ref
	} from 'vue'

	defineOptions({
		name: "CustomNavbar"
	})

	defineProps({
		title: {
			type: String,
			default: ''
		}
	})

	const SYSTEM_INFO = uni.getSystemInfoSync()
	const MENU_BUTTON = uni.getMenuButtonBoundingClientRect()

	const statusBarHeight = ref(SYSTEM_INFO.statusBarHeight)
	const titleBarHeight = ref((MENU_BUTTON.top - SYSTEM_INFO.statusBarHeight) * 2 + MENU_BUTTON.height)
</script>

<template>
	<view class="custom-navbar">
		<view class="navbar">
			<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
			<view class="title-bar" :style="{ height: titleBarHeight + 'px' }">
				<view class="title">{{ title }}</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<navigator class="text" url="/pages/search/search" open-type="reLaunch">搜素</navigator>
				</view>
			</view>
		</view>
		<view class="fill" :style="{ height: statusBarHeight +  titleBarHeight + 'px' }"></view>
	</view>
</template>


<style lang="scss" scoped>
	.custom-navbar {
		.navbar {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 10;
			width: 100%;
			// background-color: rgba(255, 255, 255, 0.1);
			// backdrop-filter: blur(8rpx);
			background:
				linear-gradient(to bottom, transparent 0%, #fff 400rpx),
				linear-gradient(to right, #beecd8 20%, #f4e2d8);

			.status-bar {}

			.title-bar {
				display: flex;
				align-items: center;
				padding: 0 30rpx;

				.title {
					font-weight: 700;
					color: #000;
				}

				.search {
					display: flex;
					align-items: center;
					width: 220rpx;
					height: 50rpx;
					margin-left: 30rpx;
					padding: 6rpx 12rpx;
					border: 1px solid #fff;
					border-radius: 60rpx;
					background-color: rgba(255, 255, 255, 0.4);

					.text {
						margin-left: 10rpx;
					}
				}

			}


		}
	}
</style>