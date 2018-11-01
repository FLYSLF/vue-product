<template>
	<div class="homele">
		<Banner paginationLocation="center">
			<div slot="item" class="swiper-slide">
	        	<img src="static/images/52d11b31-35fb-a136-b33b-eb1a0ee9ae05!720x360.jpg" />
	        </div>
	        <div slot="item" class="swiper-slide">
	        	<img src="static/images/d18b3e5af9914bc86602c4be787294a1.jpg" />
	        </div>
		</Banner>
		<div class="list m12">
			<ul class="clearfix">
				<li class="list-item fl" v-for="item in listItem">
					<img :src="item"/>
				</li>
			</ul>
		</div>
		<div class="everyoneShop">
			<img src="static/images/eb69d32d-1813-8cda-6ba7-e293b77f52dd!720x80.jpg"/>
		</div>
		<ProList :list=product></ProList>
	</div>
</template>

<script>
	import Banner from '@/components/Banner'
	import ProList from './productList/ProList'
	export default {
		components:{
			Banner,
			ProList
		},
		data(){
			return {
				listItem:[
				"static/images/9debf9a2-ff6b-b166-dc9e-8df8dcadf696!144x152.jpg",
				"static/images/6c04eeb7-ba1f-a125-76b7-2639939d842f!144x152.jpg",
				"static/images/560c7937-dff9-459f-44ec-d8690b563e16!144x152.jpg",
				"static/images/6cfa0be6-4c0d-38b7-7e52-782a384fd8f6!144x152.jpg",
				"static/images/f45010e0-4987-31ae-503b-299680e7d4cf!144x152.jpg"
				],
				product:[
				{src:"static/images/5f78e5ba-cd16-0c67-3784-c64651596f94!360x360.jpg",name:"米家扫地机器人",brief:"智商高，扫得干净扫得快",price:"1499"},
				{src:"static/images/fafecf43-0429-eb6d-f986-b28d688d97de!360x360.jpg",name:"小米净水器1A（厨下式）",brief:"小身材节省空间，大流量直出纯净水",price:"1349"},
				{src:"static/images/7f627650-cfee-cbff-1d24-c1f27e8fdb4c!360x360.jpg",name:"米家电水壶 ",brief:"一杯水，是一家人的安心",price:"99"},
				{src:"static/images/9fa0da76-2735-69ce-3d7a-52f1c662083b!360x360.jpg",name:"小米米家滤水壶",brief:"高效过滤 享安心好水",price:"99"},
				{src:"static/images/a3b0fd45-5ab5-bc2d-9a54-4bb4c5e148b4!360x360.jpg",name:"小米米家空气净化器 2S",brief:"经典再升级，好空气看得见",price:"749"},
				{src:"static/images/8ef1164d-e1c5-ed1e-f827-b9a201520586!360x360.jpg",name:"米家空气净化器Pro",brief:"大空间，快循环",price:"1099"},
				{src:"static/images/070d67c4-aced-2088-8b64-de02220effbb!360x360.jpg",name:"米家IH电饭煲 3L",brief:"多才多艺的智能电饭煲",price:"379"},
				{src:"static/images/06142d12-1dc5-7d5f-b44b-29c756d862f8!360x360.jpg",name:"米家电磁炉",brief:"双频火力，精准控温",price:"279"},
				{src:"static/images/481baf8c-b5b4-693c-3851-5db22750a451!360x360.jpg",name:"米家直流变频落地扇",brief:"用科技创造自然风",price:"349"},
				{src:"static/images/51da3fb0-fbeb-fc42-8e18-f4d728fa534c!360x360.jpg",name:"米家投影仪",brief:"三秒自动对焦，好用又好看",price:"3699"},
				]
			}
		},
	}
</script>

<style lang="less" scoped>
.homele .list{
	.list-item{
		width: 20%;
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