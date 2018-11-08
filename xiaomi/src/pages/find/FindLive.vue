<template>
	<div class="FindLive">
		<div class="head">
			<div class="gift">
				<router-link to="/Find"><i class="iconfont icon-xiaoyuhao"></i></router-link>
				<span>小米直播视频</span>
			</div>
		</div>
		<!--轮播图-->
		<div class="headerBanner ban">
			<Banner></Banner>
		</div>
	<!--视频-->
	<div class="VIDEO">
		<div class="video">
			<video controls="controls" protes>
				<source src="../../assets/video/mi1.mp4"></source>
			</video> 
			<p>米家自动洗手机精品！卫生抑菌，爱上洗手</p>
			<span class="sp1">10-11</span>
			<span class="sp2">播放464次</span>
		</div>
		
		<div class="video">
			<video controls="controls" protes>
				<source src="../../assets/video/mi2.mp4"></source>
			</video> 
			<p>颜值致胜VS实力为王，这就是青春</p>
			<span>09-20</span>
			<span class="sp2">播放223次</span>
		</div>
		
		<div class="video">
			<video controls="controls" protes>
				<source src="../../assets/video/mi3.mp4"></source>
			</video> 
			<p>小米8青春版开箱体检，当青春遇到青春</p>
			<span class="sp1">9-19</span>
			<span class="sp2">播放147次</span>
		</div>
		
		<div class="video">
			<video controls="controls" protes>
				<source src="../../assets/video/mi4.mp4"></source>
			</video> 
			<p>刷地铁！刷公交！刷门禁！小米手环3，NFC版来呐</p>
			<span class="sp1">09-13</span>
			<span class="sp2">播放149次</span>
		</div>
		
		<div class="video">
			<video controls="controls" protes>
				<source src="../../assets/video/mi5.mp4"></source>
			</video> 
			<p>小米手机"SOS紧急求助"等安全功能大讲堂</p>
			<span class="sp1">09-06</span>
			<span class="sp2">播放150次</span>
		</div>
		
		<div class="video">
			<video controls="controls" protes>
				<source src="../../assets/video/mi6.mp4"></source>
			</video> 
			<p>小米MIX3新品开箱体检，当科技AI上艺术</p>
			<span class="sp1">10-25</span>
			<span class="sp2">播放853次</span>
		</div>
		
		<div class="video">
			<video controls="controls" protes>
				<source src="../../assets/video/mi7.mp4"></source>
			</video> 
			<p>小米MLX3新品，故宫发布会</p>
			<span class="sp1">10-25</span>
			<span class="sp2">播放2859次</span>
		</div>
		</div>
	</div>
</template>

<script>
	import Banner from '@/components/FindBanner'
	export default {
		components: {
			Banner,
		}
	}
</script>

<style lang="less">
	@import "../../assets/css/Findlive.css";
	.headerBanner {
		margin-top: 30/12.5rem;
	}
	
</style>