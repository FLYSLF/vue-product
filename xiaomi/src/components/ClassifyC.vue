<template>
	<div class="classifyC" >
		<div name="classify">
			<div class="img">
				<span class="image"><slot name="image"></slot></span>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		//props: ["sj", "info", "picture","title"]
	}
</script>

<style lang="less">
	.classifyC {
		width: 100%;
		.img {
			width: 100%;
			.image {
				display: inline-block;
				img{
					width: 100%;
				}
			}
		}
		/*.phone {
			margin: 15px auto;
			text-align: center;
			font-size: 16px;
			color: black;
		}*/
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