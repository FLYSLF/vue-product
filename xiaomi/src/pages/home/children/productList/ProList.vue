<template>
	<div class="showProduct-list">
		<ul class="clearfix">
			<li v-for="item in list">
				<img v-lazy="item.src" />
				<div class="info">
					<div class="name">{{item.name}}</div>
					<div class="brief">{{item.brief}}</div>
					<div class="price">{{item.price}}
						<span>起</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			list:{
				dataType:Object,
				default:{}
			}
		}
	}
</script>

<style lang="less">
	img[lazy=loading]{
	   height: 100%;
	   margin: auto;
	   background: orange;
	}
	.showProduct-list{
		li{
			width: 49.5%;
			float: left;
			&:nth-child(even){
				float: right;
			}
			.info{
				padding: 1rem;
				text-align: left;
				line-height: 1.2rem;
				.name{
					font-size: 1rem;
				}
				.brief{
					color: #999;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.price{
					color:#ea625b; 
					font-size: .8rem;
					&:before{
						content: '￥';
					}
				}
			}
		}
	}
</style>