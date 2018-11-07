<template>
	<div class="findmifen">
		<div class="head">
			<div class="gift">
				<a><i class="iconfont icon-xiaoyuhao"></i></a>
				<span>礼品卡</span>
			</div>
			<div class="right">
				<a class="at"><i class="iconfont icon-shizhong" ></i></a>
				<a class="ar"><i class="iconfont icon-changjianwenti1"></i></a>
			</div>
		</div>
		<div class="weixing">
			<div>
				<p><i class="iconfont icon-weixin" style="font-size: 32px;"></i></p>
				<h2>微信实时赠礼</h2>
				<h2>心意即刻传递</h2>
				<p class="p1">————————了解小米电子礼品卡————————</p>
			</div>
		</div>
		<div class="mony">
			<div class="mony1">
				<span><img src="../../assets/img/mony.png" style="width:8%;"/></span>
				<span class="sp"><strong>小米+祝福送朋友表心意</strong></span>
			</div>
		</div>
			<FindImg title="节日" >
				<img slot="newImg" src="../../assets/img/chunjie.jpg"/>
			</FindImg>
			<FindImg title="亲友相逢" >
				<img slot="newImg" src="../../assets/img/qingyou.jpg"/>
			</FindImg>	
			<FindImg title="员工福利" >
				<img slot="newImg" src="../../assets/img/yuangong.jpg"/>
			</FindImg>
			<FindImg title="生日快乐" >
				<img slot="newImg" src="../../assets/img/shengre.jpg"/>
			</FindImg>	
			<FindImg title="表达爱意" >
				<img slot="newImg" src="../../assets/img/love.jpg"/>
			</FindImg>
			<FindImg title="感恩答谢" >
				<img slot="newImg" src="../../assets/img/ganren.jpg"/>
			</FindImg>	
		
	</div>
</template>

<script>
	import FindImg from "@/pages/find/FindImg"
	export default {
		components:{
			FindImg
		}
	}
</script>

<style lang="less">
	@import "../../assets/css/findmifen.css";
</style>