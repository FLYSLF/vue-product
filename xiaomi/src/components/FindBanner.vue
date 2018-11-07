<template>
	<div class="banner">

		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="../assets/img/swiper1.jpg"/>
				</div>
				<div class="swiper-slide">
					<img src="../assets/img/swiper2.jpg" />
				</div>
				<div class="swiper-slide">
					<img src="../assets/img/swiper3.jpg" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>

</template>

<script>
		//js引入

		import "../assets/lib/swiper/js/swiper.js";
		export default{
			mounted(){
				new Swiper(".swiper-container",{
					loop:true,
					pagination:".swiper-pagination",
					autoplay:3000,
//					paginationType:bullets,
				});
			}
	 	}
</script>

<style lang="less">
	/*	css引入*/
	@import "../assets/lib/swiper/css/swiper.css";
	.banner img {
		height: 150/12.5rem;
		width: 100%;
	}
</style>