import axios from './index'

const api = {
  newsList: '/news/list',
}

export const getNewsListApi = (options) => {
  return axios.request({
    url: api.newsList,
    params: options,
    method: 'get'
  })
}

export const getWaterFallNewsListApi = (options) => {
  return axios.request({
    url: api.newsList + '/waterfall',
    params: options,
    method: 'get'
  })
}
