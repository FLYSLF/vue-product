<template>
	<div class="formAll">
		<p><i class="iconfont icon-chahao" @click="inputC()" ></i></p>
		<div class="form">
			<h1>登陆密码</h1>
			<form>
				<input placeholder="请输入手机号/邮箱/小米账号" @input="handInput($event)" type="tel" :class="{active:orang1}" v-model="phone" class="input1" @focus="orang1=true" @blur="orang1=false" oninput="if(value.length > 11)value = value.slice(0, 11)"/>
				<span class="hefa">{{msg}}</span>
				<input @focus="orang2=true" @blur="orang2=false" :class="{active:orang2}" v-model="input2" placeholder="请输入密码" id="yan" class="input1" />		
				<span class="getyan" :class="{orange:flag}" @click="getyan()">获取验证码</span>
				<div class="submit">用账号密码登录 &gt;</div>
				<button  :class="{orange3:checked&&flag}">用手机短信登录</button>
				<input type="checkbox"  id="checkboxT" v-model="checked" class="promise1"/> 
				<span >登录即代表同意小米账号用户协议和隐私协议</span>
			</form>
			
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				msg:"",
				phone:"",
				input2:"",
				reg: /^[1][3,4,5,7,8][0-9]{9}$/,
				orang1:false,
				orang2:false,
				reg2:/[^\d]/g,
				checked:true,
				orange3:true
			}
		},
		methods:{
			handInput(e){
				this.phone=e.target.value.replace(this.reg2,"")
			},
			getyan(){
				if(!this.reg.test(this.phone)){
					this.msg="手机号码不合法"
				}
			},
			inputC(){
				this.$router.push("/mine")
			}
		},
		computed:{
			 flag(){
			 	if(this.reg.test(this.phone)){
				return true
			}else{
				return false
			}
		 }
		},
		created(){
			this.$emit("tabbar_shows",false)
		}
	}
</script>
<style lang="less">
	.formAll {
		padding:1rem;
		.icon-chahao {
			font-size: 2rem;
		}
		.hefa{
			width: 100%;
			display: inline-block;
			text-align: left;
			color: orange;
		}
		p {
			width: 100%;
			text-align: left;
		}
		h1 {
			margin: 1rem 0 1rem 0;
			text-align: left;
			font-family: "YaHei";
		}
		#yan{
			position: relative;
		}
		.getyan{
			position: absolute;
			top: 12rem;
 			right: 2rem;
		}
		.orange3{
			background: orange;
		}
		.orange{
			color: orange;
		}
		input::-webkit-input-placeholder {
			color: #cbc1c1;
			font-size: 1rem;
		}
		
		.input1 {
			border: 0;
			border-bottom:0.1rem solid #cbc1c1;
			width: 100%;
			height: 2rem;
			outline: none;
		}
		.active{
			border-bottom: 0.1rem solid orange;
		}
		.actived{
			background-color: orange;
		}
		#checkboxT{
			background: red;
		}
		.submit {
			height:4rem;
			line-height: 4rem;;
			text-align: left;
			font-family: "YaHei";
			color: #423f3f;
			font-size: 1rem;
			letter-spacing: 0.1rem;
		}
		button {
			width: 100%;
			height: 2rem;
			color: white;
			border: 0;
			border-radius: 0.5rem;
			margin-bottom: 1rem;
    background: #edbb60;
		}
		label {
			display: inline-block;
			width: 100%;
			line-height: 4rem;
			text-align: left;
		}
		
	}
</style>
