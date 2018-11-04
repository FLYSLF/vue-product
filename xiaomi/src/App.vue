<template>
  <div id="app">
     <router-view v-on:tabbar_shows="tabbar_shows"/>
    	<Tabbar v-if="tabbar_show" ></Tabbar>
  </div>
</template>

<script>
	import Tabbar from '@/components/Tabbar'
export default {
  name: 'App',
  components:{
  	Tabbar
  },
	data(){
		return {
			tabbar_show:true
		}
	},methods:{
		tabbar_shows(show){
			this.tabbar_show = show
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}
</style>
