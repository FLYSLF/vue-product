<template>
	<div class="hometo">
		<i class="iconfont  icon-xiaoyuhao" @click="ditu()"></i>
		<div id="allmap" ref="allmap"></div>
		<router-view></router-view>
		<div @touchstart="start()" @touchmove="move()"  class="outerBox" :style="{top:top}">
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				flags: false,
    			top: null,
    			y:null,
    			dy:null
    			
			}
		},
		methods: {
			start(){
				var touch;
			    if(event.touches){
			        touch = event.touches[0];
			    }else {
			        touch = event;
			    }
			    this.y = touch.clientY;
			    this.dy = this.$el.children[2].offsetTop;
			    console.log(this.$el.children[2].offsetTop)
			},
			move(){
				var touch;
			    if(event.touches){
			        touch = event.touches[0];
			    }else {
			        touch = event;
			    }
			    var my = touch.clientY;
			    this.top = my-this.y + this.dy + "px";
			    console.log(this.top)
			},
			ditu(){
				this.$router.push("/mine")
			},
			map() {
				let map =new BMap.Map(this.$refs.allmap); // 创建Map实例  
				map.centerAndZoom(new BMap.Point(111.958447,22.055311), 11); // 初始化地图,设置中心点坐标（经纬度/城市的名称）和地图级别  
				map.addControl(new BMap.MapTypeControl({ //添加地图类型控件  
					mapTypes: [
						BMAP_NORMAL_MAP,
						BMAP_HYBRID_MAP
					]
				}));
				map.setCurrentCity("广东"); // 设置地图显示的城市 此项是必须设置的  
				map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放  
				          //map.setMapStyle({style:'midnight'});//地图风格
			}
		},
		mounted() {   
			this.map()
		},
		created(){
			this.$emit("tabbar_shows",false)
		}
	}
</script>

<style lang="less">
	/*#app::-webkit-scrollbar {display:none};*/
	.hometo{
		overflow: hidden;
		position: relative;
		&::-webkit-scrollbar {display:none};
		
	}
	.outerBox{
		width:80%;
		margin: 0 10%;
		height: 50rem;
		background-color: yellowgreen;
		position: absolute;
		top: 35rem;
	}
	
	#allmap {
		height: 40rem;
		overflow: hidden;
		margin-top: 0rem;
	}
	.icon-xiaoyuhao{
		font-size: 2rem;
		position: absolute;
		top: 0;
		left: 0.3rem;
		z-index: 999;
	}
</style>