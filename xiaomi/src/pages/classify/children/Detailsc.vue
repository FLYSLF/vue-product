<template>
	<div class="detailsc">
		<div class="swiper-container my-banner">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in arr1">
					<img :src="item.img_url" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="Max3">
			<div class="infoTop">
				小米MIX3
			</div>
			<div class="infoMiddle">
				<span class="hundred">「全系限时立省100元」</span>
				<span class="infoDetails">
					大屏大电量 震撼视界 / 5500mAh 电量，支持给多个设备充电 / AI 双摄超大像素，双核对焦 / 单手可握纤薄全金属机身
				</span>
				<div class="infoDetails">
					<span>
						￥1699
					</span> &nbsp;&nbsp;&nbsp;&nbsp;
					<del>
						￥1599
					</del>
				</div>
			</div>
		</div>
		<div class="swiper_sd">
			<div class="swiper_box">
				<div class="swiper_item" v-show="item.is_page_show" v-for="(item,index) in arr">
					<img :src="item.icon" />
					<div class="content_info">{{item.top_title}}</div>
					<div class="size">{{item.value}}</div>
				</div>
			</div>
		</div>
		<div class="bar">
			<p>
				分期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>小米分期&nbsp;/&nbsp;花呗分期</span>
				<i class="iconfont icon-dayuhao1"></i>
			</p>
		</div>
		<div class="bar">
			<p>
				换机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span><em>以旧换新，回收专享120元购新福利</em></span>
				<i class="iconfont icon-dayuhao1"></i>
			</p>
		</div>
		<div class="change">
			<p>
				已选&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>小米MIX3全网通版6GB+128GB&nbsp;&nbsp;黑色x1</span>
				<i class="iconfont icon-dayuhao1"></i>
			</p>

			<p>
				送至&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>深圳市&nbsp;&nbsp;南山区&nbsp;&nbsp;<em>该地区暂时缺货</em></span>
				<i class="iconfont icon-dayuhao1"></i>
			</p>
			<p>

				<i class="iconfont">&#xe654;<em>小米自营</em></i>

				<i class="iconfont">&#xe654;<em>小米发货</em></i>

				<i class="iconfont">&#xe654;<em>七天无理由退货</em></i>
			</p>
		</div>

		<classify_details>

		</classify_details>

		<div class="more">
			更多评论
			<i class="iconfont icon-jiantou1"></i>
		</div>
		<div class="picture">
			<img src="../../../assets/img/footerNavImg/class1.png" />
			<img src="../../../assets/img/footerNavImg/class2.png" />
			<img src="../../../assets/img/footerNavImg/class3.png" />
			<img src="../../../assets/img/footerNavImg/class4.png" />
			<img src="../../../assets/img/footerNavImg/class5.png" />
			<img src="../../../assets/img/footerNavImg/class6.png" />
			<img src="../../../assets/img/footerNavImg/class7.png" />
			<img src="../../../assets/img/footerNavImg/class8.png" />
			<img src="../../../assets/img/footerNavImg/class9.png" />
			<img src="../../../assets/img/footerNavImg/class10.png" />
			<img src="../../../assets/img/footerNavImg/class11.png" />
			<img src="../../../assets/img/footerNavImg/class12.png" />
		</div>
		<Classify_details_pic>

		</Classify_details_pic>

	<!--<div id="BackTop" @click="BackTop()" v-if="BackTop" :class="{BackTopAnimate:BackTop}">
		<img src="../../../assets/img/top.451d650ecd.png" alt="" />
	</div>-->
	</div>
</template>

<script>
	import Classify_details from '@/components/Classify_details'
	import Classify_details_pic from '@/components/Classify_details_pic'
	import Swiper from '@/assets/lib/swiper/js/swiper.js'
	export default {
		components: {
			Classify_details,
			Classify_details_pic
		},
		data() {
			return {
				arr: [],
				arr1: []
			}
		},
		mounted() {
			this.axios.get("/api/Detailsc").then((res) => {

				this.arr = res.data.data.goods_info[1].class_parameters.list
				this.arr1 = res.data.data.goods_share_datas.gallery_view

			});
			observer: true

			observeParents: true

			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
			});
			//置顶
			//			BackTop() {
			//				var timer = setInterval(() => {
			//					document.documentElement.scrollTop -= document.documentElement.scrollTop / 10;
			//					if(document.documentElement.scrollTop <= 0) {
			//						clearInterval(timer);
			//					}
			//				}, 16);
			//			}
		}

	}
