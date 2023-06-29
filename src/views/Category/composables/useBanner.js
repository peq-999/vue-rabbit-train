//封装banner轮播图相关业务代码
import { ref,onMounted } from "vue"
import { getBannerAPI } from "@/apis/home"

export function useBanner() {
    const bannerList = ref([])   //2.来个响应数据
    const getBanner = async () => {          //3.再写个函数去获取一下
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        console.log(res)
        bannerList.value = res.result
    }
    onMounted(() => getBanner())             //4.最后在合适的生命周期调用
    return{
        bannerList
    }

}