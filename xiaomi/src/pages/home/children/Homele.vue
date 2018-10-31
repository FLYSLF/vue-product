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
	</div>
</template>

<script>
	import Banner from '@/components/Banner'
	export default {
		components:{
			Banner
		}
	}
</script>

<style>
</style>