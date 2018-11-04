<template>
	<div class="serice" @click="clichMe()">
		<div class="serice-left" >
			<i  class="iconfont icon-xiaoyuhao" @click="back()"></i>
			<span>服务中心</span>
		</div>
		<Nav></Nav>
		<div class="swiper-bo">
			<Swiper></Swiper>
		</div>
			<!--热线电话-->
		<mt-popup v-model="show" popup-transition="popup-fade" position="bottom" modal="true" closeOnClickModal="true">
			<ul class="popup">
				<li>
					<p>商城热线</p>
					<p>
						<span>手机电视及智能硬件</span>
						<span>8:00-18:00</span>
					</p>
				</li>
				<li>
					<p>小米金服</p>
					<p>
						<span>贷款,保险,理财,钱包</span>
						<span>9:00-18:00</span>
					</p>
				</li>
				<li>
					<p>小米移动</p>
					<p>
						<span>任我行，吃到饱，米粉卡等</span>
						<span>8:00-18:00</span>
					</p>
				</li>
			</ul>
		</mt-popup>
	
	</div>
</template>

<script>
	import Nav from "../../../components/Nav"
	import Swiper from "../../../components/Swiper"
	
	export default{
		data(){
			return{
					show: false,
			}
		},
		components:{
			Nav,
			Swiper
		},
		methods:{
			back(){
				this.$router.push("/mine")
			},
			clichMe(){
				this.$root.eventHub.$emit('ac', !this.show);
			}
		},
		created(){
			this.$emit("tabbar_shows",false);	
		},
		mounted(){
    	 	this.$root.eventHub.$emit('ac', !this.show);
    	 	this.$root.eventHub.$on('ad', (index) => { 
		       this.show=index
		     })
		}
	}
</script>

<style lang="less">
	.serice{
		.v-modal {
			background: #242627;
		}
				
	.mint-popup-bottom {
			width: 100%;
			padding: 0  1rem;
			 height: 18rem;
			background: white;
			.popup {
					height: 100%;
					li{
						height: 4rem;
						padding: 1rem 1rem;
						border-bottom: 0.1rem solid white;
						p{
						text-align: left;
							font-size: 1.1rem;
						}
						span:first-child{
							float: left;
						
						}
						span:last-child{
							float: right;
						}
					}
				}
		}
		
	}
	
.line-phone {
			display: flex;
			text-align: center;
			li {
				flex: 1;
				height: 6rem;
				line-height: 6rem;
				font-size: 1.5rem;
				i {
					font-size: 2.5rem;
				}
			}
		}
.swiper-box{
	margin-top:0rem;
}
.serice-left{
	padding-left:2rem;
	text-align: left;
	line-height: 4rem;
	font-size: 1.3rem;
	span{
		padding-left: 2rem;	
	}
	i{
		font-size: 1rem;
		color: gray;	
	}
}
</style>