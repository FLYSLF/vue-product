<template>
	<div class="mine">
		<div class="mine-t">
			<div class="mine-r clearfix">
				<div class="mine-left">
					<img src="@/assets/img/avatar.76a75b8f17.png" />
					<span>登录/注册</span>
					<i class="iconfont icon-iconfontzhizuobiaozhun023110"></i>
				</div>
			</div>
		</div>
		<!--我的订单-->
		<div class="menu clearfix" @click="clickMenu()">
			<p class="menu-left">我的订单</p>
			<div class="menu-right">
				<span>全部订单</span> &gt;
			</div>
		</div>
		<!--基本信息-->
		<ul class="list">
			<li @click="list()">
				<i class="iconfont icon-daifukuan"></i><br />
				<span>代付款</span>
			</li>
			<li @click="list()">
				<i class="iconfont icon-shoucangtubiao-"></i><br />
				<span>待收货</span>
			</li>
			<li @click="list()">
				<i class="iconfont icon-daipingjia"></i><br />
				<span>待评价</span>
			</li>
			<li @click="list()">
				<i class="iconfont icon-weixiu"></i><br />
				<span>退换修</span>
			</li>
		</ul>

	<!--轮播图-->
		<div class="headerBanner">
			<Banner :autoplay="5000" :paginationShow="true" paginationType="bullets"  paginationPositon="center">
				<div class="swiper-slide" slot="item">
					<img src="../../assets/img/01fb9a83027cb68f07e5318c49ccf79a.jpg" />
				</div>
				<div class="swiper-slide" slot="item" >
					<img src="../../assets/img/0c177037f9584ae4a0d0f15928f36602.jpg" />
				</div>
				<div class="swiper-slide" slot="item" >
					<img src="../../assets/img/17dbc837b82de528f8f4abf4ede0753a.jpg" />
				</div>
			</Banner>
		</div>
		<!--底部-->
		<div class="list-stri">
			<List v-for="(item,index) in arr" :clickM="item.clickTo" :key="index" :style="{'margin-bottom':item.mb}">
				<i :class="item.icon" class="list-two-left" slot="list-two-left" :style="{'color':item.color1}"></i>
				<span class="list-two-center" slot="list-two-center"  >{{item.txt}}</span>
				<i :class="item.icon2" class="list-two-right"  slot="list-two-right"></i>
			</List>
		</div>
	</div>
</template>
<script>
	import Banner from "@/components/Banner"
	import List from "@/components/List"

	export default {
		components:{
			Banner,
			List
		},
		data() {
			return {
				arr:[
				{icon:"iconfont icon-youhuiquan",txt:"优惠券",icon2:"iconfont icon-dayuhao",color1:"red",clickTo:"login"},
				{icon:"iconfont icon-huiyuanzhongxin",txt:"会员中心",icon2:"iconfont icon-dayuhao",color1:"orange",clickTo:"login"},
				{icon:"iconfont icon-wodeqianbao",txt:"我的钱包",icon2:"iconfont icon-dayuhao",color1:"#03a9f4",mb:"10px",clickTo:"login"},
				{icon:"iconfont icon-fuwuzhongxin",txt:"服务中心",icon2:"iconfont icon-dayuhao",color1:"#e81e0f",clickTo:"serice"},
				{icon:"iconfont icon-fangzi",txt:"小米之家",icon2:"iconfont icon-dayuhao",color1:"#ffc107",clickTo:"homeTo"},
				{icon:"iconfont icon-woshou",txt:"直供点",icon2:"iconfont icon-dayuhao",color1:"#458bad",clickTo:"position"},
				{icon:"iconfont icon-gongneng1",txt:"更多供能",icon2:"iconfont icon-dayuhao",color1:"red",mb:"10px",clickTo:"much"},
				{icon:"iconfont icon-config",txt:"设置",icon2:"iconfont icon-dayuhao",color1:"grey",clickTo:"itemTo"},
				]
			}
		},
		methods: {
			clickMenu() {
				this.$router.push("/login")
			},
			list() {
				this.$router.push("/login")
			}
		},
		created() {
			this.$emit("tabbar_shows", true)
		}
	}
</script>
<style lang="less">
	
	.mine {
		margin-top: 0rem;
			height: 4rem;
		.list-stri{
			background: #f7f5f5;
		}
		.headerBanner{
			width: 100%;
			height:  4rem;
			margin-bottom:2rem;
			img{
			width:100%;
			height: 6rem!important;
			}
		}
		
		.list {
			width: 100%;
			height: 3.5rem;
			display: flex;
			text-align: center;
			justify-content: center;
			align-items: center;
			li {
				i {
					font-size: 2rem;
				}
				list-style: none;
				flex: 1;
			}
		}
		width: 100%;
		.mine-t {
			.mine-r {
				background: orange;
				width: 100%;
				height: 100px;
			}
			.mine-left {
				/*background: url(../../assets/bg.63c8e19851.png);*/
				background-size: cover;
				width: 100%;
				height: 6rem;
				i {
					font-size: 2rem;
					float: right;
					color: white;
					padding: 0.2rem;
				}
				img {
					width: 4rem;
					height: 4rem;
					float: left;
					padding: 1rem;
				}
				span {
					color: white;
					float: left;
					padding: 3rem 0 0 1rem;
				}
			}
		}
		/*我的订单*/
		.menu {
			width: 100%;
			height: 3rem;
			border-bottom: 0.1rem solid #ddd;
			box-sizing: border-box;
			padding: 1rem;
			.menu-right {
				font-weight: 600;
				font-size: 1rem;
				letter-spacing: 0.1rem;
				color: #7e7a7aa8;
				float: right;
			}
			.menu-left {
				font-size: 1rem;
				font-weight: 600;
				letter-spacing:0.2rem;
				float: left;
			}
		}
	}
</style>