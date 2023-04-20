<template>
	<view class="box">
		<view class="classify">
			<scroll-view scroll-x='true' class="scrollBox">
				<block v-for="(item,index) in data.classify" :key="index">
					<text class="a">{{item}}</text>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onBeforeMount
	} from 'vue'
	import {
		getTypeOneName
	} from '@/apis/api_method.js'
	let data = reactive({
		classify: []
	})
	let getClassifyNav = async () => {
		await getTypeOneName().then(res => {
			// console.log(res.data);
			data.classify = res.data
			console.log(data.classify);
		})
	}
	onBeforeMount(() => {
		getClassifyNav()
	})
</script>

<style lang="scss" scoped>
	.box {
		white-space: nowrap;
		width: 750rpx;
		color: white;
		background-color: tomato;

		.classify {
			width: 100vh;

			.scrollBox {
				font-size: 10rpx;
				width: 100vh;

				.a {
					width: 100vh;
					margin-left: 10rpx;
				}
			}
		}

	}
</style>