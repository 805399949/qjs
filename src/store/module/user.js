import {
  login,
  getUserInfo,
  logout
} from '@/api/user'

import {
  setToken,
  getToken,
  setUserInfoCookie,
  getUserInfoCookie
} from '@/lib/util'

const state = {
  userInfo: getUserInfoCookie(),
  token: getToken(),
  access: '',
  hasGetInfo: false
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
    setUserInfoCookie(userInfo)
  },
  setToken(state, token) {
    state.token = token
    setToken(token)
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
        const data = res.data
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
      commit('setToken', '')
      commit('setUserInfo', {})
      resolve()
    })
  },
  // 获取用户相关信息
  getUserInfo({ state, commit }) {
    return new Promise((resolve, reject) => {
      try {
        getUserInfo(state.token).then(res => {
          const data = res.data
          commit('setUserInfo', data)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
