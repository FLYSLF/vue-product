<template>
	<div class="recoment">
		<Banner>
			<div slot="item" class="swiper-slide">
	        	<img src="static/images/64837c60-1ec4-c71a-f6d2-9026845713fd!720x360.jpg" />
	        </div>
	        <div slot="item" class="swiper-slide">
	        	<img src="static/images/2c154bba-bf35-acbe-919f-e448a51c624d!720x360.jpg" />
	        </div>
	        <div slot="item" class="swiper-slide">
	        	<img src="static/images/5faa4415-42f6-3f02-6554-7dce6ffa5302!720x360.jpg" />
	        </div>
		</Banner>
		<div class="list m12">
			<ul class="clearfix">
				<li class="list-item fl" v-for="item in listItem">
					<img :src="item"/>
				</li>
			</ul>
		</div>
		<!--产品展示开始-->
			<div class="showProduct1 clearfix m12">
				<div class="left fl">
					<img src="static/images/f79bb07f-eace-2126-0a5c-546fb7a7aaf2!358x508.jpg"/>
				</div>
				<div class="right fr">
					<li><img src="static/images/145fe47f-4eb9-7419-e04c-aa0feefdd3ab!358x252.jpg"/></li>
					<li><img src="static/images/fd815abaee77d453bf49d8bfe0b4d184.jpg"/></li>
				</div>
			</div>
			<div class="showProduct2 m12">
				<img src="static/images/6990be0e-2bb0-737b-d898-176ecc38d9ba!720x280.jpg"/>
			</div>
			<div class="showProduct-rec ml2">
				<img src="static/images/81df2f03-a45d-f1e4-cd2f-a5e29bdb9f16!720x440.jpg"/>
			</div>
			<div class="showProduct-list">
				<ul class="clearfix">
					<li v-for="item in product">
						<img :src="item.src" />
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
		<!--产品展示结束-->
	</div>
</template>

<script>
	import Banner from '@/components/Banner'
	export default {
		data(){
			return {
				listItem:[
				"static/images/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.jpg",
				"static/images/c2fe874d-7569-ec8f-889c-a8f0089cc1ea!144x152.jpg",
				"static/images/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.jpg",
				"static/images/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.jpg",
				"static/images/c19e51dd-c493-21ea-343f-f331eb8a31ab!144x152.jpg"
				],
				product:[
				{src:"static/images/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.jpg",name:"小米8 青春版",brief:"潮流镜面渐变色，自拍旗舰",price:"1399"},
				{src:"static/images/5c55b30b-abd9-3a52-7f8b-7322d288835d!360x360.jpg",name:"小米8 屏幕指纹版",brief:"压感屏幕指纹，潮流外观",price:"3199"},
				{src:"static/images/2c506517-9477-c928-8e77-bee18b6818a1!360x360.jpg",name:"红米6A",brief:"好用好看不贵",price:"569"},
				{src:"static/images/bd9b6895-5b51-a0d6-fb79-e430ca40dca6!360x360.jpg",name:"小米6X",brief:"轻薄美观的拍照手机",price:"1349"},
				{src:"static/images/a14a8cc3-3f47-3224-d221-8ff8485d624d!360x360.jpg",name:"小米8 SE",brief:"三星 AMOLED 全面屏 小屏旗舰",price:"1699"},
				{src:"static/images/685330bb-cb82-c3c3-e3cf-106c9b9a70e6!360x360.jpg",name:"小米平板4",brief:"追剧神器 / 支持AI人脸识别",price:"1099"},
				{src:"static/images/e9458a37-e700-016b-f666-50751448a30a!360x360.jpg",name:"黑鲨游戏手机 Helo",brief:"双液冷，更能打",price:"3199"},
				{src:"static/images/a081da10-3758-e051-7a20-0de017f37476!360x360.jpg",name:"红米6",brief:"小屏高性能的双摄手机",price:"3199"},
				]
			}
		},
		components:{
			Banner
		}
	}
</script>

<style scoped lang="less">
	.clearfix:after{
		content: "";
		display: block;
		clear: both;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	ul,ol,li{
		list-style: none;
	}
	.m12{
		margin-bottom: .6rem;
	}
	img{
		width: 100%;
	}
	.recoment .list{
		.list-item{
			width: 20%;
			img{
				width: 100%;
			}
		}
	}
	.showProduct1 .left{
		width: 49%;
		img{
			width: 100%;
		}
	}
	.showProduct1 .right{
		width: 49%;
		li{
			width: 100%;
			&:first-child{
				margin-bottom: .1rem;
			}
			img{
				width: 100%;
			}
		}
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