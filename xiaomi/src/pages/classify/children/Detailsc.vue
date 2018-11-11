<template>
	<div class="detailsc">
		<div class="details_top">
			<a @click="back()" class="left"><i class="iconfont">&#xe628;</i></a>
			<a class="right" @click="messageShareF($event)">
				<i class="iconfont">&#xe637;</i>
				<div class="messageShare" v-show="messageShareFlag">
					<i class="iconfont">&#xe666;</i>
					<p><i class="iconfont">&#xe763;</i>消息通知</p>
					<p><i class="iconfont">&#xe60c;</i>分享</p>
				</div>
			</a>
		</div>
		<div class="swiper-container my-banner" id="c_w">
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
			<p @click="ShouPup">
				分期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>小米分期&nbsp;/&nbsp;花呗分期</span>
				<i class="iconfont icon-dayuhao1"></i>
			</p>
			<mt-popup width="100%" v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">

				<div class="popup">
					<div class="detail_popup">
						<img src="../../../../static/images/message.png" />
						<div class="message_right">
							<h4>￥3599</h4>
							<i @click="detailClose" class="iconfont">&#xe65e;</i>
							<span>小米MIX3全网通版8GB+128GB黑色</span>
						</div>
					</div>
					<div class="divide">
						<span :class="{active:nowIndex==0}" @click="nowIndex=0">
							<router-link to="/Detailsc1/FenQi">小米分期</router-link>
						</span>
						
						<span :class="{active:nowIndex==1}" @click="nowIndex=1">
							<router-link to="/Detailsc1/HuaBei">花呗分期</router-link>
						</span>
					</div>
					<div>
						<router-view></router-view>
					</div>
				</div>

			</mt-popup>
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

		<classify_details @change="getJson"></classify_details>

		<div class="more">
			更多评论
			<i class="iconfont icon-jiantou1"></i>
		</div>
		<div class="picture">

			<img src="../../../assets/img/footerNavImg/class3.png" />
			<img src="../../../assets/img/footerNavImg/class1.png" />
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

		<div id="BackTop" @click="BackTop()" v-if="BackTop1" :class="{BackTopAnimate:BackTop1}">
			<img src="../../../assets/img/top.451d650ecd.png" alt="" />
		</div>
		<footer>
			<div class="footer">
				<a @click="breake('/')">
					<i class="iconfont icon-shouye"></i> 首页
				</a>
				<a class="cart">
					<i class="iconfont icon-ziyuan"></i> 购物车

				</a>
				<div class="action-box">
					<a>加入购物车</a>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	import store from "@/store/store.js";
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
				arr1: [],
				messageShareFlag: false,
				BackTop1: false,
				popupVisible: false,
				arr2: [],
				nowIndex: 0
			};
		},
		computed: {
			tabbarFlag() {
				return store.state.tabbarFlag;
			}

		},
		mounted() {
			store.state.tabbarFlag = false;

			this.axios.get("/api/Detailsc").then((res) => {

				this.arr = res.data.data.goods_info[1].class_parameters.list
				this.arr1 = res.data.data.goods_share_datas.gallery_view
				//						console.log(this.arr1);
			});
			observer: true

			observeParents: true

			var swiper = new Swiper('.swiper-container', {
				//				loop: true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true, //修改swiper的父元素时，自动初始化swiper
			});
			//置顶设置在>= 1000时候出现
			window.onscroll = () => {
				var scrollTop =
					document.documentElement.scrollTop + document.body.scrollTop;
				scrollTop >= 1000 ? (this.BackTop1 = true) : (this.BackTop1 = false);
			};

		},
		methods: {
			back() {
				window.history.back();
			},
			messageShareF(e) {
				e.stopPropagation();
				this.messageShareFlag = true;
				document.onclick = () => {
					this.messageShareFlag = false;
				};
			},
			//置顶
			BackTop() {
				var timer = setInterval(() => {
					document.documentElement.scrollTop -= document.documentElement.scrollTop / 5;
					if(document.documentElement.scrollTop <= 0) {
						clearInterval(timer);
					}
				}, 16);
			},
			breake(path) {
				this.$router.push(path);
				store.state.tabbarFlag = true;
			},
			ShouPup() {
				this.popupVisible = true;
			},
			detailClose() {
				this.popupVisible = false;

			},
			getJson(json) {
				//				console.log(json)

				this.arr2 = json;
				//				console.log(this.arr2)
			}
		}

	}
