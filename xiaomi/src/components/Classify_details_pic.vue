<template>
	<div class="recoment">
		<div class="title">为你推荐</div>
		<div class="title_info" v-for="(item,index) in arr">
			<img v-lazy="item.image_url" />
			<p>{{item.name}}</p>
			<span>￥{{item.price}}<em>元</em></span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: []
			}
		},
		mounted() {
			this.axios.get("/api/Detailscbottom").then((res) => {

				this.arr = res.data.data.recommend_list
				console.log(this.arr);

			});
		}
		
	}
</script>

<style scoped lang="less">
	.recoment {
		width: 100%;
		background: #fafafa;
		.title {
			width: 100%;
			padding-top: 3rem;
			font-size: 2.2rem;
			text-align: left;
			text-indent: 2rem;
		}
		.title_info {
			margin-left: 1.2rem;
			margin-right: 1.2rem;
			box-sizing: border-box;
			width: 42%;
			height: 18rem;
			display: inline-block;
			margin-bottom: .5rem;
			img {
				width: 100%;
				height: 13rem;
				border-radius: 1rem;
				background: greenyellow !important;
			}
			p {
				font-size: 1.2rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				line-height: 2rem;
			}
			span {
				font-size: 1.2rem;
				line-height: 2rem;
				display: block;
				text-align: left;
				color: orange;
			}
		}
	}
</style>