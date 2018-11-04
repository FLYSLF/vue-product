<template>
	<div class="c_item">
		<div class="item_img" >
			<img v-lazy="json.image_url" :src="json.image_url" alt="">
		</div>
		<div class="c_item_content">
			<h3>{{json.name}}</h3>
			<p class="product_desc">{{json.product_desc}}</p>
			<span><i>￥</i>{{json.price}}<a class="iconfont" @click="addToCart()">&#xe643;</a></span>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["json","index"],
		methods:{
			addToCart(){
				this.$emit("change",this.json,this.index);
			}
		}
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
		padding: 0 15/12.5rem;
		h3 {
			font-size: 12/12.5rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #3a3a3a;
		}
		p {
			color: #b3a7a7;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		span {
			color: #ff5722;
			display: block;
			height: 30/12.5rem;
			line-height: 30/12.5rem;
			.iconfont {
				font-size: 20/12.5rem;
				color: #ccc;
				float: right;
			}
		}
	}
</style>