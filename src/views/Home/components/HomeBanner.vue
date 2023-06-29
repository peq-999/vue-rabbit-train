<script setup>
import { getBannerAPI } from '@/apis/home'  //1.先导入封装好的接口
import { onMounted,ref } from 'vue'

const bannerList = ref([])   //2.来个响应数据

const getBanner = async()=>{          //3.再写个函数去获取一下
    const res = await getBannerAPI()
    console.log(res)
    bannerList.value = res.result
}

onMounted(()=>getBanner())             //4.最后在合适的生命周期调用
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>