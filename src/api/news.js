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