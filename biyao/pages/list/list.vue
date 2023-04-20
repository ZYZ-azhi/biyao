<template>
	<view class="box">
		<scroll-view scroll-y class="left" >
			<ul  v-for="item,i in arr"  key="i" @click="add(i,item)">
				 <li :class="num == i ? 'li' : '' ">{{item}}</li>
			</ul>
			
		</scroll-view>
		<view class="right">
			<view class="first-cateList-item">
				<view class="first-cateList-name-before">
					<image src="../../img/下载.png"></image>
				</view>
				<view class="escp first-cateList-name" style="font-size: 0.8rem;">{{top}}</view>
				<view class="first-cateList-name-after">
					<image src="../../img/下.png"></image>
				</view>
			</view>
			<view class="first-cateList-item1">
				<view class="escp first-cateList-name" style="font-size: 0.8rem;">{{top}}</view>
				<view class="more" style="font-size: 0.8rem;">更多
					<image src="../../img/更多.png" mode=""></image>
				</view>
			</view>
			<view class="iconfont">
				<view class="iconfont-box" v-for="e,i in arr1" key="i">
					<image :src="e.imageUrl" mode="aspectFill"></image>
					<view class="text">{{e.title}}</view>
				</view>
				
			</view>
		</view>
	</view>
	
</template>

<script setup>
	import {
		getTypeOne,
		twogoods,
		getTypeOneName,
		
	} from '../../apis/api_method.js'
	import {reactive, ref, onMounted,onBeforeUnmount,onBeforeMount} from "vue";
	let arr = ref([])
	let arr1 = ref([])
	let num = ref(0)
	let top = ref("个护")

	let getTypeOneNames = () => {
		getTypeOneName().then(res => {
            console.log(res)
			
		})
	}

	let getgetTypeOne = () => {
		getTypeOne().then(res => {
			arr.value = res.data
			
		})
	}
	//二级分类
	let gettwogoods = () => {
		twogoods(top.value).then(res => {
			console.log(res.data)
			arr1.value = res.data
		})
	}
	let add= (i,e) =>{
		num.value = i
		top.value = e
		console.log(top.value)
		gettwogoods()
	}

	onBeforeMount(() => {
		getgetTypeOne()
	    gettwogoods()
	
	})
</script>

<style scoped lang="scss">
	.box{
		.left{
			text-align: center;
			position: fixed;
			left: 0;
			top: 2.5rem;
			bottom: 0.99rem;
			z-index: 2;
			box-sizing: border-box;
			width: 6rem;
			overflow: hidden;
			background: #f7f7f7;	
			ul{
				padding: 1rem 0;
				.li{
					padding:0 0.1em;
					font-size: 15;
					color: rebeccapurple;

					border-left: 3px solid rebeccapurple;
				}
				li{
					padding:0 0.1em;
					font-size: 15;
					border-left: 3px solid #fff;
				}
			}

		}
		.right{
		         position: absolute;
		         left: 0;
		         top: 0;
		         z-index: 2;
		         box-sizing: border-box;
		         width: 100vh;
		         bottom: 0.99rem;
		         left: 6rem;
		         padding-bottom: 0.01rem;
				 background-color: #fff;
				 padding-left: 0.6rem;
				 overflow: hidden;
			.first-cateList-item{
				width: 500rpx;
				display: flex;
				height: 3rem;

				line-height: 3rem;	
				justify-content: center;
					   .first-cateList-name-before{
						   image{
							   width: 2rem;
							   height: 0.1rem;
							   vertical-align: middle;
							   margin-right: 0.5rem;
						   }

					       
					   }
						.first-cateList-name-after{
							image{
								width: 2rem;
								height: 0.1rem;
								vertical-align: middle;
								margin-left: 0.5rem;
							}
						
						}
				
			}
			.first-cateList-item1{
				width: 556rpx;
				display: flex;
				height: 3rem;
				line-height: 3rem;	
				justify-content: space-between;
				
				.more{
					padding-right: 2rem;
					image{
						width: 0.8rem;
						height:0.8rem;
					}
				}
				
			}
			.iconfont{
				display: flex;
				flex-wrap: wrap;
				width: 16rem;
			
				.iconfont-box{
					margin-right: 1rem;
					margin-bottom: 2rem;
					width: 4.6rem;
			
					image{
						width: 4.6rem;
						height:4.6rem;
					}
					.text{
						font-size: 0.6rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;

					}

				}
				.iconfont-box:nth-child(3n){
					margin-right: 0rem;
				}
			}
			
		}
		
	}

</style>