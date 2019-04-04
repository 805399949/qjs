const mutations = {
  setHeaderPath(state, pathObj) {
    state.headerPath = pathObj
    window.localStorage.setItem('headerPath', JSON.stringify(state.headerPath));
  }
}

export default mutations