</script>

<style scoped lang="less">
	@import "../../../assets/lib/swiper/css/swiper.css";
	.detailsc {
		margin-top: -3rem;
		margin-bottom: 3rem;
		position: relative;
		.details_top {
			padding: 0.8rem;
			background: transparent;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;
			a {
				width: 2.4rem;
				height: 2.4rem;
				color: #ddd;
				background: rgba(0, 0, 0, 0.6);
				display: block;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.left {
				float: left;
			}
			.right {
				float: right;
				position: relative;
				i {
					font-size: 1.6rem;
				}
				.messageShare {
					position: absolute;
					top: 4.08rem;
					right: -0.4rem;
					width: 8.8rem;
					height: 4.8rem;
					text-align: left;
					border-radius: 0.4rem;
					background: rgba(0, 0, 0, 0.5);
					&>i {
						position: absolute;
						color: rgba(0.5, 0.5, 0.5, 0.4);
						top: -1.096rem;
						font-size: 1.36rem;
						right: 0.8rem;
					}
					p {
						line-height: 2.4rem;
						height: 50%;
						i {
							font-size: 1.44rem;
							padding: 0 0.8rem;
						}
					}
					p:last-child>i {
						font-size: 1.2rem;
					}
				}
			}
		}
	}
	
	.swiper-pagination {
		text-align: center;
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
			color: black !important;
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
	
	.mint-popup-bottom {
		width: 100%;
		border-radius: 1rem 1rem 0 0;
	}
	
	.popup {
		padding: 1.5rem;
		height: 36.5rem;
		.detail_popup {
			img {
				width: 10rem;
				height: 10rem;
				float: left;
			}
			.message_right {
				display: inline-block;
				float: right;
				width: 16rem;
				text-align: left;
				padding-top: 1rem;
				position: relative;
				h4 {
					color: orange;
					font-size: 1.5rem;
					display: inline-block;
				}
				i {
					display: inline-block;
					font-size: 1.6rem;
					position: absolute;
					top: 0;
					right: 0;
				}
				span {
					display: inline-block;
					line-height: 2rem;
					color: black;
				}
			}
		}
		.divide {
			width: 100%;
			margin-top:12rem;
			border: 1/75rem solid grey;
			span{
				display:inline-block;
				width:45%;
				height:3rem;
				line-height: 3rem;
				color: black !important;
			}
			span:nth-child(1){
			    border-right: 1/75rem solid grey;
			    font-size: 1.2rem;
			    
			}
			.active>a {
				color: orange !important;
			}
		}
	}
	
	#BackTop {
		position: fixed;
		bottom: 6rem;
		right: 1rem;
		width: 3rem;
		height: 3rem;
	}
	/*底部*/
	
	.detailsc footer {
		padding: 0 0.66491228rem 0.66491228rem;
		background: transparent;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		.footer {
			display: flex;
			align-items: center;
			background-color: rgba(255, 255, 255, 0.96) !important;
			width: 100%;
			height: 4.16172249rem;
			border: 0.07974482rem solid #e5e5e5;
			border-radius: 1.19617225rem;
			overflow: hidden;
			box-shadow: 0 0.15948963rem 0.31897927rem -0.07974482rem rgba(0, 0, 0, 0.2), 0 0.31897927rem 0.39872408rem rgba(0, 0, 0, 0.14), 0 0.07974482rem 0.79744817rem rgba(0, 0, 0, 0.12);
			a {
				display: block;
				position: relative;
				color: rgba(0, 0, 0, 0.54);
				margin-left: 2.3923445rem;
			}
		}
	}
	
	.detailsc footer .footer a i {
		display: block;
		font-size: 1.99362041rem;
	}
	
	.detailsc footer .footer a .num {
		position: absolute;
		top: 0;
		right: 0;
		width: 1.19617225rem;
		height: 1.19617225rem;
		font-size: 0.9569378rem;
		background: #ff6700;
		color: #fff;
		line-height: 1.19617225rem;
		border-radius: 100%;
	}
	
	.detailsc footer .footer .action-box {
		margin-left: 5.58213716rem;
	}
	
	.detailsc footer .footer .action-box a {
		background: #ff6700;
		color: #fff;
		text-align: center;
		padding: 0 1.99362041rem;
		height: 2.63157895rem;
		line-height: 2.63157895rem;
		border-radius: 1.19617225rem;
	}
</style>