import axios from './index'

// 获取论坛总体信息 (日发帖 总发帖 总会员...)
export const getForumTitInfo = (token) => {
  return axios.request({
    url: 'getForumTitInfo',
    params: {
      token
    },
    method: 'get'
  })
}

// 获取货币种类列表 ()
export const getPostSubareaList = (token) => {
  return axios.request({
    url: 'getPostSubareaList',
    params: {
      token
    },
    method: 'get'
  })
}

// 具体种类的所有帖子

export const getPostList = (token, data) => {
  return axios.request({
    url: 'getPostList',
    data: {
      token,
      data
    },
    method: 'post'
  })
}
