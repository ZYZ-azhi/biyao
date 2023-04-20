<template>
	<classifyNav></classifyNav>
	<shopList></shopList>

</template>

<script setup>
	// 组件
	import shopList from './components/shopList.vue'
	import classifyNav from './components/classifyNav.vue'
	// 方法
	import {
		reactive,
		ref,
		onMounted
	} from "vue";
	// 接口
	import {
		homegood
	} from '../../apis/api_method.js'
</script>

<style lang="scss" scoped>

</style>