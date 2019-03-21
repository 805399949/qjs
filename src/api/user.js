import axios from './index'


export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/login',
    params: {
      userName,
      password
    },
    method: 'post'
  })
}