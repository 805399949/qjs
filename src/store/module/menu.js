const state = {
  selected: ''
}

const mutations = {
  setMenuSelected(state, selected) {
    state.selected = selected
  }
}

const actions = {
  handleSelected ({ commit }, selected) {
    commit('setMenuSelected', selected)
  }
}

export default {
  state,
  mutations,
  actions
}
