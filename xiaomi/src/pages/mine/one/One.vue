<template>
	<div class="one clearfix">
		<ul class="one-top">
			<li v-for="(item,index) in arr">
				<img :src="item.img_url" />
			</li>
		</ul>
		<div id="one2">
			<div class="tab">
				<a href="#" @click="tabId=0" class="{tabId=0}"><span :class="{tabColor:tabId===0}">账户</span></a>
				<a href="#" @click="tabId=1" class="{tabId=1}"><span :class="{tabColor:tabId===1}">订单</span></a>
				<a href="#" @click="tabId=2" class="{tabId=2}"><span :class="{tabColor:tabId===2}">活动</span></a>
				<a href="#" @click="tabId=3" class="{tabId=3}"><span :class="{tabColor:tabId===3}">售后</span></a>
				<a href="#" @click="tabId=4" class="{tabId=4}"><span :class="{tabColor:tabId===4}">技术支持</span></a>
				<a href="#" @click="tabId=5" class="{tabId=5}"><span :class="{tabColor:tabId===5}">系统</span></a>
			</div>
			<div class="box ">
				<div v-show="tabId===0">
					<ul>
						<li>小米账户如何注册</li>
						<li>订单确认手机解锁账户</li>
						<li>小米账户忘记密码如何找回</li>
						<li>手机被他人小米账户如何解决</li>
						<li>小米VIP会员认证</li>
					</ul>
				</div>
				<div v-show="tabId===1">
					<ul>
						<li>小米商城可以用什么方式支持</li>
						<li>如何取消和修改订单</li>
						<li>小米商城发票类型</li>
						<li>我的商品何时到货</li>
						<li>小米商城的订单能合并，拆分吗</li>
					</ul>
				</div>
				<div v-show="tabId===2">
					<ul>
						<li>小米账户如何注册</li>
						<li>订单确认手机解锁账户</li>
						<li>小米账户忘记密码如何找回</li>
						<li>手机被他人小米账户如何解决</li>
						<li>小米VIP会员认证</li>
					</ul>
				</div>
				<div v-show="tabId===3">
					<ul>
						<li>小米商城订单多少包邮</li>
						<li>购买提示排队吗</li>
						<li>活动购买何时发货</li>
						<li>购买赠品退货时需要退换吗</li>
						<li>小米商城优惠卷使用规则</li>
					</ul>
				</div>
				<div v-show="tabId===4">
					<ul>
						<li>小米账户如何注册</li>
						<li>订单确认手机解锁账户</li>
						<li>小米账户忘记密码如何找回</li>
						<li>手机被他人小米账户如何解决</li>
						<li>小米VIP会员认证</li>
					</ul>
				</div>
				<div v-show="tabId===5">
					<ul>
						<li>小米账户如何注册</li>
						<li>订单确认手机解锁账户</li>
						<li>小米账户忘记密码如何找回</li>
						<li>手机被他人小米账户如何解决</li>
						<li>小米VIP会员认证</li>
					</ul>
				</div>
			</div>
		</div>
		<ul class="line-phone" v-show="show1">
			<li @click="line()">
				<i class="iconfont icon-icon-test1"></i>
				<span>热线电话</span>
			</li>
			<li @click="line2()">
				<i class="iconfont icon-xinxi"></i>
				<span>在线客服</span>
			</li>
		</ul>

	
	</div>
</template>
<script>

	export default {
		data() {
			return {
				arr: [],
				tabId: 0,
				show1:true
			}
		},
		methods:{
			line() {
				this.show1 = false;
				this.$root.eventHub.$emit('ad', !this.show1);
			},
			line2(){
				this.$router.push("/mine")
			}
		},
		mounted() {
			this.axios.get("/api/serice").then((res) => {
				console.log(res.data.data)
				this.arr = res.data.data
			})
			this.$root.eventHub.$on('ac', (index) => { 
		        this.show1=index
		        
		    })
		}
	}
</script>
<style lang="less">
	#app {
		margin-top: 0rem;
	}
	.one {
		width: 100%;
		margin-top:1rem;
		.one-top {
			width: 100%;
			height: 12rem;
			li {
				height: 40%;
				width: 25%;
				display: inline-block;
				list-style: none;
				img {
					width: 100%;
				}
			}
		}
	}
	
	.box {
		border-bottom: 1px solid #ddd;
		ul {
			li {
				padding-left: 1rem;
				text-align: left;
				height: 5rem;
				line-height: 5rem;
				color: black;
				font-size: 1.5rem;
			}
		}
	}
	
	#one2 {
		width: 100%;
		margin: 0 auto;
		.tab {
			display: flex;
			a {
				flex: 1;
				-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
				-webkit-user-select: none;
				-moz-user-focus: none;
				-moz-user-select: none;
			}
		}
	}
	
	a {
		text-decoration: none;
		height: 3rem;
		text-align: center;
		.tabColor {
			display: block;
			flex: 1;
			border-radius: 30%;
			color: orange;
			border: 0.1rem solid orange;
		}
		span {
			font-size: 0.8rem;
			color: black;
			font-size: 1rem;
			line-height: 3rem;
		}
	}
</style>