import {
  getNewsListApi,
  getWaterFallNewsListApi,
} from '@/api/news';

const state = {
  newsList: [],
  waterFallList: [],
}

const mutations = {
  /**
   * 设置资讯列表
   */
  setNewsList(state, list) {
    state.newsList = list;
  },
  /**
   * 设置瀑布流列表
   */
  setWaterFallList(state, list) {
    state.waterFallList = list;
  },
}

const actions = {
  // 获取资讯列表
  async getNewsList({ state, commit }, { page, number }) {
    try {
      const response = await getNewsListApi({
        page,
        number,
      });
      const rData = response.data;
      if (rData.status === 200) {
        commit('setNewsList', rData.data);
      }
      return rData;
    } catch (err) {
      console.error(err);
    }
  },
  // 获取首页瀑布流列表
  async getWaterFallNewsList({ state, commit }, { page, number }) {
    try {
      const response = await getWaterFallNewsListApi({
        page,
        number,
      });
      const rData = response.data;
      if (rData.status === 200) {
        commit('setWaterFallList', rData.data);
      }
      return rData;
    } catch (err) {
      console.error(err);
    }
  }
}

export default {
  state,
  mutations,
  actions,
}