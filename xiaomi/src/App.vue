<template>
  <div id="app">
    <router-view/>
	  <Tabbar v-show="tabbarFlag" />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
//控制底部导航显示和隐藏
import store from "@/store/store.js";
export default {
  name: "App",
  components: {
    Tabbar
  },
  computed:{
    tabbarFlag(){
      return store.state.tabbarFlag;
    }
  },
  mounted(){
    store.state.tabbarFlag = true;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}
</style>
