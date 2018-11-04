 <template>
	 <div class="list-two" @click="clickTo()">
		<slot name="list-two-left" ></slot>
		<slot name="list-two-center"></slot>
		<slot name="list-two-right"></slot>
	 </div>	
</template>
  <style lang="less">
  	.list-two{
  		width: 100%;
  		height:4rem;
  		background: white;
  		line-height:3rem;
  		position: relative;
  		border-bottom: 0.1rem solid #80808059;
  		.list-two-left{
  			position: absolute;
  			left: 0.5rem;
  			font-size: 1rem;
  		}
  		.list-two-center{
  			position: absolute;
  			left: 2rem;
  			font-size: 1rem;
  		}
  		.list-two-right{
  			position: absolute;
  			right: 1rem;
  			font-size: 2rem;
  			color: #171616;
  		}
  	}
  </style>
  <script>
  	export default{
  		props:["clickM"],
  		methods:{
  			clickTo(){
  			   this.$router.push("/"+this.clickM)     
  			}
  		}
  	}
  </script>