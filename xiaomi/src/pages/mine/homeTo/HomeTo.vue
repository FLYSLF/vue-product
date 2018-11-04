<template>
	<div class="hometo">
		<i class="iconfont  icon-xiaoyuhao" @click="ditu()"></i>
		<div id="allmap" ref="allmap"></div>
		<router-view></router-view>
		<div @touchstart="start()" @touchmove="move()" @touchend="end()" class="outerBox" :style="{top:top}">
			<mt-navbar v-model="selected" >
			 	 <mt-tab-item id="1" @click.stop="">选项一</mt-tab-item>
				  <mt-tab-item id="2">选项二</mt-tab-item>
				  <mt-tab-item id="3">选项三</mt-tab-item>
			</mt-navbar>
			  

			<mt-tab-container v-model="selected">
				  <mt-tab-container-item id="1">
				   <ul class="touchstart">
						<li>
							<div>
								<p>北京凌安信河店</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凌安信子站</p>
							<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>河北华邦子站</p>
							<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li><li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
					</ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				       <ul class="touchstart">
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li><li>
							<div>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
							</div>
						</li><li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li><li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li><li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li><li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
					</ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				       <ul class="touchstart">
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
						<li>
							<div>
								<p>北京凯达信子站</p>
								<p>北京海淀区清河嘉园东1号楼 2层108</p>
							</div>
						</li>
							<li>
							<p>北京凯达信子站</p>
							<p>北京海淀区清河嘉园东1号楼 2层108</p>
						</li>
							<li>
							<p>北京凯达信子站</p>
							<p>北京海淀区清河嘉园东1号楼 2层108</p>
						</li>
							<li>
							<p>北京凯达信子站</p>
							<p>北京海淀区清河嘉园东1号楼 2层108</p>
						</li>	<li>
							<p>北京凯达信子站</p>
							<p>北京海淀区清河嘉园东1号楼 2层108</p>
						</li>	<li>
							<p>北京凯达信子站</p>
							<p>北京海淀区清河嘉园东1号楼 2层108</p>
						</li>
					</ul>
				  </mt-tab-container-item>
			</mt-tab-container>

		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				flags: false,
    			top: null,
    			y:0,
    			dy:0,
    			my:0,
    			selected:"1"
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
			},
			move(){
				var touch;
			    if(event.touches){
			        touch = event.touches[0];
			    }else {
			        touch = event;
			    }
			    this.my = touch.clientY;
			    this.top = this.my-this.y + this.dy + "px";
			},
			end(){
			    if(this.my-this.y<0){
			    	var leader=this.my;
					var target=100;
					var timer = setInterval(()=>{
	                    leader = leader + (target - leader)/10;
	                    if(Math.round(leader) == target){
	                        leader = target;
	                    }
	                   this.top = leader + "px";
	                    if(leader == target){
	                        clearInterval(timer);
	                    }
	                },16)
			    }else if(this.my-this.y>0){
			    	var leader=this.my;
					var target=437;
					var timer = setInterval(()=>{
		                leader = leader + (target - leader)/10;
		                if(Math.round(leader) == target){
		                    leader = target;
		                }
		               this.top = leader + "px";
		                if(leader == target){
		                    clearInterval(timer);
		                }
		            },16)
			   }
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
	.touchstart{
		text-align: left;
		li{
			box-sizing: border-box;
			height: 5rem;
			border-bottom: 1px solid #ddd;
			display: flex;
			align-items: center;
		}
	}
	.hometo{
		overflow: hidden;
		position: relative;
		margin-top: -3rem;
		&::-webkit-scrollbar {display:none};
		
	}
	.outerBox{
		width:80%;
		margin: 0 5%;
		height: 50rem;
		background: white;
		padding-left: 2rem;
		position: absolute;
		top: 35rem;
	}
	
	#allmap {
		height: 53.2rem;
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