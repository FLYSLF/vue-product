<template>
	<div class="itemWraper" :class="{orange:flag}" @click="clickMe()">
		<slot name="icon"></slot><br />
		<slot name="cartNum"></slot>
		<span>{{txt}}</span>
	</div>
</template>

<script>
	
	export default {
		props:["txt","mark","sel"],
		computed:{
			flag(){
				if(this.mark == this.sel){
					return true;
				}
				return false;
			}
		},
		methods:{
			clickMe(){
				this.$emit("transfer",this.mark)
				//跳转到对应的页面
				this.$router.push("/"+this.mark)
				
			}
		},
		mounted(){
			//页面刷新的时候回到首页
			this.$router.push("/home")
		}
	}
</script>

<style scoped>
	.itemWraper{
		position: relative;
		flex: 1;
	}
	.itemWraper i{
		font-size: 2rem;
	}
	.itemWraper span{
		position: relative;
		bottom: .1rem;
	}
	.orange{
		color: orange;
	}
</style>