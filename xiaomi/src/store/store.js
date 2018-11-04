import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
let store = new Vuex.Store({
	state:{
		tabbarFlag:true,
		detailsJson:""

	}
});
export default store;