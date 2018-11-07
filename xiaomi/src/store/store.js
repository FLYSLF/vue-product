import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
let store = new Vuex.Store({
	state:{
		tabbarFlag:true,
		detailsJson:"",
		cartNum:0

	}
});
export default store;