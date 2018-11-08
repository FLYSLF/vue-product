<template>
	<div class="Info">
		<h2>
			<i class="iconfont icon-icon-test"></i>
			{{newsj}}
			<i class="iconfont icon-icon-test"></i>
		</h2>
		<div class="info_list">
			<div v-for='item in info_list' class="newsj">
					<img v-lazy="item.img_url"  :src="item.img_url"/>
					<p>{{item.product_name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			newsj:"",
			info_list:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="less">
	h2{
		text-align: center;
		margin: 15px auto;
		i{
			color: red;
		}
	}
	.newsj{
		width: 30%;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: flex-start;
		margin-bottom: 20px;
		flex-wrap: wrap;
		img{
			width: 70%;
			height: 80%;
		}
		span{
			text-align: center;
			font-size: 12px;
		}
		p{
			width: 100%;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: 12px;
		}
	}
	.info_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		

	}
</style>
