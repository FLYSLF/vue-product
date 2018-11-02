<template>
	<div class="showProduct-list">
		<ul class="clearfix">
			<li v-for="item in list">
				<img :src="item.src" />
				<div class="info">
					<div class="name">{{item.name}}</div>
					<div class="brief">{{item.brief}}</div>
					<div class="price">{{item.price}}
						<span>起</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			list:{
				dataType:Object,
				default:{}
			}
		}
	}
</script>

<style>
</style>