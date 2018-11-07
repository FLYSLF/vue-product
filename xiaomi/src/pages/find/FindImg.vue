<template>
	<div class="img">
			<div class="fl">
				<slot name="newImg"></slot>
				<h3>{{title}}</h3>
			</div>
		</div>
</template>

<script>
	export default {
		props:["title"]
	}
</script>

<style lang="less">
	@import "../../assets/css/findmifen.css";
</style>