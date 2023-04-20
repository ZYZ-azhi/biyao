// 暴露的方法
import axios from './axios.js'
import api from './api'
const baseUrl = 'http://47.113.230.184:9527/api'
// const baseUrl = '/api'
// 首页总览
export const getTypeOneName = () => {
	return axios({
		method: "GET",
		url: baseUrl + api.serchhot,
	})
}
// 搜索
export const searchgood = goodname => {
	return axios({
		method: "get",
		url: baseUrl + api.search + goodname,
	})
}
// // 热销初始商品
export const homegood = () => {
	// console.log(api.convenient);
	return axios({
		method: "GET",
		url: baseUrl + api.homegood,
	})
}
// // 热销商品
export const hotgood = page => {
	// console.log(api.hotgoods);
	return axios({
		method: "GET",
		url: baseUrl + api.hotgoods,
	})
}
// // 每日上新
export const newgood = () => {
	return axios({
		method: "get",
		url: baseUrl + api.newList
	})
}
// // 分类
// // 一级分类
export const getTypeOne = (a) => {
	return axios({
		method: "get",
		url: baseUrl + "/getTypeOne",
	})
}
// // 二级分类
export const twogoods = (a) => {
	return axios({
		method: "get",
		url: baseUrl + '/goodlist?type_one=' + a,
	})
}
// // 二级分类商品
export const onegood = (onename, twoname) => {
	// console.log(api.onegoods + onename + '&type_two=' + twoname);
	return axios({
		method: "get",
		url: baseUrl + api.onegoods + onename + '&type_two=' + twoname,
	})
}
// // 商品详情
export const gooddetail = id => {
	return axios({
		method: "get",
		url: baseUrl + api.detail + id,
	})
}
// // 同类商品
export const likethisgood = supper => {
	return axios({
		method: "get",
		url: baseUrl + api.likethis + supper,
	})
}
// // 商家信息
export const shopper = shopword => {
	return axios({
		method: "get",
		url: baseUrl + api.shoper + shopword
	})
}
// // 注册
export const registe = (a, b) => {
	return axios({
		method: 'get',
		url: baseUrl + api.register,
		params: {
			userName: a,
			password: b,
		}
	})
}
// // 登录
export const login = (a, b) => {
	return axios({
		method: 'get',
		url: baseUrl + api.login,
		params: {
			userName: a,
			password: b,
		}
	})
}
// // 购物车
// // 加入购物车
export const shopcaradd = (token, id) => {
	// console.log(api.shopadd + token + '&goodId=' + id);
	return axios({
		method: "get",
		url: baseUrl + api.shopadd + token + '&goodId=' + id
	})
}
// 减少
export const shopmove = (token, id) => {
	// console.log(api.shopremove + token + '&goodId=' + id);
	return axios({
		method: "get",
		url: baseUrl + api.shopremove + token + '&goodId=' + id
	})
}
// // 删除
export const shopdel = (token, id) => {
	// console.log(api.shopdel + token + '&goodId=' + id);
	return axios({
		method: "get",
		url: baseUrl + api.shopdel + token + '&goodId=' + id
	})
}
// // 购物车列表
export const shopcar = token => {
	// console.log(api.shopcar + token);
	return axios({
		method: "get",
		url: baseUrl + api.shopcar + token
	})
}