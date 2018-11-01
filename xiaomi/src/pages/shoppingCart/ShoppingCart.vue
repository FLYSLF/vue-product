<template>
	<div class="broadcast">
		<!-- <CartHeader title="购物车"></CartHeader> -->
    <div class="header">
		<div class="title">购物车</div>
		<div class="message"><span @click="deleteIcon()">{{deleteFlag?"完成":"编辑"}}</span><i class="iconfont ">&#xe763;</i></div>
	</div>
		<div class="content">
      <div class="itemWrap" v-for="(item,index) in goodsList">
		  	<CartIcon :json="item" :deleteFlag="deleteFlag"></CartIcon>  
      </div> 
		</div>
    <div class="more">
      <div class="guessyoulike"></div>
      <div class="moreList" v-for="(item,index) in moreList">
        <CartItem :json="item" ></CartItem>
      </div>
    </div>
		<div class="submit">
      <div class="check":class="{aa:checkto}" @click="toggle()">
        <img v-show="allcheck" src="../../assets/img/check_press.png" alt=""/>
        <img v-show="!allcheck" src="../../assets/img/check_normal.png" alt="">
        <span>全选</span>
      </div>
      <div class="total">
        <p>合计：<span><i class="money">￥</i>{{sumPrice}}</span></p>
      </div>
      <div class="btn">
       <button>结算(<span>{{sumNum}}</span>)</button>
      </div>
    </div>
	</div>
</template>
<script>
import CartHeader from "../../components/cartHeader";
import CartIcon from "../../components/cart_icon";
import CartItem from "../../components/cart_item";
export default {
  components: {
    CartHeader,
    CartIcon,
    CartItem
  },
  data() {
    return {
      goodsList: [
        {
          flag: true,
          title: "小米MIX 3 8GB+256G",
          color: "流沙金",
          imgSrc: require("../../assets/img/hongmi6.jpg"),
          price: 749,
          sum: 1,
        },
        {
          flag: true,
          title: "小米手环3 NFC版",
          color: "黑色",
          imgSrc: require("../../assets/img/shouhuang3.png"),
          price: 199,
          sum: 1,
        }
      ],
      moreList: [
        {
          title: "红米6 全网通版 3GB内存 32GB",
          comment: "磁动力滑盖全面屏",
          imgSrc: require("../../assets/img/xmi3.png"),
          price: 3999
        },
        {
          flag: true,
          title: "红米6 全网通版 3GB内存 32GB",
          color: "流沙金",
          comment: "磁动力滑盖全面屏",
          imgSrc: require("../../assets/img/xmi3.png"),
          price: 3999
        },
        {
          flag: true,
          title: "红米6 全网通版 3GB内存 32GB",
          color: "流沙金",
          comment: "磁动力滑盖全面屏",
          imgSrc: require("../../assets/img/xmi3.png"),
          price: 3999
        }
      ],
      allcheck: true,
      deleteFlag:false
    };
  },
  computed: {
    //判断商品是否所有都勾选 勾选则切换全选状态
    checkto() {
      var len = this.goodsList.length;
      var num1 = 0;
      this.goodsList.map((item, index) => {
        item.flag ? num1++ : num1;
      });
      num1 == len ? (this.allcheck = true) : (this.allcheck = false);
      return true;
    },
    //全选切换
    // check() {
    //   return this.allcheck ? this.goodsList.map(item => item.flag = true) !== undefined : this.goodsList.map(item => item.flag = false) === undefined;
    // },
    //总数量
    sumNum() {
      var num = 0;
      this.goodsList.map(item => (item.flag ? (num += item.sum) : num));
      return num;
      // return this.goodsList.map(item => item.flag) ? this.num++ : this.num--;
    },
    //总价格
    sumPrice() {
      var price = 0;
      this.goodsList.map(
        item => (item.flag ? (price += item.price * item.sum) : price)
      );
      return price;
    }
  },
  methods: {
    //全选切换
    toggle() {
      this.allcheck = !this.allcheck;
      this.allcheck ? this.goodsList.map(item => (item.flag = true)) !== undefined : this.goodsList.map(item => (item.flag = false)) === undefined;
    },
    deleteIcon(){
      console.log(this);
      this.deleteFlag = !this.deleteFlag;
    }
  }
};
</script>
<style lang="less">
// 头部
.broadcast{
  text-align: left;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 666;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80/2px;
  background: #f2f2f2;
  .back {
    position: absolute;
    left: 20/2px;
    img {
      width: 40/2px;
      height: 40/2px;
    }
  }
  .message {
    position: absolute;
    right: 20/2px;
    height: 100%;
    span {
      line-height: 80/2px;
      color: #000;
      padding: 0 18/2px;
    }
    i {
      position: relative;
      top: 5/2px;
      color: #939393;
      font-size: 40/2px;
    }
  }
  .title {
    font-size: 30/2px;
  }
}
.broadcast {
  .content {
    text-align: left;
    margin-top: 80/2px;
  }
  .submit {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 100/2px;
    height: 100/2px;
    line-height: 100/2px;
    background: #fff;
  }
  .check {
    padding: 0 30/2px;
    img {
      width: 40/2px;
    }
  }
  .total {
    margin-left: 60/2px;
    span {
      color: #ff5722;
      display: inline-block;
      position: relative;
      padding: 0 20/2px;
      font-size: 30/2px;
      i {
        position: absolute;
        bottom: 5/2px;
        height: 100%;
        font-size: 15/2px;
        left: 0;
      }
    }
  }
  .btn {
    position: absolute;
    right: 0;
    height: 100%;
    width: 35%;
    button {
      display: block;
      background: #ff6700;
      color: #fff;
      height: 100%;
      width: 100%;
      border: none;
    }
  }
  .more {
    .guessyoulike {
      background: url("../../assets/img/guessyoulike.jpg") no-repeat;
      background-size: 100%;
      height: 130/2px;
    }
  }
  .moreList {
    float: left;
    width: 50%;
    .item {
    }
  }
}
</style>