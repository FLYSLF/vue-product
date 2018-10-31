<template>
	<div class="tabber">
		<TabbarItem @transfer="getVal" txt="首页" mark="home" :sel="selected">
			<i slot="icon" class="iconfont icon-shouye"></i>
		</TabbarItem>
		<TabbarItem @transfer="getVal" txt="分类" mark="classify" :sel="selected">
			<i slot="icon" class="iconfont icon-fenlei"></i>
		</TabbarItem>
		<TabbarItem @transfer="getVal" txt="发现" mark="find" :sel="selected">
			<i slot="icon" class="iconfont icon-faxian"></i>
		</TabbarItem>
		<TabbarItem @transfer="getVal" txt="购物车" mark="shoppingCart" :sel="selected">
			<i slot="icon" class="iconfont icon-ziyuan"></i>
		</TabbarItem>
		<TabbarItem @transfer="getVal" txt="我的" mark="mine" :sel="selected">
			<i slot="icon" class="iconfont icon-me"></i>
		</TabbarItem>
	</div>
</template>

<script>
	import TabbarItem from '@/components/TabbarItem'
	export default {
		components:{
			TabbarItem
		},
		data(){
			return {
				selected:"home"
			}
		},
		methods:{
			getVal(val){
				this.selected = val;
			}
		}
	}
</script>

<style scoped>
	.tabber{
		height: 4rem;
		width: 100%;
		border-top: 1px solid gainsboro;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
		background-color: #fff;
	}
</style>