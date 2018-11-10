import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
let store = new Vuex.Store({
	state:{
		//底部导航显示隐藏
		tabbarFlag:true,
		//详情数据
		detailsJson:"",
		//购物车总数
		cartNum:2,
		cartFoodsList:[
			{
				flag: true,
				name: "小米MIX 3 8GB+256G",
				color: "流沙金",
				colorList: ["黑色", "白色", "红色", "蓝色", "流沙金"],
				image_url: require("../assets/img/hongmi6.jpg"),
				price: 749,
				action:{
					path:1
				},
				sum: 1
			  },
			  {
				flag: true,
				name: "小米手环3 NFC版",
				color: "黑色",
				colorList: ["黑色", "白色", "红色", "蓝色", "流沙金"],
				image_url: require("../assets/img/shouhuang3.png"),
				price: 199,
				action:{
					path:2
				},
				sum: 1
			  }
		]

	}
});
export default store;