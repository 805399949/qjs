import {
  login,
  getUserInfo,
  logout
} from '@/api/user'

import {
  getSessionItem,
  setSessionItem,
  removeSessionItem
} from '@/lib/util'


const state = {
  userInfo: getSessionItem('userInfo') || null,
  token: getSessionItem('token') || null,
  // access: '',
  // hasGetInfo: false,
  // isLogin: false
}

const mutations = {
  setUserInfo(state, userInfo) {   
    setSessionItem('userInfo', userInfo)
    state.userInfo = userInfo
  },
  setToken(state, token) {
    setSessionItem('token', token)
    state.token = token
  },
  clearUserInfo(state) {
    removeSessionItem('token')
    removeSessionItem('userInfo')
    state.userInfo = null
  }
}

const actions = {
  // 登录
  handleLogin({ commit }, { userName, password }) {
    userName = userName.trim()
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      }).then(res => {
        let data = res.data
        commit('setUserInfo', data.userInfo)
        commit('setToken', data.token)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 退出登录
  handleLogOut({ state, commit }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
      //   commit('setToken', '')
      //   commit('setAccess', [])
      //   resolve()
      // }).catch(err => {
      //   reject(err)
      // })
      // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
      commit('clearUserInfo')
      
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
