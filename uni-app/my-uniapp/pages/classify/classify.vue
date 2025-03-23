<script setup>
	import {
		ref
	} from 'vue'

	const list = ref(12)
</script>

<template>
	<view class="classify-layout page-bg">
		<custom-navbar title="分类"></custom-navbar>
		<view class="classify">
			<theme-item v-for="item of 15" :key="item"></theme-item>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.classify {
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
</style>