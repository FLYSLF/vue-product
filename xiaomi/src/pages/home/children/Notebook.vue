<template>
	<div class="notebook">
		<Banner paginationLocation="center">
			<div slot="item" class="swiper-slide">
	        	<img src="static/images/7437e9a4-27b2-d9ba-d101-152368cfb7d3!720x280.jpg" />
	        </div>
	        <div slot="item" class="swiper-slide">
	        	<img src="static/images/c598ef1c-05cc-0841-0d6d-d0247ecf0537!720x280.jpg" />
	        </div>
		</Banner>
		<div class="list m12">
			<ul class="clearfix">
				<li class="list-item fl" v-for="item in listItem">
					<img :src="item"/>
				</li>
			</ul>
		</div>
		<ProList :list=product></ProList>
	</div>
</template>

<script>
	import Banner from '@/components/Banner'
	import ProList from './productList/ProList'
export default {
	data () {
	    return {
	    	listItem:[
				"static/images/456a429b-dec9-8758-3a44-e28856af8807!144x152.jpg",
				"static/images/ccf968f6-4f50-9335-d088-3a824d64f637!144x152.jpg",
				"static/images/a560b588-6b55-079c-08b9-b9d0ae742b57!144x152.jpg",
				"static/images/81b85e7a-217f-0187-1783-9c2e6d82b5e9!144x152.jpg",
				"static/images/00003be2-ca32-681f-ffb5-2f29d32c976d!144x152.jpg"
			],
			product:[
				{src:"static/images/a0d0e1e5-cd25-46da-9ca4-de9e45742af9!344x280.jpg",name:"13.3' 四核i5 MX150 ",brief:"四核增强版，独立显卡",price:"5399"},
				{src:"static/images/c244afdd-58d3-43d4-2d43-fa154b81d514!344x280.jpg",name:"13.3' 四核i5 集显",brief:"轻薄全金属机身，256GB SSD",price:"4999"},
				{src:"static/images/4e921866-dedd-7d69-5051-917207ea4ef6!344x280.jpg",name:"13.3' 八代i3 集显",brief:"轻薄全金属机身, 8G内存",price:"3999"},
				{src:"static/images/1161a9aa-cee5-8eb3-7bb2-3e6e3ce65ef3!344x280.jpg",name:"15.6'8代i5 1050Ti ",brief:"冷酷的性能怪兽",price:"6699"},
				{src:"static/images/2656972d-f6c2-13d1-cd61-74095f0e22c1!344x280.jpg",name:"15.6' i5 4G MX110",brief:"全面均衡的国民轻薄本",price:"4199"},
				{src:"static/images/a0d0e1e5-cd25-46da-9ca4-de9e45742af9!344x280.jpg",name:"13.3' 四核i5 MX150 ",brief:"四核增强版，独立显卡",price:"5399"},
				{src:"static/images/7990580a-940c-17c0-4060-559beba9b6c9!344x280.jpg",name:"15.6' i7 8G MX110 ",brief:"全面均衡的国民轻薄本",price:"4999"},
				{src:"static/images/2656972d-f6c2-13d1-cd61-74095f0e22c1!344x280.jpg",name:"15.6' i3 4G 集显",brief:"全面均衡的国民轻薄本",price:"3399"},
				{src:"static/images/676661ee-4f0f-6c52-4b7f-133cbb85ea58!344x280.jpg",name:"15.6'8代i7 1050Ti",brief:"冷酷的性能怪兽",price:"7499"},
				{src:"static/images/d0be13ff-d226-0624-35d5-f8f4ea8e1249!344x280.jpg",name:"13.3' 四核i5 MX150",brief:"带独立显卡的轻薄笔记本",price:"5399"},
				{src:"static/images/c244afdd-58d3-43d4-2d43-fa154b81d514!344x280.jpg",name:"13.3' 四核i5 集显",brief:"轻薄全金属机身，256GB SSD",price:"4999"},
				{src:"static/images/3dae31ca-e622-702b-fb4d-92149ed484e6!344x280.jpg",name:"15.6' i5 MX150",brief:"更强悍的专业笔记本",price:"5599"},
				{src:"static/images/e63c19a3-3d56-4c3d-a807-6bf9e0885390!344x280.jpg",name:"15.6' i7 MX150",brief:"高性能独显 第八代处理器",price:"6999"},
				{src:"static/images/7bd077f6-f570-1d31-595e-6feafed770b9!344x280.jpg",name:"15.6' i5 8G MX110",brief:"全面均衡的国民轻薄本",price:"4499"},
				{src:"static/images/7990580a-940c-17c0-4060-559beba9b6c9!344x280.jpg",name:"15.6' i7 8G MX110 ",brief:"全面均衡的国民轻薄本",price:"4999"},
				{src:"static/images/873698eb-9582-d227-0041-2f76350d4171!344x280.jpg",name:"12.5' M3 4G 128G ",brief:"长续航全金属，超窄边框",price:"3599"},
			]
	    }
	},
	components:{
		Banner,
		ProList
	},
	methods: {
	    
	}
}
</script>

<style scoped lang="less">
	.notebook .list{
		.list-item{
			width: 20%;
			img{
				width: 100%;
			}
		}
	}
	
</style>