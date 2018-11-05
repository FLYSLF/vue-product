<template>
	<div class="tv">
		<Banner>
			<div slot="item" class="swiper-slide">
	        	<img src="static/images/e52090a6-a047-a350-acac-4c340dab7a08!720x280.jpg" />
	        </div>
	        <div slot="item" class="swiper-slide">
	        	<img src="static/images/bce55df7-8020-9708-5b05-96769c47a54c!720x280.jpg" />
	        </div>
	        <div slot="item" class="swiper-slide">
	        	<img src="static/images/85075577-2501-68fd-7645-f68b7f5f5df3!720x280.jpg" />
	        </div>
		</Banner>
		<div><img src="static/images/37e975e2-1079-5e31-9bc4-dbffce66dbf1!720x440.jpg"/></div>
		<ProList :list=product></ProList>
	</div>
</template>

<script>
	import ProList from './productList/ProList'
	import Banner from '@/components/Banner'
	export default {
		
		data(){
			return {
				product:[
					{src:"static/images/8550243b-79b4-476b-d87e-2d0688aa55d1!344x280.jpg",name:"小米电视4C 40英寸",brief:"FHD全高清屏，钢琴烤漆",price:"1199"},
					{src:"static/images/f7e8338e-f550-7d06-9b5d-ae17490a4f5d!344x280.jpg",name:"小米电视4A 65英寸",brief:"4K HDR，人工智能语音",price:"3399"},
					{src:"static/images/f49b88a2-37bc-22ef-9caf-59b80a5479aa!344x280.jpg",name:"小米电视4C 50英寸",brief:"4K HDR，钢琴烤漆",price:"1899"},
					{src:"static/images/0054fe0a-4b00-49b4-f27e-e3987a11b6b7!344x280.jpg",name:"小米电视4X 55英寸",brief:"4K HDR，人工智能语音",price:"2199"},
					{src:"static/images/8c9403fc-97df-c9a0-2f37-2acbe01617ef!344x280.jpg",name:"小米电视4A 32英寸",brief:"人工智能系统，高清液晶屏",price:"849"},
					{src:"static/images/723f26ae-f3a2-5c9a-5f53-f40993879272!344x280.jpg",name:"小米电视4 55英寸",brief:"4.9mm 极超薄机身，无边框设计",price:"3299"}
				]
			}
		},
		components:{
			ProList,
			Banner
		}
	}
</script>

<style>
</style>