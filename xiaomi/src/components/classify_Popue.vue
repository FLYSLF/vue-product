<!-- 加参数 :modal=false 关闭遮罩 -->  
<mt-popup v-model="popupVisible" position="bottom">  
    <chooseType :type=type> </chooseType>  
</mt-popup>  
  
<script>  
    import chooseType from '@/components/cms/chooseType.vue'  
      
    export default {  
        name: 'publish',  
        data: function() {  
            return {  
                popupVisible: false, //popup 弹层默认关闭  
                type: 1, //1不限，2免费  
            }  
        },  
        components: {  
            chooseType  
        },  
        methods: { // 这里放方法，方法之间用逗号隔开  
  
            publishFree() {  
                // 发布免费内容，改变传入子层中的type值  
                this.type = 2;  
                this.openPopup();   
            },  
            publishPay() {  
                //发布付费内容，改变传入子层中的type值  
                this.type = 1;  
                this.openPopup();  
            },  
  
            //打开弹出层，默认有透明背景，点击遮罩关闭弹出层  
            openPopup() {  
                // 打开popup  
                this.popupVisible = true  
            },  
            closePopup() {  
                // 关闭popup  
                this.popupVisible = false  
            },  
  
        }  
</script> 