<template>
	<div class="pinDao">
		<p>
			{{pinDao}}
			<i class="iconfont icon-dayuhao1"></i>
		</p>
	</div>
</template>

<script>
	export default {
		props: ["pinDao"]
	}
</script>


<style lang="less">
	.pinDao{
		width: 100%;
		height: 200/75rem;
		line-height: 200/75rem;
		margin-bottom: 50/75rem;
		background: darkorange;
		p{
			text-align: center;
			i{
				font-size: 12/75rem;
			}
		}
	}
</style>