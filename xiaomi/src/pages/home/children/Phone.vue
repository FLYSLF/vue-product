<template>
	<div class="phone">
		<Banner paginationLocation="center">
			<div slot="item" class="swiper-slide">
	        	<img src="static/images/2c154bba-bf35-acbe-919f-e448a51c624d!720x360.jpg" />
	        </div>
	        <div slot="item" class="swiper-slide">
	        	<img src="static/images/ced08a75-d948-ba31-f5a9-933d1adb1ce2!720x360.jpg" />
	        </div>
		</Banner>
		<div class="showProduct-rec">
			<img src="static/images/7c0ddda856d45ad15b1dce794c0968ee.png"/>
			<img src="static/images/722674be-7a1a-cf8f-6469-b9401be1a120!720x360.jpg"/>
			<div class="info">
				<div class="name">黑鲨游戏手机 Helo</div>
				<div class="brief">双液冷，更能打</div>
				<div class="price">3199
					<span>起</span>
				</div>
			</div>
		</div>
		<ProList :list=product1></ProList>
		<div class="hotSail">
			<img src="static/images/801fa2e0-be9c-51e5-6d26-109b6414dc56!720x80.jpg"/>
		</div>
		<ProList :list=product2></ProList>
		<div class="hotSail">
			<img src="static/images/7009e741-50d2-46b2-3aac-8f9871d7880b!720x80.jpg"/>
		</div>
		<div class="showProduct-rec">
			<img src="static/images/75f44681-5fff-a65a-200a-11ae0801372a!720x360.jpg"/>
			<div class="info">
				<div class="name">红米6 Pro</div>
				<div class="brief">高颜值大电量 红米旗舰</div>
				<div class="price">899
					<span>起</span>
				</div>
			</div>
		</div>
		<ProList :list=product3></ProList>
	</div>
</template>
<script>
	import Banner from '@/components/Banner'
	import ProList from './productList/ProList'
	export default {
		data(){
			return {
				product1:[
				{src:"static/images/a081da10-3758-e051-7a20-0de017f37476!360x360.jpg",name:"红米6",brief:"小屏高性能的双摄手机",price:"749"},
				{src:"static/images/2c506517-9477-c928-8e77-bee18b6818a1!360x360.jpg",name:"红米6A",brief:"好用好看不贵",price:"569"},
				],
				product2:[
				{src:"static/images/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.jpg",name:"小米8 青春版",brief:"潮流镜面渐变色，自拍旗舰",price:"1399"},
				{src:"static/images/5c55b30b-abd9-3a52-7f8b-7322d288835d!360x360.jpg",name:"小米8 屏幕指纹版",brief:"压感屏幕指纹，潮流外观",price:"3199"},
				{src:"static/images/bd9b6895-5b51-a0d6-fb79-e430ca40dca6!360x360.jpg",name:"小米6X",brief:"轻薄美观的拍照手机",price:"1349"},
				{src:"static/images/a14a8cc3-3f47-3224-d221-8ff8485d624d!360x360.jpg",name:"小米8 SE",brief:"三星 AMOLED 全面屏 小屏旗舰",price:"1649"},
				],
				product3:[
				{src:"static/images/a081da10-3758-e051-7a20-0de017f37476!360x360.jpg",name:"红米6",brief:"小屏高性能的双摄手机",price:"749"},
				{src:"static/images/2c506517-9477-c928-8e77-bee18b6818a1!360x360.jpg",name:"红米6A",brief:"好用好看不贵",price:"569"},
				{src:"static/images/e7853ea5-1260-6cb2-91ed-2c539a87db0a!360x360.jpg",name:"红米5 Plus",brief:"全面屏，4000mAh大电量",price:"999"},
				{src:"static/images/3ba9490bd6d7dec5d29e45435692b4fe.jpg",name:"红米Note 5",brief:"红米国民品质，拍照专家",price:"899"},
				{src:"static/images/2d89504d-f610-a317-b67c-2d7f35d617fe!360x360.jpg",name:"红米自拍手机S2",brief:"1600万像素自拍手机",price:"999"},
				{src:"static/images/11a2b2b9-8deb-5177-ac51-eb9c07b03c31!360x360.jpg",name:"红米5",brief:"12MP旗舰相机，骁龙处理器",price:"799"},
				]
			}
		},
		components:{
			Banner,
			ProList
		}
	}
</script>

<style lang="less">
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
	.showProduct-rec {
		.info{
				padding: 1rem;
				text-align: left;
				line-height: 1.2rem;
				position: relative;
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
					position: absolute;
					top: 1rem;
					right: .5rem;
					color:#ea625b; 
					font-size: .8rem;
					&:before{
						content: '￥';
					}
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