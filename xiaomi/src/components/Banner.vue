<template>
	<div class="swiper-container h-banner">
	    <div class="swiper-wrapper">
	        <slot name="item"></slot>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination" :style="{'text-align':paginationLocation}"></div>
	</div>
</template>

<script>
	import '@/assets/lib/swiper/js/swiper.js'
	export default {
		props:{
			paginationLocation:{
				type:String,
				default:"right"
			},
			autoplay:{
				type:Number,
				default:2000
			},	
			paginationShow:{
				type:Boolean,
				default:true
			},
			paginationPositon:{
				type:String,
				default:"center"
			},
			paginationType:{
				type:String,
				default:"bullets"
			}
		},
		mounted(){
			var myBanner = new Swiper(".h-banner",{
				loop:true,
				autoplay:this.autoplay,
			    //分页器
			    pagination: '.swiper-pagination',
			    paginationType:this.paginationType,
			    autoplayDisableOnInteraction:false,
			});
		}
	}
</script>

<style lang="less">
    @import url("../assets/lib/swiper/css/swiper.css");
	img{
		width: 100%;
		vertical-align: middle;
	}
	.swiper-pagination{
		text-align: right;
	}
	.swiper-pagination-bullet{
		background-color: #fff;
		opacity: 1;
	}
	.swiper-pagination-bullet-active{
		background-color: orange;
	}
	
</style>