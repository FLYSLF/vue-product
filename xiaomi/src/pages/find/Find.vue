<template>
	<div class="find">
		<Myheader>
			<img slot="leftImg" src="../../assets/img/footerNavImg/001.png" />
			<img slot="rightImg" src="../../assets/img/footerNavImg/002.png" />
		</Myheader>
		<!--Banner组件-->
		<div class="headerBanner">
			<Banner></Banner>
		</div>
		<div class="li-fin">
			<router-link class="fr" to="/FindMifen">
				<div>	
				<img src="../../assets/img/a2.png" />
				<span>小米礼品</span>
				</div>
			</router-link>
			<a class="fr">
				<div>
				<img src="../../assets/img/a4.png" />
				<span>小米闪购</span>
				</div>
			</a>
			<a class="fr">
				<div>
				<img src="../../assets/img/a3.png" />
				<span>好友拼团</span>
				</div>
			</a>
			<a class="fr">
				<div>
				<img src="../../assets/img/a2.png" />
				<span>小米分期</span>
				</div>
			</a>
			<a class="fr">
				<div>
				<img src="../../assets/img/a1.png" />
				<span>小米信用</span>
				</div>
			</a>
		</div>
		<div class="mijia">
			<div class="fl">
				<img src="../../assets/img/ppt.jpg" width="140" height="125" />
			</div>
			<div class="bot">
				<a href="#">
					<h4>小米之家深圳海雅滨芬城店</h4>
					<p class="p1">距离2.72公里</p>
				</a>
				<router-link to="/mine" class="ai" href="#">其它零售店<i class="iconfont icon-dayuhao"></i></router-link>
			</div>
		</div>
		<div class="mix">
			<a href="#"><img id="imgs" src="../../assets/img/mix3.jpg" width="100%" height="150" /></a>
		</div>
		<div class="paper">
			<h3>商城早报</h3>
			<div class="slide">
				<ul>
					<li class="fl-l">
						<div>
							<a href="#"><img src="../../assets/img/slide6.jpg" /></a>
						</div>
					</li>
					<li class="fl-l">
						<div>
							<a href="#"><img src="../../assets/img/slide2.jpg" /></a>
						</div>
					</li>
					<li class="fl-l">
						<div>
							<a href="#"><img src="../../assets/img/slide3.jpg" /></a>
						</div>
					</li>
					<li class="fl-l">
						<div>
							<a href="#"><img src="../../assets/img/slide4.jpg" /></a>
						</div>
					</li>
					<li class="fl-l">
						<div>
							<a href="#"><img src="../../assets/img/slide5.jpg" /></a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="miaosha">
			<router-link to="/FindLive" href="#">
				<img src="../../assets/img/miaosha.jpg" width="100%" />
				<div class="een">
					<h4>万圣节，小米超值预售来袭！</h4>
					<a href="#">10月29日-11月1日，小米万圣节，等你来领糖~</a>
				</div>
			</router-link>
			<div class="foot-a">
				<a href="" class="fl-a">20小时前</a>
				<a href="" class="fr-a">4646阅读</a>
			</div>
		</div>
		<div class="miaosha jimu">
			<a href="">
				<img src="../../assets/img/jimu2.jpg" width="100%" height="105" />
				<div class="een">
					<h4>米兔指尖积木，发挥想像自由拼插，你的解压神器</h4>
					<span>这一块小小的米兔指尖积木，你能拼出多少种形状</span>
				</div>
				<div class="foot-a">
					<span class="fl-a">6天前</span>
					<span class="fr-a">11235阅读</span>
				</div>
			</a>
		</div>
		<div class="solid"></div>
		<div class="see">
			<a href="" class="see2">查看更多商城早报</a><i class="iconfont icon-dayuhao1"></i>
		</div>
		<div class="puality">
			<h2>品质生活</h2>
			<div class="imgs">
				<img src="../../assets/img/quality.jpg" />
			</div>
			<div class="quito">
				<div>
					<h5>米家驱蚊器</h5>
					<span><strong>￥59</strong></span>
				</div>
				<a href="">风扇驱动挥发，静享无忧以夏</a>
			</div>
		</div>
		<div class="LED">
			<div class="inte">
				<a href="">
					<img src="../../assets/img/LED.png"/>
				</a>
				<h5>智能LED吸顶灯</h5>
				<span><strong>￥379</strong></span>
			</div>
			<div class="router">
				<a href="">
					<img src="../../assets/img/router.jpg" />
				</a>
				<h5>小米路由器HD/Pro</h5>
				<span><strong>￥349起</strong></span>
				<del>￥499</del>
			</div>
			<div class="plate">
				<a href="">
					<img src="../../assets/img/chaban.jpg" />
				</a>
				<h5>小米米家插线板</h5>
				<span>
				<strong>￥24.9起</strong>
			</span>
			</div>
			<div class="router">
				<a href="">
					<img src="../../assets/img/computer.jpg" />
				</a>
				<h5>游戏本8代增强</h5>
				<span>
				<strong>￥6699起</strong>
			</span>
			</div>
		</div>
		
		<div class="ddt">
           <h2>出行必备</h2>
		<div class="travel">
			<div class="recorder">
				<a href="">
					<img src="../../assets/recorder.jpg" />
				</a>
				<h5>70迈智能记录仪</h5>
				<span>
				<strong>￥199</strong>
			</span>
			</div>

			<div class="source">
				<a href="">
					<img src="../../assets/img/source.jpg" />
				</a>
				<h5>移动电源2C(20000mAh)</h5>
				<span>
				<strong>￥129</strong>
			</span>
			</div>

			<div class="recorder">
				<a href="">
					<img src="../../assets/img/selfie.jpg" />
				</a>
				<h5>小米支架式自拍杆</h5>
				<span>
				<strong>￥89</strong>
			</span>
			</div>

			<div class="source">
				<a href="">
					<img  src="../../assets/img/shaving1.jpg" />
				</a>
				<h5>便携电动剃须刀</h5>
				<span>
				<strong>￥179</strong>
			</span>
			</div>
		</div>
		</div>
		
		<div class="travel">
			<div class="recorder"  v-for="item in arr">
				<a href="">
					<img v-lazy="item.image" :src="item.image" />
				</a>
				<h5>{{item.name}}</h5>
				<span>
				<strong>￥{{item.price}}</strong>
			</span>
			</div>
		</div>
	<!--置顶效果-->
	<div class="ding" @click="settop()">
		<img src="../../assets/img/ZS2.png"/>
	</div>
	</div>
	
	
</template>

<script>
	import { Lazyload } from 'mint-ui';
	import Myheader from '@/components/FindHeader'
	import Banner from '@/components/FindBanner'
	export default {
		components: {
			Myheader,
			Banner
		},
		data() {
			return {
				arr: []
			}
		},
		mounted() {
			this.axios.get("/api/findItem").then((res) => {
				this.arr = res.data.data;
				console.log(this.arr)
			})
		},
		methods:{
			 settop() {
      var timer = setInterval(() => {
        document.documentElement.scrollTop -= document.documentElement.scrollTop / 10;
        if (document.documentElement.scrollTop <= 0) {
          clearInterval(timer);
        			}
     			 }, 16);
   	 		}
		}
	}
</script>

<style lang="less">
	@import "../../assets/css/find.css";
	.headerBanner {
		margin-top: 30/12.5rem;
	}
	
	img[lazy=loading]{
				  height: 100%;
				  margin: auto;
				}
</style>