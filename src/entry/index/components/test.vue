<template>
  <div>
    <van-button type="primary" @click="toast">获取html</van-button>
    <div id="test">123</div>
    <!-- <hello ref="Hello"></hello> -->
  </div>
</template>

<script>
import Hello from './Hello.vue'
  export default {
    components:{
        Hello
    },
    data(){
      return {

      }
    },
    mounted(){
    },
    methods:{
      toast(){
        // 
        // console.log(Hello)
        console.log(document.getElementById('test'));
        console.log(this.$refs.Hello)
        const req = require.context('@/entry/index/components', false, /\.vue$/)
       
        console.log(req)
        const keys = req.keys();
        console.log(keys)
        const func = req(keys[0]);
        console.log(func)
    
        
        // const reader = new FileReader();

        //  // 读取文件内容，结果用data:url的字符串形式表示
        // reader.readAsText(flie,'utf-8');
       

       

  
      }
    }
  }
</script>

<style>
</style>