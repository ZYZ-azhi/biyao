<template>
	<view class="box">
		<view class="h1">
			<text>畅销商品</text>
		</view>

		<scroll-view scroll-y="true" @scrolltolower="lowerBottom" scroll-left class="scrollBox">
			<block v-for="(item,index) in data.shop" :key="index">
				<view class="listBox">
					<image :src="item.imageUrl" mode="" class="img">
					</image>
					<text class="a">
						{{item.title}}
					</text>
					<br>
					<text style="color: indianred;" class="a">
						{{item.priceStr}}元
					</text>
					<br>
					<text style="color: red;" class="a">
						好评&nbsp;{{item.evaluate}}♥
					</text>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref,
		onMounted,
		onBeforeMount
	} from "vue";
	// 接口
	import {
		homegood,
		hotgood
	} from '@/apis/api_method.js'
	let data = reactive({
		shop: null,
		shopPage: 1
	})
	// 初始化商品
	let getGoodList = async () => {
		await homegood().then(res => {
			data.shop = res.data
			console.log(data.shop);
		})
	}
	onBeforeMount(() => {
		getGoodList()
	})
	// 请求更多
	let getHotGood = async () => {
		await hotgood(data.shopPage).then(res => {
			console.log(data.shopPage);
			console.log(res.data);
			res.data.forEach(item => {
				// console.log(item);
				data.shop.push(item)
			})
			data.shopPage++
		})
	}
	// 触底加载更多商品
	let lowerBottom = () => {
		console.log('触底加载', data.shopPage);
		setTimeout(() => {
			if (data.shopPage != 7) {
				getHotGood()
			} else {
				alert("没有更多了亲")
			}
		}, 200)


	}
</script>

<style lang="scss" scoped>
	.box {
		background-color: white;

		.h1 {
			width: 750rpx;
			margin-top: 20rpx;
			font-family: 'kaiti';
			font-size: 40rpx;
			color: firebrick;
			font-weight: 600;
			text-align: center;
		}

		.scrollBox {
			width: 750rpx;
			background-color: white;
			max-height: 100vh;

			.listBox {
				float: left;
				font-size: 10rpx;
				overflow: hidden;
				background-color: white;
				border-radius: 5rpx;
				width: 345rpx;
				margin-left: 21rpx;
				margin-top: 21rpx;
				height: 460rpx;
				box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.1);

				.a {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 200rpx;
					margin-top: 2rpx;
				}

				.img {
					width: 580rpx;
					margin-left: -120rpx;
					height: 340rpx;
				}
			}
		}
	}
</style>