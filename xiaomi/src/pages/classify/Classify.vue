<template>
	<div class="audio">
		<TopSearch wid=90%>
			<span slot="right"><i class="iconfont icon-iconfontzhizuobiaozhun023110"></i></span>
		</TopSearch>
		<div class="content">
			<div class="cla-Left">
				<li v-for="(itemleft,index) in list_min" >
					<a @click="clickme($event)" :href="'#'+itemleft.category_id">{{itemleft.category_name}}</a>
				</li>
			</div>
			<div class="cla-Right">
				<!--新品-->
				<ClassifyC id="653" class="wear">
						<router-link to="/Detailsc1" slot="image">
							<img src="static/images/t1.jpg"/>
						</router-link>
				</ClassifyC>	
				
				<ImageSmall newsj='手机' :info_list="info_lists">
				</ImageSmall>
				
				<ImageSmall newsj='电视' :info_list="dianShi">
				</ImageSmall>
				
				<ImageSmall newsj='电脑' :info_list="dianNao">
				</ImageSmall>
				
				<!--手机-->
				<ClassifyC id="457" class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='小米手机' :info_list="xiaomisj">
				</ImageSmall>
				
				<ImageSmall newsj='红米手机' :info_list="hongmisj">
				</ImageSmall>
				
				<ImageSmall newsj='移动4G+专区' :info_list="yidong">
				</ImageSmall>
				
				<PinDao pinDao="进入手机频道">
				</PinDao>
				<!--电视项-->
				<ClassifyC id='458' class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='电视' :info_list="dianshib">
				</ImageSmall>
				
				<PinDao pinDao="进入电视频道">
				</PinDao>
				
				<ImageSmall newsj='盒子' :info_list="hezi">
				</ImageSmall>
				
				<ImageSmall newsj='音响' :info_list="yinxiang">
				</ImageSmall>
				
				<ImageSmall newsj='电视配件与会员' :info_list="dianpeijian">
				</ImageSmall>
				
				<!--电脑项-->
				<ClassifyC id='459' class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='电脑' :info_list="diannaob">
				</ImageSmall>
				
				<PinDao pinDao="进入笔记本频道">
				</PinDao>
				
				<ImageSmall newsj='电脑配件' :info_list="diannaop">
				</ImageSmall>
				
				<!-- 家电项-->
				<ClassifyC id='460' class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='家电' :info_list="jiadian">
				</ImageSmall>
				
				<PinDao pinDao="进入智能频道">
				</PinDao>
				
				<ImageSmall newsj='厨房家电' :info_list="chufang">
				</ImageSmall>
				
				<!-- 路由项-->
				<ClassifyC id="462" class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='路由' :info_list="luyou">
				</ImageSmall>
				
				<PinDao pinDao="进入智能频道">
				</PinDao>
				
				<ImageSmall newsj='电力猫' :info_list="mao">
				</ImageSmall>
				
				<!-- 出行项-->
				<ClassifyC id="871" class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='出行' :info_list="chuxing">
				</ImageSmall>
				
				<PinDao pinDao="进入智能频道">
				</PinDao>
				
				<!-- 穿戴项-->
				<ClassifyC id="874" class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='穿戴' :info_list="chuandai">
				</ImageSmall>
				
				<PinDao pinDao="进入智能频道">
				</PinDao>
				
				<!-- 智能项-->
				<ClassifyC id="461" class="wear">
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='智能' :info_list="zhineng">
				</ImageSmall>
				
				<PinDao pinDao="进入智能频道">
				</PinDao>
				
				<!-- 电源项-->
				<ClassifyC id="463" class="wear" >
					<img slot="image" src="static/images/t1.jpg"/>
				</ClassifyC>
				
				<ImageSmall newsj='电源' :info_list="dianyuan">
				</ImageSmall>
				
				<PinDao pinDao="进入智能频道">
				</PinDao>
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">
	import TopSearch from '@/components/TopSearch'
	import ClassifyC from "@/components/ClassifyC"
	import ImageSmall from "@/components/ImageSmall"
	import PinDao from "@/components/PinDao"
	export default {
		components: {
			TopSearch,
			ClassifyC,
			ImageSmall,
			PinDao
		},
		data() {
			return {
				arr: [],
				arr1: [],
				arr2: [],
				arr3: [],
				arr4: [],
				arr5: [],
				arr6: [],
				arr7: [],
				arr8: [],
				arr9: [],
//			每个单元的数据
				category_name:[],
//				主数据
				list_min:[],
//				//新品项
				info_lists:[],
				dianShi:[],
				dianNao:[],
				//手机项
				xiaomisj:[],
				hongmisj:[],
				yidong:[],
				//电视项
				dianshib:[],
				hezi:[],
				yinxiang:[],
				dianpeijian:[],
				//电脑项
				diannaob:[],
				diannaop:[],
				//家电项
				jiadian:[],
				chufang:[],
				//路由项
				luyou:[],
				mao:[],
				//出行项
				chuxing:[],
				//电源项
				chuandai:[],
				zhineng:[],
				dianyuan:[],
			}
		},
		
		mounted(){
			//访问接口
			//var That = this;
			this.axios.get("/api/listdata").then((res)=>{		
				this.list_min = res.data.data.data;
				this.arr = this.list_min[0]
				this.arr1 = this.list_min[1]
				this.arr2 = this.list_min[2]
				this.arr3 = this.list_min[3]
				this.arr4 = this.list_min[4]
				this.arr5 = this.list_min[5]
				this.arr6 = this.list_min[6]
				this.arr7 = this.list_min[7]
				this.arr8 = this.list_min[8]
				this.arr9 = this.list_min[9]
				//新品
				this.info_lists = this.arr.category_list[2].body.items
				this.dianShi = this.arr.category_list[4].body.items
				this.dianNao = this.arr.category_list[6].body.items
				//手机
				this.xiaomisj = this.arr1.category_list[2].body.items
				this.hongmisj = this.arr1.category_list[4].body.items
				this.yidong = this.arr1.category_list[6].body.items
				//电视
				this.dianshib = this.arr2.category_list[2].body.items
				this.hezi = this.arr2.category_list[5].body.items
				this.yinxiang = this.arr2.category_list[7].body.items
				this.dianpeijian = this.arr2.category_list[9].body.items
				//电脑
				this.diannaob = this.arr3.category_list[2].body.items
				this.diannaop = this.arr3.category_list[5].body.items
				//家电
				this.jiadian = this.arr4.category_list[2].body.items
				this.chufang = this.arr4.category_list[5].body.items
				//路由
				this.luyou = this.arr5.category_list[2].body.items
				this.mao = this.arr5.category_list[5].body.items
				//出行
				this.chuxing = this.arr6.category_list[2].body.items
				//穿戴
				this.chuandai = this.arr7.category_list[2].body.items
				//智能
				this.zhineng = this.arr8.category_list[2].body.items
				//电源
				this.dianyuan = this.arr9.category_list[2].body.items
//							console.log(this.arr4);
				
				
//						拿取每一项的名字
				this.list_min.map((item)=>{
					this.category_name.push(item.category_name)

//					console.log(item);


				})
//						console.log(this.arr);
//						console.log(this.list_min);
			})				
		},
		methods:{
			clickme:function(event){
				
				var liDom = document.getElementsByClassName("active");
				for(var i=0;i<liDom.length;i++){
					liDom[i].className= "";
				}
				event.srcElement.parentElement.className =event.srcElement.parentElement.className + " active";
				
//				console.log(event)
			}
		}

	}
</script>

<style lang="less">
	.audio{
		

	.content {
		width: 100%;
		/*margin-top: -3rem;*/
		margin-bottom: 280/75rem;
		border-top: 1px solid gainsboro;
		width: 100%;
		height: 100%;
		overflow: hidden;
		a{
			color: #666;
		}
		
		/*内容左边部分开始*/
		.cla-Left {
			width: 19%;
			float: left;
			border-right:1px solid #eee;
			box-sizing:border-box;
			overflow: hidden;
			height: 46rem;
			overflow-y: auto;
			&::-webkit-scrollbar {display:none};
			li {
				height: 3.4rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.active>a{
					color: orangered;
				}
		}
		/*内容左边部分结束*/
		/*内容右边部分开始*/
		.cla-Right {
			width: 80%;
			background: white;
			float: right;
			padding:0 10/75rem 10/75rem;
			height: 46rem;
			overflow: auto;
			&::-webkit-scrollbar {display:none}
		}
	}
	}
	
	/*内容右边部分结束*/
</style>