<script setup>
	defineOptions({
		name: "CommonTitle"
	})

	defineProps({
		name: {
			type: String,
			default: ''
		}
	})
</script>

<template>
	<view class="common-title">
		<view class="name">{{ name }}</view>
		<view class="custom">
			<slot></slot>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.common-title {
		display: flex;
		justify-content: space-between;
		padding: 0 30rpx;

		.name {
			font-size: 40rpx;
		}
	}
</style>