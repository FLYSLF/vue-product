<template>
	<div class="c_item">
		<div class="item_img">
			<img :src="json.imgSrc" alt="">
		</div>
		<div class="c_item_content">
			<h3>{{json.title}}</h3>
			<p class="comment">{{json.comment}}</p>
			<span><i>￥</i>{{json.price}}<a class="iconfont">&#xe643;</a></span>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["json"]
	}
</script>
<style lang="less">
	.c_item {
		line-height: 1.5;
		.item_img {
			box-sizing: border-box;
			text-align: center;
		}
	}
	.c_item_content {
		padding: 0 15px;
		h3 {
			font-size: 12px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #3a3a3a;
		}
		p {
			color: #b3a7a7;
		}
		span {
			color: #ff5722;
			display: block;
			height: 30px;
			line-height: 30px;
			.iconfont {
				font-size: 20px;
				color: #ccc;
				float: right;
			}
		}
	}
</style>