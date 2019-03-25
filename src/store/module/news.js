import {
  getNewsListApi,
} from '@/api/news'

const state = {
  newsList: [],
}

const mutations = {
  /**
   * 设置资讯列表
   */
  setNewsList(state, list) {
    state.newsList = list;
  },
}

const actions = {
  // 获取资讯列表
  async getNewsList({ state, commit }, {page, number}) {
    const response = await getNewsListApi({
      page,
      number,
    });
    const rData = response.data;
    if (rData.status === 200) {
      commit('setNewsList', rData.data);
    }
    return rData;
  }
}

export default {
  state,
  mutations,
  actions,
}