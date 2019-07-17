const mutations = {
  setHeaderPath(state, pathObj) {
    state.headerPath = pathObj
    window.sessionStorage.setItem('headerPath', JSON.stringify(state.headerPath));
  }
}

export default mutations