<template>
	<div class="swiper-container" id="swiper-container">
	        <div class="swiper-wrapper classify_swiper">
	            <div class="swiper-slide">
	            	<div class="swiper_top">
	            		<img :src="arr1.user_avatar"/>	
	            		<div class="pp">
	            			<p>{{arr1.add_timestamp}}</p>
	            			<p>{{arr1.add_time}}</p>
	            		</div>
	            		<span><i class="iconfont icon-zan"></i>{{arr1.up_num}}</span>
	            	</div>
	            	<div class="swiper_info">
	            		{{arr1.comment_content}}
	            	</div>
	            	<div class="swiper_pho">
	            		<img :src="items" v-for="(items,index) in arr1.comment_full_images" />
	            		
	            	</div>
	            	<div class="swiper_bottom">
	            		<em>官方回复：</em>{{arr1.reply_content}}
	            	</div>
	            </div>
	            <div class="swiper-slide">
	            	<div class="swiper_top">
	            		<img :src="arr2.user_avatar"/>	
	            		<div class="pp">
	            			<p>{{arr2.add_timestamp}}</p>
	            			<p>{{arr2.add_time}}</p>
	            		</div>
	            		<span><i class="iconfont icon-zan"></i>{{arr2.up_num}}</span>
	            	</div>
	            	<div class="swiper_info">
	            		{{arr2.comment_content}}
	            	</div>
	            	<div class="swiper_pho">
	            		<img :src="items" v-for="(items,index) in arr2.comment_full_images" />
	            		
	            	</div>
	            	<div class="swiper_bottom">
	            		<em>官方回复：</em>{{arr2.reply_content}}
	            	</div>
	            </div>
	            <div class="swiper-slide">
	            	<div class="swiper_top">
	            		<img :src="arr3.user_avatar"/>	
	            		<div class="pp">
	            			<p>{{arr3.add_timestamp}}</p>
	            			<p>{{arr3.add_time}}</p>
	            		</div>
	            		<span><i class="iconfont icon-zan"></i>{{arr3.up_num}}</span>
	            	</div>
	            	<div class="swiper_info">
	            		{{arr3.comment_content}}
	            	</div>
	            	<div class="swiper_pho">
	            		<img :src="items" v-for="(items,index) in arr3.comment_full_images" />
	            		
	            	</div>
	            	<div class="swiper_bottom">
	            		<em>官方回复：</em>{{arr3.reply_content}}
	            	</div>
	            </div>
	            <div class="swiper-slide">
	            	<div class="swiper_top">
	            		<img :src="arr4.user_avatar"/>	
	            		<div class="pp">
	            			<p>{{arr4.add_timestamp}}</p>
	            			<p>{{arr4.add_time}}</p>
	            		</div>
	            		<span><i class="iconfont icon-zan"></i>{{arr4.up_num}}</span>
	            	</div>
	            	<div class="swiper_info">
	            		{{arr4.comment_content}}
	            	</div>
	            	<div class="swiper_pho">
	            		<img :src="items" v-for="(items,index) in arr4.comment_full_images" />
	            		
	            	</div>
	            	<div class="swiper_bottom">
	            		<em>官方回复：</em>{{arr4.reply_content}}
	            	</div>
	            </div>
	            
	        </div>
	    </div>
</template>

<script>
	import "../assets/lib/swiper/js/swiper.js"
	
	export default {
		data(){
			return{
				arr1: [],
				arr2: [],
				arr3: [],
				arr4: []
			}
		},
		
		mounted() {
			this.axios.get("/api/Detailsc").then((res) => {
				
				this.arr1 = res.data.data.goods_share_datas.comments.list[0]
				this.arr2 = res.data.data.goods_share_datas.comments.list[2]
				this.arr3 = res.data.data.goods_share_datas.comments.list[3]
				this.arr4 = res.data.data.goods_share_datas.comments.list[4]
			}),
			new Swiper('#swiper-container', {
		        slidesPerView: 1.2,
		        paginationClickable: true,
		        spaceBetween: .5,
		        freeMode: true
		    })
		}

	}
</script>

<style lang="less">
	@import "../assets/lib/swiper/css/swiper.css";
	/*swiper部分*/
	#swiper-container {
        width: 100%;
        height: 17rem;
        padding-top:1.5rem;
        .swiper-wrapper{
        	.swiper-slide {
        		border-radius: 1rem 1rem 1rem 1rem;
        	    text-align: center;
        	    margin-left: 1.5rem;
        	    font-size: 1rem;
        	    background: #eee;
        	    width: 80% !important;
        	    padding:.3rem;
        	    box-sizing:border-box;
        	    .swiper_top{
        	    	width: 100%;
        	    	text-align:left;
        	    	text-indent:1rem;
        	    	padding-top:1.5rem;
        	    	.pp{
        	    		display: inline-block;
        	    		text-align:left;
        	    		p{
        	    			line-height:1.5rem;
        	    		}
        	    	}
        	    	img{
        	    		width: 3.5rem;
        	    		height: 3.5rem;
        	    		border-radius:50%;
        	    		margin-top: -1.5rem;
        	    	}
        	    	span{
        	    		display: inline-block;
						float: right;
						padding-right: 2rem;
        	    	}
        	    }
        	    .swiper_info{
        	    	text-overflow: ellipsis;
        	    	overflow: hidden;
        	    	
        	    	white-space: nowrap;
        	    	
        	    }
        	    .swiper_pho{
        	    	width: 20%;
        	    	height: 25%;
        	    	display: flex;
        	    	margin: 1rem 0;
        	    	img{
        	    		margin-right: 1rem;
        	    	}
        	    }
        	    .swiper_bottom{
        	    	display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
					em{
						color: orange;
					}
        	    }
        	}
        }
    }
</style>