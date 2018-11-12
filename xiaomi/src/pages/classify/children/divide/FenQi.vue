<template>
	<div>
	
	<div class="fenqi">
		<div class="first_item">
			<div>
				<span>1227.25X3期</span>
				<p>手续费27.59元/期，费率2.3%</p>
			</div>
			<div class="circle">
				<i class="iconfont icon-yuan"></i>
			</div>
		</div>
		<div class="first_item">
			<div>
				<span>1227.25X3期</span>
				<p>手续费27.59元/期，费率2.3%</p>
			</div>
			<div class="circle">
				<i class="iconfont icon-yuan"></i>
			</div>
		</div>
		<div class="first_item">
			<div>
				<span>1227.25X3期</span>
				<p>手续费27.59元/期，费率2.3%</p>
			</div>
			<div class="circle">
				<i class="iconfont icon-yuan"></i>
			</div>
		</div>
	</div>
	<div class="open">
		 16点开售
	</div>
	</div>
</template>

<script>
	
</script>

<style lang="less">
	.first_item{
		height: 6rem;
		border-bottom: 5/75rem solid gainsboro;
		
		div{
			text-align: left;
		    line-height: 1.8rem;
		    height: 1.8rem;
		    margin-top: 2rem;
			color: black;
			float: left;
			display: inline-block;

		}
		.circle{
			display: inline-block;
			float: right;
			font-size: 1.2rem;
			color: white;
			font-size: .7rem;
			border:5/75rem solid gray;
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
			position: relative;
			text-align: center;
			i{
				position: absolute;
				top: -.134rem;
				left: 0.105rem;
			}
		}
	}
	.open{
		width: 100%;
		height: 4.3rem;
		line-height: 4.3rem;
		font-size: 1.5rem;
		color: white;
		background: orangered;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>