
const state = {
  seriesGenre: [],
  moviesGenre: []
}
const getters = {
  getSeriesGenre(state) {
    return state.seriesGenre
  },
  getMoviesGenre(state) {
    return state.moviesGenre
  }
}

const mutations = {
  setSeriesGenre(state, data) {
    state.seriesGenre = data
  },
  setMoviesGenre(state, data) {
    state.moviesGenre = data
  }
}

const actions = {
  setGenre({ commit }, data) {
    commit('setSeriesGenre', data.series)
    commit('setMoviesGenre', data.movies)
  }
}
export default { namespaced: true, state, getters, mutations, actions }
