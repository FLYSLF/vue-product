<template>
    <div class="detail">
    <!-- 头部back与更多按钮 -->
        <div class="d-header">
            <a @click="back()" class="left"><i class="iconfont">&#xe628;</i></a>
            <a class="right" @click="messageShareF($event)">
              <i class="iconfont">&#xe637;</i>
              <div class="messageShare" v-show="messageShareFlag">
                <i class="iconfont">&#xe666;</i>
                <p><i class="iconfont">&#xe763;</i>消息通知</p>
                <p><i class="iconfont">&#xe60c;</i>分享</p>
              </div>   
            </a>
        </div>
        <div class="imgDetail">
          <!-- 商品展示轮播 -->
          <div class="swiper-container" id="swiper1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in [1,2,3]">
               <img v-lazy="json.image_url" :src="json.image_url" alt="">
              </div>
            
            </div>
            <div style="text-align:center;" class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 标题 -->
        <div class="content">
          <div class="info">
            <div class="title">
              <h1>{{json.name}}</h1>
              <p>{{json.product_desc}}</p>
            </div>
            <div class="privce">
              ￥{{json.price}}
            </div>
            <div class="section-detail">
              <ul class="product_info">
                  <li>已选 <span>{{json.name}} x 1 </span><i class="iconfont icon-dayuhao1"></i></li>
                  <li>送至 <span>深圳市 南山区</span> <span class="haveGoods">有现货</span> <i class="iconfont icon-dayuhao1" ></i></li>
                  <li><i class="iconfont">&#xe654;</i>小米自营<i class="iconfont">&#xe654;</i>小米发货<i class="iconfont">&#xe654;</i>七天无理由退货</li>
              </ul>
            </div>
          </div>
          <div class="comment">
            <div class="swiper-container" id="swiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in littleList">
                  <div class="swiper-box">
                    <div class="comment-header">
                      <div class="avatar-img-box">
                        <img v-lazy="item.user_avatar" :src="item.user_avatar" alt="">
                      </div>
                      <div class="user-info">
                        <p class="userName">{{item.user_name}}</p>
                        <p>{{item.add_time}}</p>
                      </div>
                       <div class="up_num">
                          <i class="iconfont">&#xe681;</i>{{item.up_num}}
                        </div>
                    </div>
                    <div class="comment-text">
                      {{item.comment_content}}
                    </div>
                    <div class="comment-images">
                      <div class="photos" v-for="imgItem in item.comment_images">
                       <img v-lazy="imgItem" :src="imgItem" alt="">
                      </div>
                    </div>
                    <div class="replay" v-show="item.reply_content">
                      <span>官方回复</span>{{item.reply_content}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="moreComment">
              <router-link to="/moreComment">更多评论<i class="iconfont icon-jiantou1"></i></router-link>
            </div>
          </div>
          <div class="sp-detail">
            <h3>商品详情</h3>
            <img v-lazy="item.body.img_url" v-for="item in imgList" v-show="item.body.img_url" :src="item.body.img_url" alt="">
          </div>
          <div class="moreGoods">
            <h2>为你推荐</h2>
            <div class="goods-item" v-for="item in moreList">
              <div class="goods-img">
                <img v-lazy="item.image_url" @click="goDetails(item)" :src="item.image_url" alt="">
              </div>
              <h4>{{item.name}}</h4>
              <p><span>￥{{item.price}}</span></p>
            </div>
          </div>
          </div>
          <div id="setTop" @click="settop()" v-if="setTop1" :class="{setTopAnimate:setTop1}">
          <img  src="../assets/img/top.451d650ecd.png" alt=""/>
        </div>
        <footer>
          <div class="footer">
            <a @click="breake('/')">
            <i class="iconfont icon-shouye"></i>
            首页
            </a>
            <a class="cart" @click="breake('/shoppingCart')">
            <i class="iconfont icon-ziyuan"></i>
            购物车
            <div class="num" v-show="cartNum">{{cartNum}}</div>
            </a>
            <div class="action-box">
              <a @click="addToCart()">加入购物车</a>
            </div>
          </div>
        </footer>
        <div v-show="addCartSuccess" :class="{addCart:addCartSuccess}">
          <i class="iconfont">&#xe654;</i>
          <h2>添加成功</h2>
        </div>
        </div>
        
        
    
</template>
<script>
import store from "@/store/store.js";
import "@/assets/lib/swiper/js/swiper.js";
import axios from "axios";

export default {
  data() {
    return {
      cartNum:store.state.cartNum,
      messageShareFlag: false,
      commentList: [],
      littleList: [],
      imgList: [],
      moreList: [],
      setTop1: false,
      addCartSuccess:false
    };
  },
  computed: {
    // cartNum(){
    //   return store.state.cartNum;
    // },
    tabbarFlag() {
      return store.state.tabbarFlag;
    },
    json() {
      return store.state.detailsJson;
    }
  },
  methods: {
    back() {
      window.history.back();
      // store.state.tabbarFlag = true;
    },
    messageShareF(e) {
      e.stopPropagation();
      this.messageShareFlag = true;
      document.onclick = () => {
        this.messageShareFlag = false;
      };
    },
    goDetails(json) {
      this.$router.push("/details" + json.product_id);
      //用过vuex store传入当前数据
      store.state.detailsJson = json;
      document.documentElement.scrollTop = 0;
    },
    //置顶
    settop() {
      var timer = setInterval(() => {
         document.body.scrollTop == 0? document.documentElement.scrollTop -= document.documentElement.scrollTop / 5 :document.body.scrollTop -= document.body.scrollTop / 5;
        if (document.body.scrollTop <= 0 && document.documentElement.scrollTop <= 0) clearInterval(timer);
      }, 16);
      document.addEventListener("touchmove",()=>{clearInterval(timer)})
    },
    breake(path){
      this.$router.push(path);
      store.state.tabbarFlag = true;
    },
    addToCart(){
      store.state.cartFoodsList.push(this.json);
      this.cartNum++;
      this.addCartSuccess = true;
      setTimeout(() =>{
        this.addCartSuccess = false;
      },1500)
    }
    
  },
  mounted() {
    //隐藏底部导航
    document.documentElement.scrollTop = 0;
    store.state.tabbarFlag = false;
    //请求评论数据
    this.axios.get("/api/detailsComment").then(res => {
      this.commentList = res.data.data;
      var len = res.data.length;
      for (var i = 0; i < 5; i++) {
        this.littleList.push(res.data.data[i]);
      }
      setTimeout(() => {
        //只能在这里用定时器实例swiper 不然数据还未出现 siwper只能检测到一屏
        new Swiper("#swiper2", {
          autoplay: false,
          lazy: true, 
        });
      });
    });
    // 请求商品详情图片数据
    this.axios.get("/api/detailImg").then(res => {
      this.imgList = res.data.data;
    });
    this.axios.get("/api/detailMore").then(res => {
      this.moreList = res.data.data;
    });
    //轮播
    new Swiper("#swiper1", {
      pagination: ".swiper-pagination",
      autoplay: false,
      lazy: true,
    });
    
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop + document.body.scrollTop;
      scrollTop >= 1000 ? (this.setTop1 = true) : (this.setTop1 = false);
    };
  }
};
</script>
<style>
@import "../assets/css/details";
@import "../assets/lib/swiper/css/swiper.css";
</style>


