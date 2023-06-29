//封装所有和用户相关的接口函数
import request from '@/utils/http'

export const loginAPI = ({account,password})=>{
    return request({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}


//接口获取猜你喜欢商品
export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }