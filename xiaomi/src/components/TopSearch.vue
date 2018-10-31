<template>
	<div class="topSearch">
		<slot name="left"></slot>
		<div class="search" :style="{width:wid}">
			<input type="text" placeholder="请输入..." />
			<i class="iconfont icon-sousuo"></i>
		</div>
		<slot name="right"></slot>
	</div>
</template>

<script>
	
	export default {
		props:["wid"]
	}
</script>

<style scoped>
	.topSearch{
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		top: 0;
		left: 0;
		padding: .5rem;
		border-bottom: 1px solid gainsboro;
	}
	.search{
		position: relative;
		float: left;
		height: 1.7rem;
		border-radius: .3rem;
		box-sizing: border-box;
		border: 1px solid gainsboro;
	}
	.search input{
		width: 100%;
		height: 100%;
		border-radius: .3rem;
		border: none;
		outline: none;
		text-indent: 1.6rem;
		
	}
	.search i{
		position: absolute;
		top: .3rem;
		left: .3rem;
		font-size: 1rem;
	}
	.topSearch span{
		float: left;
		padding-top: .2rem;
		width: 10%;
	}
	.topSearch span i{
		font-size: 1.3rem;
	}
</style>