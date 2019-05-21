import axios from './index'

// 获取个人中心初始化相关资料 (日发帖 总发帖 总会员...)
export const getpersonalData = (u_id) => {
    return axios.request({
      url: 'personalCenter',
      params: {
        u_id
      },
      method: 'post'
    })
  }