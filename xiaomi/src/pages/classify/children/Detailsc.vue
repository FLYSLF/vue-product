<template>
	<div class="detailsc">
		<Banner>
			<div class="swiper-slide"  slot="item">
				<img src="../../../assets/img/swiper3.jpg" />
			</div>
			<div class="swiper-slide"  slot="item">
				<img src="../../../assets/img/swiper1.jpg" />
			</div>
			<div class="swiper-slide"  slot="item">
				<img src="../../../assets/img/swiper2.jpg" />
			</div>
		</Banner>
		<div class="Max3">
			<div class="infoTop">
				小米Max 3
			</div>
			<div class="infoMiddle">
				<span>「全系限时立省100元」</span>
				<div class="infoDetails">
					大屏大电量 震撼视界 / 5500mAh 电量，支持给多个设备充电 / AI 双摄超大像素，双核对焦 / 单手可握纤薄全金属机身
				</div>
				<div class="infoDetails">
					<span>
						<i class="iconfont icon-icon01"></i>
						1699
					</span>
					<del>
						<i class="iconfont icon-icon01"></i>
						1599
					</del>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from '@/components/Banner'
	export default {
		components: {
			Banner
		}
//		data(){
//			return{
//				arr:[]
//			}
//		},
//		mounted() {
//			this.axios.get("/api/listdata").then((res) => {
//					this.arr = res.data
//					console.log(this.arr)
//			})
//			}
		}
</script>

<style scoped lang="less">
	.detailsc{
		margin-top: -3rem;
	}
	.Max3 .infoTop{
		text-align: left !important;
	}
</style>