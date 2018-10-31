<template>
	<div class="shoppingCart">
		<div class="top">
			<span>购物车</span>
			<div class="right">
				<span>编辑</span>
				<i class="iconfont icon-iconfontzhizuobiaozhun023110"></i>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		
	}
</script>

<style scoped>
	.top{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 2.7rem;
		border-bottom: 1px solid gainsboro;
	}
	.top>span{
		font-size: 1.1rem;
		font-weight: 550;
	}
	.top .right{
		position: absolute;
		right: .3rem;
		top: 0;
		font-size: 1.1rem;
	}
	.top .right span{
		padding-right: 1rem;
	}
	.top .right i{
		font-size: 1.3rem;
	}
</style>