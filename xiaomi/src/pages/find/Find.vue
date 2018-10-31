<template>
	<div style="height: 10000px;">
		<Myheader>
			<img slot="leftImg" src="../../assets/img/footerNavImg/001.png"/>
			<img slot="rightImg" src="../../assets/img/footerNavImg/002.png"/>
		</Myheader>
		<!--Banner组件-->
		<div class="headerBanner">
			<Banner></Banner>
		</div>
		<div class="li-fin">
			<a class="fr"><img src="../../assets/img/li1.jpg"/></a>
			<a class="fr"><img src="../../assets/img/li2.jpg"/></a>
			<a class="fr"><img src="../../assets/img/li3.jpg"/></a>
			<a class="fr"><img src="../../assets/img/li4.jpg"/></a>
			<a class="fr"><img src="../../assets/img/li5.jpg"/></a>
		</div>
		<div class="mijia">
			<div class="fl">
				<img src="../../assets/img/ppt.jpg" width="280" height="250"/>
			</div>
			<div class="bot">
				<a href="#">
					<h4>小米之家深圳海雅滨芬城店</h4>
					<p class="p1">距离2.72公里</p>
				</a>
				<a class="ai" href="#">其它零售店<i class="iconfont icon-dayuhao"></i></a>
			</div>
		</div>
		<div class="mix">
			<a href="#"><img id="imgs" src="../../assets/img/mix3.jpg" width="100%" height="300"/></a>
		</div>
		<div class="paper">
			<h3>商城早报</h3>
			<div class="slide">
				<ul>
					<li class="fl-l">
						<div><a href="#"><img src="../../assets/img/slide6.jpg" /></a></div>
					</li>
					<li class="fl-l">
						<div><a href="#"><img src="../../assets/img/slide2.jpg" /></a></div>
					</li>
					<li class="fl-l">
						<div><a href="#"><img src="../../assets/img/slide3.jpg" /></a></div>
					</li>
					<li class="fl-l">
						<div><a href="#"><img src="../../assets/img/slide4.jpg" /></a></div>
					</li>
					<li class="fl-l">
						<div><a href="#"><img src="../../assets/img/slide5.jpg" /></a></div>
					</li>
				</ul>
			</div>
		</div>
		<div class="miaosha">
			<a href="#">
			<img src="../../assets/img/miaosha.jpg" width="100%"/>
			<div class="een">
			<h4>万圣节，小米超值预售来袭！</h4>
			<a href="#">10月29日-11月1日，小米万圣节，等你来领糖~</a>
			</div>
			</a>
			<div class="foot-a">
			<a href="" class="fl-a">20小时前</a>
			<a href="" class="fr-a">4646阅读</a>
			</div>
		</div>

	</div>
</template>

<script>
	import Myheader from '@/components/FindHeader'
	import Banner from '@/components/FindBanner'
	export default {
		components:{
			Myheader,
			Banner
		}
	}
</script>

<style lang="less">
	@import "../../assets/css/find.css";
	.headerBanner{
		margin-top: 60/2px;
	}
</style>