</script>

<style scoped lang="less">
	@import "../../../assets/lib/swiper/css/swiper.css";
	.detailsc {
		margin-top: -3rem;
		margin-bottom: 3rem;
	}
	
	img {
		width: 100%;
		vertical-align: middle;
	}
	
	.swiper-pagination {
		text-align: right;
	}
	
	.swiper-pagination-bullet {
		background-color: #fff;
		opacity: 1;
	}
	
	.swiper-pagination-bullet-active {
		background-color: orange;
	}
	
	.Max3 {
		padding: 1.5rem;
		.infoTop {
			text-align: left;
			font-size: 1.8rem;
			color: black;
			font-weight: 500;
		}
		.infoMiddle {
			text-align: left;
			.hundred {
				color: orangered;
				height: 1.8rem;
				line-height: 1.5rem;
			}
			.infoDetails {
				height: 1.8rem;
				line-height: 1.5rem;
				span {
					color: orangered;
					font-size: 1.8rem;
					height: 2.8rem;
					line-height: 2.8rem;
				}
			}
		}
	}
	
	.swiper_sd {
		margin-top: 1rem;
		width: 100%;
		height: 4.5rem;
		position: relative;
		overflow: hidden;
		overflow: auto;
		&::-webkit-scrollbar {
			display: none
		}
		;
		.swiper_box {
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			height: 4.5rem;
			.swiper_item {
				border-right: 1/75rem solid #eee;
				width: 6.8rem;
				height: 4.5rem;
				.content_info {
					font-size: 1rem!important;
					color: black;
				}
				.size {
					font-size: .2rem!important;
					color: gray;
				}
				img {
					width: 1.7rem;
				}
			}
		}
	}
	
	.bar {
		height: 3.5rem;
		line-height: 3.5rem;
		widows: 100%;
		margin: 1rem 1.5rem 1rem;
		background: ghostwhite;
		border-radius: .8rem;
		p {
			text-align: left;
			text-indent: 1.5rem;
			color: gray;
			i {
				float: right;
				display: inline-block;
				padding-right: 1.5rem;
			}
			span {
				color: black;
				em {
					color: orange;
				}
			}
		}
	}
	
	.change {
		height: 3.5rem;
		line-height: 3.5rem;
		widows: 100%;
		margin: 1rem 1.5rem 1rem;
		border-radius: .8rem .8rem .8rem .8rem;
		background: ghostwhite;
		p {
			background: ghostwhite;
			text-align: left;
			text-indent: 1.5rem;
			color: gray;
			border-bottom: 1/75rem solid gainsboro;
			border-top: 1/75rem solid gainsboro;
			i {
				float: right;
				display: inline-block;
				padding-right: 1.5rem;
			}
			span {
				color: black;
				em {
					color: orange;
					display: inline-block;
				}
			}
		}
		p:first-child {
			border-radius: .8rem .8rem 0 0;
		}
		p:last-child {
			height: 3.5rem;
			border-bottom: none;
			border-radius: 0 0 .8rem .8rem;
			margin-bottom: 2rem;
			i {
				float: left;
				font-size: 1rem;
				color: orange;
				padding-right: 0;
				em {
					color: black;
				}
			}
		}
	}
	
	.more {
		height: 5rem;
		line-height: 5rem;
		width: 100%;
		font-size: 1rem;
		i {
			vertical-align: -.2rem;
			font-size: 1.5rem;
		}
	}
	/*.BackTop{
		position: absolute;
		bottom: 0;
		right: 0;
		width: 10rem;
		height: 10rem;
		background: #007AFF;
	}*/
</style>