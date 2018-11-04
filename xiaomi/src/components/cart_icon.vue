<template>
<div class="item cart_icon">
	<div class="icon ">
			<div class="select" @click="json.flag=!json.flag">
					<img v-show="json.flag" src="../assets/img/check_press.png" alt=""/>
					<img v-show="!json.flag" src="../assets/img/check_normal.png" alt="">
			</div>
			<div class="img" >
					<img :src="json.image_url" alt="">
			</div>
			<div class="info" :class="{active:deleteFlag}">
					<p class="title"><span>{{json.name}} </span></p>
					<p class="color"><span>{{json.colorList[randNum]}}</span><i class="iconfont icon-xiafangxiang"></i></p>
					<p class="price"><span><i>￥</i>{{json.price}}</span></p>
					<div class="range">
							<div class="reduce" :class="{disable:json.sum == 1}" @click="json.sum > 1 ? json.sum-- : 1;"><img src="../assets/img/reduce.png" alt=""></div>
							<!-- <div class="reduce" :class="{disable:json.sum == 1}" @click="clickNum(false)"><img src="../assets/img/reduce.png" alt=""></div> -->
							<div class="sum"><span>{{json.sum}}</span></div>
							<div class="add" :class="{disable:json.sum == 10}" @click="json.sum < 10 ? json.sum++ : 10;"><img src="../assets/img/add.png" alt=""></div>
							<!-- <div class="add" :class="{disable:json.sum == 10}" @click="clickNum(true)"><img src="../assets/img/add.png" alt=""></div> -->
					</div>				
			</div>
    </div>
</div>
    
</template>
<script>
export default {
  props: ["json", "deleteFlag"],
  data() {
    return {
      randNum: Math.floor(Math.random() * 5)
    };
  },
  computed: {
    bol: function() {
      return this.json.flag ? 1 : 0;
    }
  }
};
</script>
<style lang="less">
.cart_icon {
  .icon {
    padding: 30px 0;
    height: 160/2/12.5rem;
    line-height: 160/2/12.5rem;
    display: flex;
    align-items: center;
    .select {
      width: 15%;
      text-align: center;
      img {
        width: 40/2/12.5rem;
      }
    }
    .titile {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .img {
      border: 1px solid #e1dbdb;
      width: 160/2/12.5rem;
      text-align: center;
      img {
        width: 120/2/12.5rem;
      }
    }
  }
  .info {
    position: relative;
    width: 50%;
    padding: 0 20/2/12.5rem;
    line-height: 1.5;
    .color {
      color: #b3a7a7;
      i {
        display: none;
      }
    }
    .price {
      position: relative;
      color: #ff5722;
      padding: 0 20/2/12.5rem;
      font-size: 30/2/12.5rem;
      i {
        font-size: 15/2/12.5rem;
        position: absolute;
        top: 5/2/12.5rem;
        left: 0;
      }
    }
    .range {
      border: 1px solid #ccc;
      display: flex;
      width: 150/2/12.5rem;
      text-align: center;
      height: 50/2/12.5rem;
      line-height: 50/2/12.5rem;
      position: absolute;
      right: 0;
      bottom: -35/2/12.5rem;
      div {
        flex: 1;
      }
      img {
        width: 20/2/12.5rem;
      }
      .disable {
        opacity: 0.3;
      }
      .sum {
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
      }
    }
  }
  .active {
    .color {
      background: #f3f3f3;
      height: 40/2/12.5rem;
      line-height: 40/2/12.5rem;
      text-indent: 1em;
      i {
        display: inherit;
        font-size: 25/2/12.5rem;
        margin-right: 10/2/12.5rem;
        float: right;
      }
    }
    .range {
      display: none;
    }
  }
}
</style>


