<template>
	<view class="content">
		<view class="text-area">
			<text class="title">首页</text>
		</view>
	</view>
</template>

<script setup>
	import {
		homegood
	} from '../../apis/api_method.js'

	import {
		reactive,
		ref,
		onMounted
	} from "vue";

	let shopPage = ref(2)
	let shop = ref([])
	let getGoodList = () => {
		homegood().then(res => {
			console.log(res)
		})
	}
	onMounted(() => {
		getGoodList()
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>