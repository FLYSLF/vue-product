<template>
	<div class="headerWrap">
		<div class="seach-head">
			<span class="leftImg"><slot name="leftImg"></slot></span>
			<input type="text" placeholder="搜索商品"/>		
			<span class="rightImg">
					<slot name="rightImg"></slot>
			</span>
			
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.headerWrap{
		width: 100%;
		height: 60/2px;
		position: fixed;
		top: 0;
		z-index: 30;
		background: #fff;
	}
	.seach-head{
		width: 80%;
		height: 40/2px;
		border: 1px solid #939393;
		position: absolute;
		top: 10/2px;
		left: 80/2px;
		border-radius: 3px;
		input{
			/*position: absolute;*/
			width: 100%;
			height: 40/2px;
			border: none;
			outline: none;
			text-indent: 40/2px;
		}
		.leftImg img,.rightImg img{
			width: 30/2px;
			height: 30/2px;
			position: absolute;
		}
		
		.leftImg img{
			z-index: 10;
			left: 4/2px;
			top: 6/2px;
			
		}
		.rightImg img{
			right: -54/2px;
			top: 6/2px;

		}
	}
</style>