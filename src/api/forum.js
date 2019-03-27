import axios from './index'

export const getForumTitInfo = (token) => {
  return axios.request({
    url: 'getForumTitInfo',
    params: {
      token
    },
    method: 'get'
  })
}

export const getPostSubareaList = (token) => {
  return axios.request({
    url: 'getPostSubareaList',
    params: {
      token
    },
    method: 'get'
  })
}
