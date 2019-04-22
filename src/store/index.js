import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import news from './module/news'
import menu from './module/menu'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user,
    news,
    menu
  }
})
