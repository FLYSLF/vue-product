<template>
	<div class="home">
		<TopSearch wid=80%>
			<span slot="left"><i class="iconfont icon-iconfontzhizuobiaozhun023110"></i></span>
			<span slot="right"><i class="iconfont icon-saoma"></i></span>
		</TopSearch>
		<Nav></Nav>
		<Swiper></Swiper>
	</div>
</template>

<script>
	import TopSearch from '@/components/TopSearch'
	import Nav from './children/Nav'
	import Swiper from './children/Swiper'
	
	export default {
		components:{
			TopSearch,
			Nav,
			Swiper
		}
	}
</script>

<style>
.topSearch{
	border-bottom: none!important;
	z-index: 999;
	background-color: #fff;
}
.swiper-box{
	margin-top: 4.7rem;
}
</style>