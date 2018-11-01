<template>
	<div class="broadcast">
		<!-- <CartHeader title="购物车"></CartHeader> -->
		<div class="header" >
			<div class="title">购物车</div>
			<div class="message"><span v-show="empty" @click="deleteIcon()">{{deleteFlag?"完成":"编辑"}}</span><i class="iconfont ">&#xe763;</i></div>
		</div>
		<div class="content">
			<div class="itemWrap" v-show="empty" v-for="(item,index) in goodsList">
				<CartIcon :json="item" :deleteFlag="deleteFlag"></CartIcon>
			</div>
      <div class="empry" v-show="!empty">
        <i class="iconfont">&#xe643;</i><span>购物车还是空的</span><button>去逛逛</button>
      </div>
		</div>
		<div class="more">
			<div class="guessyoulike">
				<img src="../../assets//img/guessyoulike.jpg" />
			</div>
			<div class="moreList" v-for="(item,index) in moreList">
				<CartItem @change="addCart" :json="item"></CartItem>
			</div>
		</div>
		<div class="submit">
			<div class="check" :class="{aa:checkto}" @click="toggle()">
				<img v-show="allcheck" src="../../assets/img/check_press.png" alt="" />
				<img v-show="!allcheck" src="../../assets/img/check_normal.png" alt="">
				<span>全选</span>
			</div>
			<div class="total" v-show="!deleteFlag">
				<p>合计：<span><i class="money">￥</i>{{sumPrice}}</span></p>
			</div>
			<div class="collection"><button  v-show="deleteFlag">移入收藏</button></div>
			<div class="btn">
				<button @click="submit()" :class="{complete:deleteFlag}">{{deleteFlag?"删除":"结算"}} <span v-show="!deleteFlag">(<span>{{sumNum}}</span>)</span></button>
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
          sum: 1
        },
        {
          flag: true,
          title: "小米手环3 NFC版",
          color: "黑色",
          imgSrc: require("../../assets/img/shouhuang3.png"),
          price: 199,
          sum: 1
        }
      ],
      moreList: [
        {
          flag: true,
          title: "红米6 全网通版 3GB内存 32GB",
          comment: "磁动力滑盖全面屏",
          color: "流沙金",
          imgSrc: require("../../assets/img/xmi3.png"),
          price: 3999,
          sum: 1
        },
        {
          flag: true,
          title: "红米6 全网通版 3GB内存 32GB",
          color: "流沙金",
          comment: "磁动力滑盖全面屏",
          imgSrc: require("../../assets/img/xmi3.png"),
          price: 3999,
          sum: 1
        },
        {
          flag: true,
          title: "红米6 全网通版 3GB内存 32GB",
          color: "流沙金",
          comment: "磁动力滑盖全面屏",
          imgSrc: require("../../assets/img/xmi3.png"),
          price: 3999,
          sum: 1
        }
      ],
      allcheck: true,
      deleteFlag: false,
      checkArr: [],
      empty:true
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
      this.allcheck
        ? this.goodsList.map(item => (item.flag = true)) !== undefined
        : this.goodsList.map(item => (item.flag = false)) === undefined;
    },
    deleteIcon() {
      //如果编辑则设置所有商品都是未选中状态 deleteFlag为true是完成状态 false切换
      // this.deleteFlag ? this.goodsList.map(item => (item.flag = false)) : this.goodsList.map((item,index) => (arr.length>=index-1?arr[index].flag = true:1));
      if (!this.deleteFlag) {
        //保存之前状态
        this.goodsList.map(item => {
          item.flag ? this.checkArr.push(item) : this.checkArr;
        });
        this.goodsList.map(item => (item.flag = false));
      } else {
        this.goodsList.map((item, index) => {
          if (this.checkArr.length >= index + 1) {
            this.checkArr[index].flag = true;
          }
          // arr.length>=index-1?arr[index].flag = true:1);
        });
        this.checkArr = [];
      }
      //切换完成和编辑状态
      this.deleteFlag = !this.deleteFlag;
    },
    //点击提交/删除按钮
    submit() {
      if (this.deleteFlag) {//判断是删除还是结算
        var len = this.goodsList.length;
        //删除所选商品
        for (var i = 0; i < len; i++) {
          if (this.goodsList[i].flag) {
            ((i) => {
              setTimeout((i) => {
                this.goodsList.splice(i, 1);
                var newLen = this.goodsList.length;
                if(newLen == 0){
                  this.deleteFlag = false;
                  this.empty = false;
                }
              },0);
            })(i);
          }
        }
      }
    },
    addCart(json){
      console.log(json);
      this.goodsList.push(json);
    }

  }
};
</script>
<style>
@import "../../assets/css/shoppingCart";
</style>