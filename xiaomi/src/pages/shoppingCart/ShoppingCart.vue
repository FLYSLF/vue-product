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
    <!-- 更多 -->
		<div class="more" :class="{pb100:empty}">
			<div class="guessyoulike">
				<img src="../../assets//img/guessyoulike.jpg" />
			</div>
			<div class="moreList" v-for="(item,index) in moreList">
				<CartItem  @change="addCart" :json="item" :index="index"></CartItem>
			</div>
      <div class="m_footer" >
        <hr/><span>没有更多了</span><hr/>
      </div>
		</div>
		<div class="submit" v-show="empty">
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
				<button @click="submit()"  :class="{complete:deleteFlag}">{{deleteFlag?"删除":"结算"}} <span v-show="!deleteFlag">(<span>{{sumNum}}</span>)</span></button>
			</div>
		</div>
  <!-- 置顶 -->
    <div id="setTop" @click="settop()" v-if="setTop1" :class="{setTopAnimate:setTop1}">
      <img  src="../../assets/img/top.451d650ecd.png" alt=""/>
    </div>
    <!-- 添加购物车成功 -->
    <!-- <mt-popup v-model="addCartSuccess"><h3>hello</h3></mt-popup> -->
    <div :class="{addCart:addCartSuccess}">
      <i class="iconfont">&#xe654;</i>
      <h2>添加成功</h2>
    </div>
    <!-- <div class="colorSelect">

    </div> -->
	</div>
</template>
<script>
import CartHeader from "../../components/CartHeader";
import CartIcon from "../../components/Cart_icon";
import CartItem from "../../components/Cart_item";
import axios from "axios";
import store from "../../store/store"
import { Lazyload ,MessageBox } from "mint-ui";

export default {
  components: {
    CartHeader,
    CartIcon,
    CartItem
  },
  data() {
    return {
      // goodsList: [],
      moreList: [],
      allcheck: true,
      deleteFlag: false,
      checkArr: [],
      empty: true,
      // scrollTop:0
      setTop1: false,
      addCartSuccess:false
    };
  },
  //请求数据
  mounted() {
    this.axios.get("/api/cartData").then(res => {
      this.moreList = res.data.data;
    });
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop + document.body.scrollTop;
      scrollTop >= 1000 ? (this.setTop1 = true) : (this.setTop1 = false);
    };
    store.state.tabbarFlag = true;
  },
  computed: {
    goodsList(){
      return store.state.cartFoodsList;
    },
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
      this.goodsList.map(item => (item.flag ? (num += item.sum) : item.sum));
      store.state.cartNum = num;
      return num;
      // return this.goodsList.map(item => item.flag) ? this.num++ : this.num--;
    },
    //总价格
    sumPrice() {
      var price = 0;
      this.goodsList.map(
        item => (item.flag ? (price += item.price * item.sum) : item.sum)
      );
      return price;
    }
  },
  methods: {
    //全选切换
    toggle() {
      this.allcheck = ! this.allcheck;
      this.allcheck ? this.goodsList.map(item => (item.flag = true)) !== undefined : this.goodsList.map(item => (item.flag = false)) === undefined;
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
          item.flag = false;
          if (this.checkArr.length >= index + 1) {
            this.checkArr[index].flag = true;
          }
        });
        this.checkArr = [];
      }
      //切换完成和编辑状态
      this.deleteFlag = !this.deleteFlag;
    },
    //点击提交/删除按钮
    submit() {
      if (this.deleteFlag) {//判断是删除还是结算
      MessageBox.confirm('确认删除勾选商品？',"").then(action => {
        var len = this.goodsList.length;
        //删除所选商品
        for (var i = 0; i < len; i++) {
          if (this.goodsList[i].flag) {
            (i => {
              setTimeout(i => {
                this.goodsList.splice(i, 1);
                var newLen = this.goodsList.length;
                if (newLen == 0) {
                  this.deleteFlag = false;
                  this.empty = false;
                }
              }, 0);
            })(i);
          }
        }
      });
      }
    },
    // 添加至购物车
    addCart(json, index) {
      json.sum = 1;
      this.goodsList.push(json);
      var ranNum = Math.floor(Math.random() * this.moreList.length);
      this.moreList.sort((a, b) => Math.random() - 0.5);
      this.empty = true;
      this.addCartSuccess = true;
      setTimeout(() =>{
        this.addCartSuccess = false;
      },1500)
    },
    //置顶
    settop() {
      var timer = setInterval(() => {
        document.documentElement.scrollTop -= document.documentElement.scrollTop / 5;
        if (document.documentElement.scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 16);
      document.addEventListener("touchmove",function(){
        clearInterval(timer)
      })
    }
  }
};
</script>
<style>
@import "../../assets/css/shoppingCart";
</style>