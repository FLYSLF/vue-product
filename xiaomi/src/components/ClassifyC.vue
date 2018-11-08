<template>
	<div class="classifyC" >
			<div class="img">
				<span class="image"><slot name="image"></slot></span>
			</div>
	</div>
</template>

<script>
	export default {
//		data(){
//			return{
//				Array:[]
//			}
//		},
//		mounted(){
//			this.axios.get("/api/listdata").then((res)=>{
//				this.Array = res.data.data
//				console.log(this.Array)
//			})
//		}
	}
</script>

<style lang="less">
	.classifyC {
		width: 100%;
		.sj-info {
			width: 100%;
			margin: 0 auto;
			height: 100/75rem;
			.list {
				float: left;
				text-align: center;
				img {
					width: 60/75rem;
					margin-bottom: 10/75rem;
				}
			}
			.list:nth-child(1) {
				margin-left: 20/75rem;
			}
			.list:nth-child(2) {
				margin: auto 30/75rem;
			}
		}
	}
</style>